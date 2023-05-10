// note service
import { utilService } from "../../../services/util.service.js"
import { asyncStorageService } from "../../../services/async-storage.service.js"
import { storageService } from "../../../services/storage.service.js"

const NOTE_KEY = 'noteDB'
_createNotes()

export const noteService = {
    query,
    get,
    remove,
    save,
    getEmptyNote,
    // getDefaultFilter,
    // getNextNoteId
}

function query() {
    return asyncStorageService.query(NOTE_KEY)
        .then(notes => {
            // if (filterBy.txt) {
            //     const regExp = new RegExp(filterBy.txt, 'i')
            //     notes = notes.filter(note => regExp.test(note.txt))
            // }

            // if (filterBy.type) {
            //     notes = notes.filter(note => note.type >= filterBy.type)
            // }
            return notes
        })
}

function get(noteId) {
    return asyncStorageService.get(NOTE_KEY, noteId)
}


function addNote(note) {
    let notes = _loadNotesFromStorage()
    note = [...notes, note]
    _saveNotesToStorage(notes)
    return note
}

function remove(noteId) {
    return asyncStorageService.remove(NOTE_KEY, noteId)
}

function save(note) {
    if (note.id) {
        return asyncStorageService.put(NOTE_KEY, note)
    } else {
        return asyncStorageService.post(NOTE_KEY, note)
    }
}

// function getNextNoteId(NoteId) {
//     return storageService.query(NOTE_KEY)
//         .then((notes) => {
//             let noteIdx = notes.findIndex(note => note.id === noteId)
//             if(noteIdx === notes.length - 1) noteIdx = -1
//             return notes[noteIdx + 1].id
//         })
// }

function getEmptyNote(txt) {
    return {
        id: '',
        createdAt: 0,
        type: 'NoteTxt',
        isPinned: false,
        style: {
            backgroundColor: '#00d'
        },
        info: {
            txt: txt
        }
    }
}


// function DynamicCmp(props) {
//     switch (props.cmpType) {
//         case 'color':
//             return <ColorInput {...props} />
//         case 'fontSize':
//             return <FontsizeInput {...props} />
//     }
// }

// function getDefaultFilter(searchParams = { get: () => { } }) {
//     return {
//         txt: searchParams.get('txt') || '',
//         type: searchParams.get('type') || ''
//     }
// }

function _createNotes() {
    let notes = storageService.loadFromStorage(NOTE_KEY)
    if (!notes || !notes.length) {
        notes = []
        // notes.push(_createNote('Fullstack Me Baby!'))
        // notes.push(_createNote())
        // notes.push(_createNote())
        // notes.push(_createNote())
        // notes.push(_createNote())
        storageService.saveToStorage(NOTE_KEY, notes)
    }
}

function _createNote(txt) {
    let note = getEmptyNote(txt)
    note.id = utilService.makeId()
    console.log(note)
    return note
}

function _saveNotesToStorage(notes) {
    storageService.saveToStorage(NOTE_KEY, notes)
}

function _loadNotesFromStorage() {
    return storageService.loadFromStorage(NOTE_KEY)
}
