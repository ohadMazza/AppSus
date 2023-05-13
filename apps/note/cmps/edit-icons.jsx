const { Fragment } = React
export function EditIcons({ onSelectedNote, onRemoveNote, note, onSaveNote }) {
    // console.log(noteId)
    // if (!note) { return <div></div> }
    return <Fragment>
        <i className="fa-solid fa-font"></i>
        {/* <i className="fa-regular fa-image"></i>
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-solid fa-volume"></i>
        <i className="fa-solid fa-list"></i>
        <i className="fa-solid fa-palette"></i> */}
        <i onClick={() => onSelectedNote(note)} className="fa-solid fa-pen-to-square"></i>
        <i onClick={() => onRemoveNote(note.id)} className="fa-solid fa-trash-can"></i>
    </Fragment>
}