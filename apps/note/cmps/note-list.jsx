const { Link } = ReactRouterDOM


import { NotePreview } from "../cmps/note-preview"

export function NoteList({ notes, onRemoveNote }) {
    return (
        <ul className="note-list">
            {notes.map(note =>
                <li key={note.id}>
                    <NotePreview note={note} />
                    <section>
                        <button onClick={() => onRemoveNote(Note.id)} >Remove</button>
                        {/* <button><Link to={`/note/${note.id}`} >Details</Link></button> */}
                        {/* <button><Link to={`/note/edit/${note.id}`} >Edit</Link></button> */}
                    </section>
                </li>
            )}
        </ul>
    )
}
