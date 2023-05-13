
const { useEffect, useState } = React
import { NoteList } from "../cmps/note-list.jsx"
import { noteService } from "../services/note.service.js"
import { NoteAdd } from "../cmps/note-add.jsx"



export function NoteIndex() {
    const [notes, setNotes] = useState([])
    console.log(notes)

    useEffect(() => {
        loadNotes()

    }, [])

    const onAddNote = (info) => {
        noteService.addNote(info)
        loadNotes()


    }

    function loadNotes() {
        noteService.query().then(setNotes)

    }

    function onRemoveNote(noteId) {
        noteService.remove(noteId).then(() => {
            loadNotes()
        })

    }
    function onSaveNote(noteId) {
        noteService.save(noteId).then(() => {
            loadNotes()
        })

    }



    return (
        <section className="note-index full main-layout">
            <NoteAdd onAddNote={onAddNote} />
            <NoteList notes={notes} onRemoveNote={onRemoveNote} onSaveNote={onSaveNote} />
        </section>
    )
}


