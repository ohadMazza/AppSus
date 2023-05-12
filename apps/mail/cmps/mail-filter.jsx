import { mailService } from "../services/mail.service.js"
const { useState, useEffect } = React

export function MailFilter({ filterBy, onSetFilter }) {
    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function handleTxtChange({ target }) {
        const value = target.value
        console.log(value)
        setFilterByToEdit(prevFilterBy => ({ ...prevFilterBy, txt: value }))
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        onSetFilter(filterByToEdit)
    }

    const { txt } = filterByToEdit

    return (
        <div className="search-container">
            <form onSubmit={onSubmitFilter}>
                <input value={txt} onChange={handleTxtChange} type="text" placeholder="Search in mail" />
                <i className="fa-solid fa-magnifying-glass"></i>
            </form>
        </div>
    )
}


