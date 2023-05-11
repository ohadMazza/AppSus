import { mailService } from "../services/mail.service.js"
const { useState } = React

export function MailFilter(props) {
    const [filterBy, setFilterBy] = useState

    function handleTxtChange(target) {
        const value = target.value
        setFilterBy((...prevFilterBy) => ({ ...prevFilterBy, txt: value }))


        console.log(value)
    }


    return (
        <div className="search-container">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input onChange={handleTxtChange} type="text" placeholder="Search in mail" />
        </div>
    )
}