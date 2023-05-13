
export function NotePreview({ note, onRemoveNote, onSaveNote }) {
    console.log(note.info)
    return (
        <section contentEditable className="note">
            <section className="note-header">
                <h3>{note.info.title}</h3>
            </section>
            <section className='note-preview'>
                <p>{note.info.txt}</p>
            </section>

            <section className="note-icons">
                <i className="fa-solid fa-font"></i>
                <i className="fa-regular fa-image"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-solid fa-volume"></i>
                <i className="fa-solid fa-list"></i>
                <i onClick={() => onRemoveNote(note.id)} className="fa-solid fa-trash-can"></i>
                <i onClick={() => onSaveNote(note.id)} className="fa-solid fa-floppy-disk"></i>
            </section>
        </section>


    )

}
