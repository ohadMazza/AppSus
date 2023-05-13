const { Link } = ReactRouterDOM


import { NotePreview } from "./note-preview.jsx"


export function NoteList({ notes, onRemoveNote, onSaveNote }) {
    if (!notes || notes.length === 0) return <h4>no notes yet</h4>
    return (
        <section className="note-list">
            {notes.map((note) => (
                <NotePreview key={note.id} note={note} onRemoveNote={onRemoveNote} onSaveNote={onSaveNote} />
            ))}
        </section>
    )
}
