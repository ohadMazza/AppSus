const { Fragment, useState } = React
const { Link } = ReactRouterDOM

export function MailPriview({ mail }) {
    // const [isExpanded, setIsExpanded] = useState(false)

    return (
        <tr onClick={() => setIsExpanded(prevIsExpanded => !prevIsExpanded)}>
            <td><i class="fa-regular fa-star"></i></td>
            <td>{mail.from}</td>
            <td> {mail.subject} </td>
            <td> {mail.sentAt} </td>
        </tr>
    )


}
