// import { mailService } from "../services/mail.service.js"
const { useState, useEffect } = React

export function MailSort({ setSortOption, setSortOrder, sortOrder }) {




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
                <button className="sort-btn" onClick={() => {
                    setSortOption("date")
                    setSortOrder(sortOrder * -1)
                }}>
                    Date
                </button>
                <button className="sort-btn" onClick={() => {
                    setSortOption("from")
                    setSortOrder(sortOrder * -1)
                }} >
                    From
                </button>
            </div>
        </div>
    )
}