import { EditIcons } from "./edit-icons.jsx"
export function NotePreview({ note, onRemoveNote, onSaveNote, onSelectedNote, isSelected }) {
    // console.log(note.info)
    return (
        <section className="note">
            <section className="note-header">

                <h3>{note.info.title}</h3>
            </section>
            <section className='note-preview'>

                <p>{note.info.txt}</p>

            </section>

            <section className="note-icons">

                <EditIcons note={note} onSelectedNote={onSelectedNote} onRemoveNote={onRemoveNote} />
            </section>
        </section>


    )

}
