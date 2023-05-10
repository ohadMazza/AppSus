import { mailService } from "../services/mail.service.js"
import { MailList } from "../cmps/mail-list.jsx"



export function MailIndex() {
    // const [mails, setMails] = useState([])
    mailService.check()





    return (
        <section >
            <MailList />
        </section>

    )
}

