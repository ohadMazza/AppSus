import { mailService } from "../services/mail.service.js"
const { useEffect, useState } = React


export function ComposeMail({ isOpen, onClose }) {
    const [mailToCompose, setMailToCompose] = useState(mailService.getEmptyMail())

    if (!isOpen) {
        return null;
    }

    function handleTxtChange({ target }) {
        const field = target.name
        const value = target.value
        setMailToCompose(prevMail => ({ ...prevMail, [field]: value }))
    }

    function onSentMail(ev) {
        console.log(mailToCompose)
        ev.preventDefault();
        mailService.save(mailToCompose)
            .then(() => {
                onClose();
            })

    }

    const { subject, body, to } = mailToCompose
    return (
        <section>
            <div className="compose-container">
                <div className="compose-header">
                    <h2>New Message</h2>
                    <button className="close-btn" onClick={onClose}>
                        &times;
                    </button>
                </div>
                <form onSubmit={onSentMail}>
                    <input
                        onChange={handleTxtChange}
                        name="to"
                        type="text"
                        placeholder="To"
                        value={to}
                        required
                    />
                    <input
                        onChange={handleTxtChange}
                        name="subject"
                        type="text"
                        placeholder="Subject"
                        value={subject}
                        required
                    />
                    <div className="compose-body">
                        <div
                            name="body"
                            contentEditable="true"
                            className="email-message"
                            placeholder="Message"
                            value={body}
                            onChange={handleTxtChange}
                        />
                    </div>
                    <button type="submit" className="send-btn">
                        Send
                    </button>
                </form>
            </div>
        </section>
    )
}
