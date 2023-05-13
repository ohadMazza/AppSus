const { Link } = ReactRouterDOM
const { Fragment, useState } = React

import { MailPreview } from "./mail-preview.jsx"

export function MailList({ mails, onDeleteMail, onSelectMail }) {
    return (
        <table >
            <tbody>
                {mails.map(mail => <MailPreview onDeleteMail={onDeleteMail} key={mail.id} mail={mail} onSelectMail={onSelectMail} />)}
            </tbody>
        </table>
    )

}