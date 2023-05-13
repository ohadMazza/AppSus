const { useEffect, useState, useRef } = React

import { noteService } from "../services/note.service.js"

export function NoteAdd({ onSaveNote }) {

    const [noteToEdit, setNoteToEdit] = useState(noteService.getEmptyNote())
    const inputRef = useRef()
    const [expanded, setExpanded] = useState(false)

    useEffect(() => {
        console.log(noteToEdit)

    }, [noteToEdit])

    function handleChange({ target }) {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        setNoteToEdit(prevNote => ({ ...prevNote, info: { ...prevNote.info, [field]: value } }))
    }

    function onSubmit(ev) {
        ev.preventDefault()
        if (!noteToEdit.info.title || !noteToEdit.info.txt) {
            inputRef.current.focus()
            return
        }
        onSaveNote(noteToEdit)


    }

    const handleExpand = (isExpended) => {
        if (isExpended || (!noteToEdit.title && !noteToEdit.txt)) { setExpanded(isExpended) }

    }

    // const { note } = noteToEdit

    return (
        <div className="note" >
            <form onFocus={() => handleExpand(true)}
                onBlur={() => handleExpand(false)}
                onSubmit={onSubmit}
                className="note-content">
                <div className="note-header">

                    <label htmlFor="title"></label>
                    <input
                        ref={inputRef}
                        onChange={handleChange}
                        name="title"
                        id="title"
                        type="text"
                        placeholder="Title"
                        value={noteToEdit.title}

                    />
                </div>
                <div className={expanded ? "note-body expanded" : "note-body hidden"}>
                    <label htmlFor="txt"></label>
                    <textarea
                        onChange={handleChange}
                        type="text"
                        name="txt"
                        id="txt"
                        placeholder="Take a note..."
                        value={noteToEdit.txt}

                    ></textarea>
                    <button> Add</button>
                </div>
            </form>
            <div className="note-icons">
                <i className="fa-solid fa-font"></i>
                <i className="fa-regular fa-image"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-solid fa-volume"></i>
                <i className="fa-solid fa-list"></i>


            </div >
        </div>
    )


}