import { mailService } from "../services/mail.service.js"
const { useState, useEffect } = React

export function MailStatus({ setStatus, setSelectedMail }) {

    return (
        <div className="labels">
            <div className="label">
                <i className="fa-solid fa-inbox"></i>
                <button onClick={() => {
                    setSelectedMail(null)
                    setStatus('inbox')
                }}>Inbox</button>

                <span>46</span>
            </div>
            <div className="label">
                <i className="fa-regular fa-paper-plane"></i>
                <button onClick={() => {
                    setSelectedMail(null)
                    setStatus('sent')
                }} >Sent</button>
                <span>5</span>
            </div>
            <div className="label">
                <i className="fa-regular fa-file-lines"></i>
                <button onClick={() => {
                    setStatus('draft')
                    setSelectedMail(null)
                }} >Draft</button>
                <span>12</span>
            </div>
            <div className="label">
                <i className="fa-regular fa-trash-can"></i>
                <button onClick={() => {
                    setStatus('trash')
                    setSelectedMail(null)
                }}  >Trash</button>
                <span>13</span>
            </div>
        </div >
    )
}



