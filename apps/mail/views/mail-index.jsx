const { useEffect, useState } = React
const { Link } = ReactRouterDOM

import { mailService } from "../services/mail.service.js"
import { MailList } from "../cmps/mail-list.jsx"
import { ComposeMail } from "../cmps/mail-compose.jsx"
import { MailFilter } from "../cmps/mail-filter.jsx"




export function MailIndex() {
    const [mails, setMails] = useState([])
    const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())
    const [isComposeOpen, setIsComposeOpen] = useState(false)
    console.log(mails)

    useEffect(() => {
        loadMails()
    }, [filterBy])

    function loadMails() {
        mailService.query(filterBy).then(mails => setMails(mails))
        // carService.query().then(setCars)
    }

    function onDeleteMail(mailId) {
        console.log('remove mail id:', mailId)

        mailService.remove(mailId).then(() => {
            const updatedMails = mails.filter(mail => mail.id !== mailId)
            setMails(updatedMails)
        })
    }

    function onSetFilter(filterBy) {
        setFilterBy(prevFilterBy => ({ ...prevFilterBy, ...filterBy }))
    }

    function handleComposeClick() {
        setIsComposeOpen(true);
    }

    function handleComposeClose() {
        setIsComposeOpen(false);
    }


    return (
        <section className="mail-index">

            <div className="mail-logo">
                <img src="assets/img/logo/mister-mail-logo.png"></img>
            </div>
            <MailFilter filterBy={filterBy} onSetFilter={onSetFilter} />
            {/* <div className="search-container">
                <input type="text" placeholder="Search in mail" />
                <i className="fa-solid fa-magnifying-glass"></i>
            </div> */}

            <div className="filters">Filters</div>
            <div className="nav-bar">
                <button className="compose-btn" onClick={() => setIsComposeOpen(true)}>
                    <i className="fa-solid fa-pencil"></i>
                    Compose</button>
                <div className="labels">
                    <div className="label">
                        <i className="fa-solid fa-inbox"></i>
                        <button>Inbox</button>
                        <span>46</span>
                    </div>
                    <div className="label">
                        <i className="fa-regular fa-paper-plane"></i>
                        <button>Sent</button>
                        <span>5</span>
                    </div>
                    <div className="label">
                        <i className="fa-regular fa-file-lines"></i>
                        <button>Draft</button>
                        <span>12</span>
                    </div>
                    <div className="label">
                        <i className="fa-regular fa-trash-can"></i>
                        <button>Trash</button>
                        <span>13</span>
                    </div>
                </div>
            </div>
            <section className="mail-list">
                <MailList mails={mails} onDeleteMail={onDeleteMail} />
            </section>
            {isComposeOpen && <ComposeMail isOpen={isComposeOpen} onClose={handleComposeClose} />}
        </section >
    )
}

