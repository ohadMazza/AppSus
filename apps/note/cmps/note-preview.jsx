export function NotePreview({ note, onRemoveNote }) {
    return (
        <section className='note-preview'>
            <h3>{note.info.title}</h3>
            <p>{note.info.txt}</p>
            <button onClick={() => onRemoveNote(note.id)}>remove</button>
        </section>
    )
}

