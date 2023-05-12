const { useState, useEffect } = React
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFont, faImage, faYoutube, faVolume } from '@fortawesome/free-solid-svg-icons';
// import { faImage as farImage } from '@fortawesome/free-regular-svg-icons';
// import { faYoutube as fabYoutube } from '@fortawesome/free-brands-svg-icons';

import { noteService } from '../services/note.service.js'

export function NoteAdd({ note, onRemoveNote, onAddNote }) {

    const [createdAt, setCreatedAt] = useState(new Date().toLocaleTimeString())
    const [info, setInfo] = useState({ title: "", txt: "" })
    const [expanded, setExpanded] = useState(false)
    const onSubmitNote = () => {
        onAddNote(info)
    }

    const handleExpand = (val) => {
        if (val === true || (!info.title && !info.txt)) { setExpanded(val) }

    }

    return (
        <div className="note" >
            <div className="note-header">

                <div className="note-icons">
                    <i className="fa-solid fa-font"></i>
                    <i className="fa-regular fa-image"></i>
                    <i className="fa-brands fa-youtube"></i>
                    <i className="fa-solid fa-volume"></i>
                    <i className="fa-solid fa-list"></i>
                    <i className="fa-solid fa-trash-can"></i>
                </div>
            </div>
            <form onFocus={() => handleExpand(true)}
                onBlur={() => handleExpand(false)}
                onSubmit={onSubmitNote}
                className="note-content">
                <input
                    type="text"
                    placeholder="Title"
                    value={info.title}
                    onChange={(e) => setInfo({ ...info, title: e.target.value })}
                />
                <section className={expanded ? "note-body expanded" : "note-body hidden"}>
                    <textarea
                        // className={expanded ? "note-body expanded" : "note-body hidden"}
                        placeholder="Take a note..."
                        value={info.txt}
                        onChange={(e) => setInfo({ ...info, txt: e.target.value })}
                    ></textarea>
                    <span
                    // className={expanded ? " expanded" : " hidden"}
                    >
                        {createdAt}
                    </span>
                    <button
                    // className={expanded ? " expanded" : " hidden"}
                    >
                        add
                    </button>
                </section>
            </form>
        </div>
    )

    // const [createdAt, setCreatedAt] = useState(new Date().toLocaleTimeString());
    // const [info, setInfo] = useState({ title: "", txt: "" });
    // const [isExpanded, setIsExpanded] = useState(false);

    // const handleExpand = () => {
    //     setIsExpanded(!isExpanded);
    // };

    // return (
    //     <div className={`note ${isExpanded ? "expanded" : ""}`}>
    //         <div className="note-header">
    //             {/* <span>{createdAt}</span> */}
    //             <div className="note-icons">
    //                 <i class="fa-solid fa-font"></i>
    //                 <i class="fa-regular fa-image"></i>
    //                 <i class="fa-brands fa-youtube"></i>
    //                 <i class="fa-solid fa-volume"></i>

    //             </div>
    //         </div>
    //         <div className="note-content" onClick={handleExpand}>
    //             {!isExpanded && (
    //                 <div className="take-note">
    //                     <span>Take a note...</span>
    //                 </div>
    //             )}
    //             {isExpanded && (
    //                 <>
    //                     <input
    //                         type="text"
    //                         placeholder="Title"
    //                         value={info.title}
    //                         onChange={(e) => setInfo({ ...info, title: e.target.value })}
    //                     />
    //                     <textarea
    //                         placeholder="Take a note..."
    //                         value={info.txt}
    //                         onChange={(e) => setInfo({ ...info, txt: e.target.value })}
    //                     ></textarea>
    //                 </>
    //             )}
    //         </div>
    //     </div>
    // );
    // const [createdAt, setCreatedAt] = useState(new Date().toLocaleTimeString());
    // const [info, setInfo] = useState({ title: "", txt: "" });

    // return (
    //     <div className="note">
    //         <div className="note-header">
    //             <span>{createdAt}</span>
    //         </div>
    //         <div className="note-content">
    //             <input
    //                 type="text"
    //                 placeholder="Title"
    //                 value={info.title}
    //                 onChange={(e) => setInfo({ ...info, title: e.target.value })}
    //             />
    //             <textarea
    //                 placeholder="Take a note..."
    //                 value={info.txt}
    //                 onChange={(e) => setInfo({ ...info, txt: e.target.value })}
    //             ></textarea>
    //         </div>
    //     </div>
    // );
    // return (

    // )
}





// function NoteAdd() {


//     const [note, setNote] = useState({

//     })

//     useEffect(() => {

//     }, [])



//     function handleChange(ev) {
//         const { value, name: field } = ev.target
//         setNote((prevNote) => ({ ...prevNote, [field]: value }))
//     }

// const { id, createdAt, type, isPinned, style, backgroundColor, info } = note

// return (
//     <section className='note-add'>
//         <button onClick={onAddNote}>Add note</button>
//         <textarea
//             name='txt'
//             cols='30'
//             rows='10'
//             value=''
//             onChange={handleChange}
//         ></textarea>

{/* <button
                className='btn-toggle-modal'
                onClick={() => onToggleNoteModal()}
            >
                x
            </button> */}


{/* <label htmlFor='by-date'>Date:</label>
                <input
                    type='date'
                    id='by-date'
                    name='date'
                    value={date}
                    onChange={handleChange}
                /> */}
    //     </section >
    // )

