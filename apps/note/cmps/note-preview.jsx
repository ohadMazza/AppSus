export function NotePreview({ note }) {

    return (
        <article contentEditable className="note-preview">
<<<<<<< HEAD
            <h3>text{note.info.txt}</h3>
            <h6>created at {note.createdAt}</h6>
=======
            <h3>text:{note.info.txt}</h3>
            <h6>created at:{note.createdAt}</h6>
>>>>>>> cc05bcdd011273ea718f04b77df3364b534271fa
        </article>
    )
}
