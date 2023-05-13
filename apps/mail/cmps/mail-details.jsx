const { useState, useEffect } = React

export function MailDetails({ mail }) {
    const formattedTime = new Date(mail.sentAt).toLocaleTimeString();
    const formattedDate = new Date(mail.sentAt).toLocaleDateString();


    return (
        <div className="email">
            <div className="header">
                <div className="from">{mail.from}</div>
                <div className="timestamp">{formattedDate} at {formattedTime}</div>
            </div>
            <hr></hr>
            <br></br>
            <div className="subject">{mail.subject}</div>
            <hr></hr>
            <br></br>
            <div className="body">{mail.body}</div>
        </div>
    );
}