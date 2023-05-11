const { Link } = ReactRouterDOM


import { NotePreview } from "./note-preview.jsx"
import { NoteAdd } from "./note-add.jsx"

export function NoteList({ notes, onRemoveNote }) {
    return (
        <ul className="note-list">
            {notes.map(note =>
                <li key={note.id}>
                    <section className='note-add'>
                        <label>
                            <textarea
                                name="noteContent"
                                defaultValue="take a note"
                                rows={3}
                                cols={50}
                                onClick={() => onRemoveNote(note.id)}

                            />
                        </label>
                    </section>
                    <NotePreview note={note} />
                    <section>
                        <button onClick={() => onRemoveNote(note.id)} >Remove</button>
                        {/* <button><Link to={`/note/edit/${note.id}`} >Edit</Link></button> */}
                    </section>
                </li>
            )}
        </ul>
    )
}
