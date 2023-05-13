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

function getEmptyNote() {
    return {

        createdAt: 0,
        type: 'NoteTxt',
        isPinned: false,
        style: {
            backgroundColor: '#00d'
        },
        info: {
            title: '',
            txt: ''
        }
    }
}

function _createNotes() {
    let notes = storageService.loadFromStorage(NOTE_KEY)
    if (!notes || !notes.length) {
        notes = []
        notes.push(_createNote({ title: 'title me1', txt: 'Fullstack Me Baby1!' }))
        notes.push(_createNote({ title: 'title me2', txt: 'Fullstack Me Baby2!' }))
        notes.push(_createNote({ title: 'title me3', txt: 'Fullstack Me Baby3!' }))
        storageService.saveToStorage(NOTE_KEY, notes)
    }
}

function _createNote(info) {
    let note = getEmptyNote()
    note.id = utilService.makeId()
    note.info.title = info.title
    note.info.txt = info.txt
    return note
}

function _saveNotesToStorage(notes) {
    storageService.saveToStorage(NOTE_KEY, notes)
}

function _loadNotesFromStorage() {
    return storageService.loadFromStorage(NOTE_KEY)
}
