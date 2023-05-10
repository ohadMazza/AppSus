const { useState, useEffect } = React

import { notes } from '../services/note.service.js'

export function noteAdd({ onSaveNote }) {
    const inputRef = React.createRef()

    const [note, setNote] = useState({
        id: '',
        createdAt: 0,
        type: 'NoteTxt',
        isPinned: false,
        style: {
            backgroundColor: '#00d'
        },
        info: {
            txt: ''
        }
    })

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    function onAddNote(ev) {
        ev.preventDefault()
        onSaveNote(note)
    }

    function handleChange(ev) {
        const { value, name: field } = ev.target
        setNote((prevNote) => ({ ...prevNote, [field]: value }))
    }

    const { id, createdAt, type, isPinned, style, backgroundColor, info } = note

    return (
        <section className='note-add'>
            <button onClick={onAddNote()}>Add note</button>


            <button
                className='btn-toggle-modal'
                onClick={() => onToggleNoteModal()}
            >
                x
            </button>


            {/* <label htmlFor='by-date'>Date:</label>
                <input
                    type='date'
                    id='by-date'
                    name='date'
                    value={date}
                    onChange={handleChange}
                /> */}

            <textarea
                name='txt'
                cols='30'
                rows='10'
                value={txt}
                onChange={handleChange}
            ></textarea>



        </section >
    )
}
