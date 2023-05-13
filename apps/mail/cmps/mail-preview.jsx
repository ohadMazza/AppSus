const { Fragment, useState } = React
const { Link } = ReactRouterDOM

import { utilService } from "../../../services/util.service.js"


export function MailPreview({ mail, onDeleteMail, onSelectMail }) {
    const [hovered, setHovered] = useState(false)

    const handleMouseEnter = () => {
        setHovered(true)
    }

    const handleMouseLeave = () => {
        setHovered(false)
    }

    // const handleClick = () => {
    //     onSelectMail(mail.id)
    //     console.log('id is :', mail.id)
    // }


    // const onDeleteMail = () => {
    //     console.log('delete mail')
    //     // Handle delete logic here
    // };

    // const [isExpanded, setIsExpanded] = useState(false)
    const timeStamp = mail.sentAt
    const sentAt = utilService.formatDate(timeStamp)


    return (

        <tr
            className={`border-bottom ${mail.isRead ? 'read-mail' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => onSelectMail(mail)}>
            <td className="tr-icon"><i className="fa-regular fa-star"></i></td>
            <td className="tr-mail-adress">{mail.from}</td>
            <td className="tr-mail-subject"> {mail.subject} </td>
            {hovered ? (
                <td>
                    <i className="fa-regular fa-envelope-open"></i>
                    <i
                        className="fa-regular fa-trash-can"
                        onClick={(event) => {
                            event.stopPropagation();
                            onDeleteMail(mail.id)

                        }}
                    ></i>
                </td>
            ) : (
                <td className="tr-mail-date">{sentAt}</td>
            )}
        </tr>
    )
}

