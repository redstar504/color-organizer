import React from 'react';
import StarRating from './StarRating';
import {FaTrash} from 'react-icons/fa';

function Color({id, title, color, rating, onRemove = f => f, onRate = f => f}) {
    return (
        <section>
            <h2>{title}</h2>
            <button onClick={() => onRemove(id)}>
                <FaTrash/>
            </button>
            <div style={{height: 50, backgroundColor: color}}/>
            <StarRating selectedStars={rating} onRate={rating => onRate(id, rating)}/>
        </section>
    );
}

export default Color;
