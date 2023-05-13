// import { mailService } from "../services/mail.service.js"
const { useState, useEffect } = React

export function MailSort() {
    return (
        <div className="sort-section">
            <span>Sort by:</span>
            <div className="sort-section-btns">
                <button className="sort-btn" >
                    Read
                </button >
                <button className="sort-btn">
                    Unread
                </button>
                <button className="sort-btn" >
                    Date
                </button>
                <button className="sort-btn" >
                    From
                </button>
            </div>

        </div>

    )
}