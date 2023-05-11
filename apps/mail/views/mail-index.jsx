const { useEffect, useState } = React
const { Link } = ReactRouterDOM

import { mailService } from "../services/mail.service.js"
import { MailList } from "../cmps/mail-list.jsx"




export function MailIndex() {
    const [mails, setMails] = useState([])
    console.log(mails)
    // const [filterBy, setFilterBy] = useState()

    useEffect(() => {
        loadMails()
    }, [])

    function loadMails() {
        mailService.query().then(mails => setMails(mails))
        // carService.query().then(setCars)
    }

    // function onRemoveMail(mailId) {
    //     mailService.remove(mailId).then(() => {
    //         const updatedMails = mails.filter(mail => mail.id !== mailId)
    //         setCars(updatedMails)
    //         // showSuccessMsg(`Car (${mailId}) removed!`)
    //     })

    // }

    // function onSetFilter(filterBy) {
    //     setFilterBy(prevFilterBy => ({ ...prevFilterBy, ...filterBy }))
    // }

    return (
        <section className="mail-index">

            <div className="mail-logo">
                <img src="assets/img/logo/mister-mail-logo.png"></img>
            </div>
            <div class="search-container">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Search in mail" />
            </div>

            <button className="compose-btn">Compose</button>
            <div className="filters">Filters</div>
            <div className="labels">
                <div>
                    <i class="fa-solid fa-inbox"></i>
                    <button>Inbox</button>
                    <span>456</span>
                </div>   <div>
                    <i class="fa-regular fa-paper-plane"></i>
                    <button>Sent</button>
                    <span>5</span>
                </div>
                <div>
                    <i class="fa-regular fa-file-lines"></i>
                    <button>Draft</button>
                    <span>12</span>
                </div>
                <div>
                    <i class="fa-regular fa-trash-can"></i>
                    <button>Trash</button>
                    <span>13</span>
                </div>
            </div>
            <section className="mail-list">
                <MailList mails={mails} />

            </section>

        </section>
    )
}

