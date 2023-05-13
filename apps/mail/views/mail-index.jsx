const { useEffect, useState } = React
const { Link } = ReactRouterDOM

import { mailService } from "../services/mail.service.js"
import { MailList } from "../cmps/mail-list.jsx"
import { ComposeMail } from "../cmps/mail-compose.jsx"
import { MailFilter } from "../cmps/mail-filter.jsx"
import { MailStatus } from "../cmps/mail-status.jsx"
import { MailSort } from "../cmps/mail-sort.jsx"
import { MailDetails } from "../cmps/mail-details.jsx"


export function MailIndex() {
    const [selectedMail, setSelectedMail] = useState(null)
    const [mails, setMails] = useState([])
    const [status, setStatus] = useState('inbox')
    const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())
    const [isComposeOpen, setIsComposeOpen] = useState(false)
    const [sortOption, setSortOption] = useState('date')
    const [sortOrder, setSortOrder] = useState(1);
    // const [inboxCount, setinboxCount] = useState();

    useEffect(() => {
        loadMails()

    }, [filterBy, status, sortOption, sortOrder])




    function loadMails() {
        mailService.query(filterBy, status).then((mails) => {
            if (sortOption === 'date') {
                mails.sort((a, b) => (b.sentAt - a.sentAt) * sortOrder);
            } else if (sortOption === 'from') {
                mails.sort((a, b) => (a.from.localeCompare(b.from)) * sortOrder)
            }
            setMails(mails);
        })
    }

    function onDeleteMail(mailId) {

        mailService.remove(mailId).then(() => {
            const updatedMails = mails.filter(mail => mail.id !== mailId)
            setMails(updatedMails)
        })
    }

    function onSetStatus(status) {
        setStatus(status)
    }

    function onSetFilter(filterBy) {
        setFilterBy(prevFilterBy => ({ ...prevFilterBy, ...filterBy }))
    }

    function handleComposeClick() {
        setIsComposeOpen(true);
    }

    function onComposeClose() {
        setIsComposeOpen(false);
    }

    function onSelectMail(mail) {
        setSelectedMail(mail)
    }


    return (
        <section className="mail-index">

            <div className="mail-logo">
                <img src="assets/img/logo/mister-mail-logo.png"></img>
            </div>

            <MailFilter filterBy={filterBy} onSetFilter={onSetFilter} inputClassName="mail-search-input" />
            {!selectedMail && <React.Fragment>
                <MailSort setSortOption={setSortOption} sortOrder={sortOrder} setSortOrder={setSortOrder} />
                <section className="mail-list">
                    <MailList mails={mails} onDeleteMail={onDeleteMail} onSelectMail={onSelectMail} />
                </section>
            </React.Fragment>}
            {selectedMail && <MailDetails mail={selectedMail} />}


            <div className="nav-bar">
                <button className="compose-btn" onClick={() => setIsComposeOpen(true)}>
                    <i className="fa-solid fa-pencil"></i>
                    Compose</button>
                <MailStatus setStatus={setStatus} setSelectedMail={setSelectedMail} />
            </div>

            {isComposeOpen && <ComposeMail isOpen={isComposeOpen} onClose={onComposeClose} />}
        </section >
    )
}

