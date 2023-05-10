
const { useEffect, useState } = React
// const { Link, useSearchParams } = ReactRouterDOM

// import { CarFilter } from "../cmps/car-filter.jsx"
import { NoteList } from "../cmps/note-list.jsx"
import { noteService } from "../services/note.service.js"
// import { showSuccessMsg, showErrorMsg } from "../services/event-bus.service.js"
// import { CarDetails } from "./car-details.jsx"


export function NoteIndex() {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        loadNotes()
        // showSuccessMsg('Welcome to car index!')
        // setSearchParams(filterBy)
    }, [])

    function loadNotes() {
        noteService.query().then(setNotes)

    }

    function onRemoveNote(noteId) {
        noteService.remove(noteId).then(() => {
            const updatedNotes = notes
            // .filter(note => note.id !== noteId)
            setNotes(updatedNotes)
            // showSuccessMsg(`Note (${noteId}) removed!`)
        })

    }

    // function onSetFilter(filterBy) {
    //     setFilterBy(prevFilterBy => ({ ...prevFilterBy, ...filterBy }))
    // }

    // console.log('render');
    return (
        <section className="note-index full main-layout">
            {/* <NoteFilter onSetFilter={onSetFilter} filterBy={filterBy} />
            <Link to="/note/edit">Add note</Link> */}
            <NoteList notes={notes} onRemoveNote={onRemoveNote} />
            {/* <DataTable notes={notes} /> */}
        </section>
    )
}




// export function CarIndex() {

//     // const [searchParams, setSearchParams] = useSearchParams()
//     // const [filterBy, setFilterBy] = useState(carService.getDefaultFilter(searchParams))
//     const [cars, setCars] = useState([])

//     useEffect(() => {
//         loadCars()
//         showSuccessMsg('Welcome to car index!')
//         setSearchParams(filterBy)
//     }, [filterBy])

//     function loadCars() {
//         carService.query(filterBy).then(cars => setCars(cars))
//         // carService.query().then(setCars)
//     }

//     function onRemoveCar(carId) {
//         carService.remove(carId).then(() => {
//             const updatedCars = cars.filter(car => car.id !== carId)
//             setCars(updatedCars)
//             showSuccessMsg(`Car (${carId}) removed!`)
//         })

//     }

//     function onSetFilter(filterBy) {
//         setFilterBy(prevFilterBy => ({ ...prevFilterBy, ...filterBy }))
//     }

//     // console.log('render');
//     return (
//         <section className="car-index full main-layout">
//             <CarFilter onSetFilter={onSetFilter} filterBy={filterBy} />
//             <Link to="/car/edit">Add Car</Link>
//             {/* <CarList cars={cars} onRemoveCar={onRemoveCar} /> */}
//             <DataTable cars={cars} />
//         </section>
//     )
// }