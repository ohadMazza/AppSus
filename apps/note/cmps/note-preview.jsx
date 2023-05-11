export function NotePreview({ note }) {

    return (
        <article className="note-preview">
            <h3>text{note.info.txt}</h3>
            <h6>created at {note.createdAt}</h6>
        </article>
    )
}
