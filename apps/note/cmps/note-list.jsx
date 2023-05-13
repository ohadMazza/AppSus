const { Link } = ReactRouterDOM
const { useState } = React


import { NotePreview } from "./note-preview.jsx"
import { NoteEdit } from "./note-edit.jsx"

export function NoteList({ notes, onRemoveNote, onSaveNote }) {
    const [selectedNote, setSelectedNote] = useState({})

    function onEditNote(newInfo) {
        setSelectedNote(prevNote => ({ ...prevNote, [prevNote.info]: newInfo }))
    }
    function onSelectedNote(note) {
        setSelectedNote(note)
        // console.log(id)
    }

    if (!notes || notes.length === 0) return <h4>no notes yet</h4>
    return (
        <section className="note-list">
            {notes.map((note) => {
                if (note.id === selectedNote.id) {
                    return <NoteEdit
                        onEditNote={onEditNote}
                        key={note.id}
                        note={note}
                        onRemoveNote={onRemoveNote}
                        onSelectedNote={onSelectedNote}
                        onSaveNote={onSaveNote} />
                } else {
                    return <NotePreview
                        key={note.id}
                        note={note}
                        onRemoveNote={onRemoveNote}
                        onSaveNote={onSaveNote}
                        onSelectedNote={onSelectedNote}
                        isSelected={false} />
                }


            })}

        </section>
    )
}
