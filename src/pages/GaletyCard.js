import React from 'react';
import '../css/galery.css';

const GaleryCard = ({ selected, item, setSelected }) => {
    const handleClick = () => {
        const newArray = selected.includes(item.id) 
            ? selected.filter(i => i !== item.id) 
            : [...selected, item.id];
        setSelected(newArray);
        console.log(newArray);
    };

    return (
        <li onClick={handleClick} className={`galery__item ${selected.includes(item.id) ? 'selected' : ''}`}>
            <img src={item.url} alt={item.label} /> {/* Pridėtas alt atributas */}
            <div>{item.label}</div>
        </li>
    );
};

export default GaleryCard;
