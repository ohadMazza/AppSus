const { useEffect, useState, useRef } = React
import { EditIcons } from "./edit-icons"

export function NoteEdit({ note, onSelectedNote, onRemoveNote, onEditNote, onSaveNote }) {

    const [noteInfo, setNoteInfo] = useState({ ...note.info })
    const inputRef = useRef()

    useEffect(() => {
        console.log(noteInfo)

    }, [noteInfo])

    function handleChange({ target }) {
        console.log(target.name)
        console.log(target.value)
        const field = target.name
        const value = target.type === 'text' ? (target.value || '') : target.value
        setNoteInfo(prevNote => ({ ...prevNote, [field]: value }))
        // setNoteInfo(prevNote => ({ ...prevNote, info: { ...noteInfo } }))
        onEditNote(noteInfo)
    }

    function onSubmit() {
        if (!note.info.title || !note.info.txt) {
            inputRef.current.focus()
            return
        }
        onSaveNote(note)
        console.log(note)
    }



    return <form onBlur={() => onSaveNote({ ...note, info: { ...noteInfo } })}>
        <section>
            <input onChange={handleChange} name="title" value={noteInfo.title} />
        </section>
        <section>
            <textarea onChange={handleChange} name="txt" value={noteInfo.txt}> </textarea>
        </section>
        <section>
            <EditIcons note={note}
                onRemoveNote={onRemoveNote}
                onSelectedNote={onSelectedNote}
                onSaveNote={onSaveNote}
            />
            <i onClick={() => onSubmit()} className="fa-solid fa-floppy-disk"></i>
        </section>
    </form>
}