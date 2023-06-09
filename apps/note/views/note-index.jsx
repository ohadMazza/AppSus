
const { useEffect, useState } = React
import { NoteList } from "../cmps/note-list.jsx"
import { noteService } from "../services/note.service.js"
import { NoteAdd } from "../cmps/note-add.jsx"



export function NoteIndex() {
    const [notes, setNotes] = useState([])


    // console.log(notes)

    useEffect(() => {
        loadNotes()

    }, [])



    function loadNotes() {
        noteService.query().then(setNotes)

    }

    function onRemoveNote(noteId) {
        noteService.remove(noteId).then(() => {
            loadNotes()
        })

    }
    function onSaveNote(note) {
        noteService.save(note).then(() => {
            loadNotes()
        })

    }




    return (
        <section className="note-index full main-layout">
            <NoteAdd onSaveNote={onSaveNote} />
            <NoteList notes={notes} onRemoveNote={onRemoveNote} onSaveNote={onSaveNote} />
        </section>
    )
}


