import { useState } from 'react';

export function ComposeMail({ isOpen, onClose }) {
    // const [to, setTo] = useState('');
    // const [subject, setSubject] = useState('');
    // const [message, setMessage] = useState('');

    if (!isOpen) {
        return null;
    }

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(`To: ${to}\nSubject: ${subject}\nMessage: ${message}`);
        onClose();
    }

    return (
        <section>
            <div className="compose-container">
                <div className="compose-header">
                    <h2>New Message</h2>
                    <button className="close-btn" onClick={onClose}>
                        &times;
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="To"
                        // value={to}
                        // onChange={(e) => setTo(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Subject"
                        // value={subject}
                        // onChange={(e) => setSubject(e.target.value)}
                        required
                    />
                    <div className="compose-body">
                        <div
                            contentEditable="true"
                            className="email-message"
                            placeholder="Message"
                        // value={message}
                        // onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="send-btn">
                        Send
                    </button>
                </form>
            </div>
        </section>
    );
}
