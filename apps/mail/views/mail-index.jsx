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
        <section >
            <MailList mails={mails} />
        </section>

    )
}

