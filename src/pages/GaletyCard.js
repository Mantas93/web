import React from 'react'
import './galery.css'

const GaletyCard = ({ selected, item, setSelected }) => {
    return (
        <li onClick={() => {
            const newArray = selected.includes(item.id) ? selected.filter(i => i !== item.id) : [...selected, item.id]
            setSelected(newArray)
            console.log(newArray)
        }} className={`galery__item ${selected.includes(item.id) ? 'selected' : ''}`}><img src={item.url} /><div>{item.label}</div></li>

    )
}

export default GaletyCard