const { Link } = ReactRouterDOM
const { Fragment, useState } = React

import { MailPriview } from "./mail-priview.jsx"

export function MailList({ mails }) {
    return (
        <table >
            <tbody>
                {mails.map(mail => <MailPriview key={mail.id} mail={mail} />)}
            </tbody>
        </table>
    )

}