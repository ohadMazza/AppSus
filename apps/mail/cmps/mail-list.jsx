const { Link } = ReactRouterDOM
const { Fragment, useState } = React

import { MailPreview } from "./mail-preview.jsx"

export function MailList({ mails }) {
    return (
        <table >
            <tbody>
                {mails.map(mail => <MailPreview key={mail.id} mail={mail} />)}
            </tbody>
        </table>
    )

}