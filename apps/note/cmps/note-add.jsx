const { useState, useEffect } = React

import { noteService } from '../services/note.service.js'

export function NoteAdd() {


    const [note, setNote] = useState({

    })

    // useEffect(() => {

    // }, [])

    function onAddNote(ev) {
        ev.preventDefault()
        noteService.addNote(note)
        return

    }

    function handleChange(ev) {
        const { value, name: field } = ev.target
        setNote((prevNote) => ({ ...prevNote, [field]: value }))
    }

    // const { id, createdAt, type, isPinned, style, backgroundColor, info } = note

    // return (
    //     <section className='note-add'>
    //         <button onClick={onAddNote}>Add note</button>
    //         <textarea
    //             name='txt'
    //             cols='30'
    //             rows='10'
    //             value=''
    //             onChange={handleChange}
    //         ></textarea>

    {/* <button
                className='btn-toggle-modal'
                onClick={() => onToggleNoteModal()}
            >
                x
            </button> */}


    {/* <label htmlFor='by-date'>Date:</label>
                <input
                    type='date'
                    id='by-date'
                    name='date'
                    value={date}
                    onChange={handleChange}
                /> */}
    //     </section >
    // )
}
