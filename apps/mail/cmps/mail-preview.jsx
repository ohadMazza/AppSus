const { Fragment, useState } = React
const { Link } = ReactRouterDOM

export function MailPreview({ mail }) {
    // const [isExpanded, setIsExpanded] = useState(false)
    const timeStamp = mail.sentAt

    function formatDate(timeStamp) {
        const date = new Date(timeStamp);
        const year = date.getFullYear();
        const month = date.toLocaleString('default', { month: 'long' });
        const day = date.getDate();
        const today = new Date();

        if (year !== today.getFullYear()) {
            return `${date.getMonth() + 1}/${day}/${year}`;
        } else if (timeStamp >= today - 86400000 && timeStamp <= today) {
            const hours = date.getHours() % 12 || 12;
            const minutes = date.getMinutes();
            const ampm = date.getHours() >= 12 ? ' PM' : ' AM';
            return `${hours}:${minutes.toString().padStart(2, '0')}${ampm}`;
        } else if (timeStamp >= today - 172800000 && timeStamp < today - 86400000) {
            return 'Yesterday';
        } else {
            return `${month} ${day}`;
        }
    }



    return (
        <tr onClick={() => setIsExpanded(prevIsExpanded => !prevIsExpanded)}>
            <td><i className="fa-regular fa-star"></i></td>
            <td>{mail.from}</td>
            <td> {mail.subject} </td>
            <td> {formatDate(timeStamp)} </td>
        </tr>
    )
}
