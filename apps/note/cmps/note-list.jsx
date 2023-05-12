const { Link } = ReactRouterDOM


import { NotePreview } from "./note-preview.jsx"


export function NoteList({ notes, onRemoveNote, onAddNote }) {
    if (!notes || notes.length === 0) return <h4>no notes yet</h4>
    return (
        <section>
            {/* <form >
                <input type="text" name="title" placeholder="Title" required />
                <textarea name="content" placeholder="Take a note..." required />
                <button type="submit"><NoteAdd onSubmit={onAddNote()} />Add</button>
            </form> */}
            <section>
                {notes.map((note) => (
                    <NotePreview key={note.id} note={note} onRemoveNote={onRemoveNote} />
                ))}
            </section>
        </section>
    )
}
//     return (
//         <ul className="note-list">
//             {notes.map(note =>
//                 <li key={note.id}>
//                     <section className='note-add'>
//                         <label>
//                             <textarea
//                                 name="noteContent"
//                                 defaultValue="take a note"
//                                 rows={2}
//                                 cols={50}
//                                 onClick={() => onAddNote()}
//                             />
//                         </label>
//                     </section>
//                     <NotePreview note={note} />
//                     <section>
//                         <button onClick={() => onRemoveNote(note.id)} >Remove</button>
//                     </section>
//                 </li>
//             )}
//         </ul>
//     )
// }
