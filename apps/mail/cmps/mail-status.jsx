// import { mailService } from "../services/mail.service.js"
const { useState, useEffect } = React

export function MailStatus({ setStatus }) {
    return (
        <div className="labels">
            <div className="label">
                <i className="fa-solid fa-inbox"></i>
                <button onClick={() => setStatus('inbox')} >Inbox</button>
                <span>46</span>
            </div>
            <div className="label">
                <i className="fa-regular fa-paper-plane"></i>
                <button onClick={() => setStatus('sent')} >Sent</button>
                <span>5</span>
            </div>
            <div className="label">
                <i className="fa-regular fa-file-lines"></i>
                <button onClick={() => setStatus('draft')} >Draft</button>
                <span>12</span>
            </div>
            <div className="label">
                <i className="fa-regular fa-trash-can"></i>
                <button onClick={() => setStatus('trash')} >Trash</button>
                <span>13</span>
            </div>
        </div>
    )
}



