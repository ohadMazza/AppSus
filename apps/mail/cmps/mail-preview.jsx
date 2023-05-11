const { Fragment, useState } = React
const { Link } = ReactRouterDOM

import { utilService } from "../../../services/util.service.js"


export function MailPreview({ mail, onDeleteMail }) {
    const [hovered, setHovered] = useState(false)

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    // const onDeleteMail = () => {
    //     console.log('delete mail')
    //     // Handle delete logic here
    // };

    // const [isExpanded, setIsExpanded] = useState(false)
    const timeStamp = mail.sentAt
    const sentAt = utilService.formatDate(timeStamp)






    return (
        <tr className="border-bottom" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <td><i className="fa-regular fa-star"></i></td>
            <td>{mail.from}</td>
            <td> {mail.subject} </td>
            {hovered ? (
                <td>
                    <i className="fa-regular fa-envelope-open"></i>
                    <i
                        className="fa-regular fa-trash-can"
                        onClick={() => onDeleteMail(mail.id)}
                    ></i>
                </td>
            ) : (
                <td>{sentAt}</td>
            )}
        </tr>
    )
}

