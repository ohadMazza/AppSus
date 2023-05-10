const { Link } = ReactRouterDOM
const { Fragment, useState } = React

import { MailPriview } from "./mail-priview.jsx"

export function MailList({ mails }) {
    return (
        <table border="1">
            <tbody>
                {mails.map(mail => <MailPriview key={mail.id} mail={mail} />)}
            </tbody>
        </table>
    )

}