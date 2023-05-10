const { Fragment, useState } = React
const { Link } = ReactRouterDOM

export function MailPriview({ mail }) {
    // const [isExpanded, setIsExpanded] = useState(false)
    const timeStamp = mail.sentAt

    const timeStampSeconds = Math.floor(timeStamp / 1000)
    const date = new Date(timeStampSeconds * 1000)

    //get the time no seconds//
    let options = { hour12: true, hour: 'numeric', minute: 'numeric' }
    const formattedTime = date.toLocaleTimeString("en-us", options)
    console.log('time:new ', formattedTime)



    const options2 = { month: 'long', day: 'numeric' }
    const formattedDate = date.toLocaleString("en-us", options2)
    console.log('date new: ', formattedDate)



    // const formattedDate = date.toLocaleDateString("en-us")
    // console.log('date: ', formattedDate)
    // const formattedTime = date.toLocaleTimeString("en-us")
    // console.log('time: ', formattedTime)





    return (
        <tr onClick={() => setIsExpanded(prevIsExpanded => !prevIsExpanded)}>
            <td><i className="fa-regular fa-star"></i></td>
            <td>{mail.from}</td>
            <td> {mail.subject} </td>
            <td> {formattedDate} </td>
        </tr>
    )
}
