const { useState, useEffect } = React

import { noteService } from '../services/note.service.js'

export function NoteAdd({ note, onRemoveNote, onAddNote }) {

    const [createdAt, setCreatedAt] = useState(new Date().toLocaleTimeString())
    const [info, setInfo] = useState({ title: "", txt: "" })
    const [expanded, setExpanded] = useState(false)
    const onSubmitNote = () => {
        onAddNote(info)
    }

    const handleExpand = (isExpended) => {
        if (isExpended || (!info.title && !info.txt)) { setExpanded(isExpended) }

    }


    return (
        <div className="note" >
            <div className="note-header">

            </div>
            <form onFocus={() => handleExpand(true)}
                onBlur={() => handleExpand(false)}
                onSubmit={onSubmitNote}
                className="note-content">
                <input
                    type="text"
                    placeholder="Title"
                    value={info.title}
                    onChange={(e) => setInfo({ ...info, title: e.target.value })}
                />
                <section className={expanded ? "note-body expanded" : "note-body hidden"}>
                    <textarea
                        // className={expanded ? "note-body expanded" : "note-body hidden"}
                        placeholder="Take a note..."
                        value={info.txt}
                        onChange={(e) => setInfo({ ...info, txt: e.target.value })}
                    ></textarea>
                    <span
                    // className={expanded ? " expanded" : " hidden"}
                    >
                        {createdAt}
                    </span>
                    <button
                    // className={expanded ? " expanded" : " hidden"}
                    >
                        add
                    </button>
                </section>
            </form>
            <div className="note-icons">
                <i className="fa-solid fa-font"></i>
                <i className="fa-regular fa-image"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-solid fa-volume"></i>
                <i className="fa-solid fa-list"></i>

            </div>
        </div>
    )
}