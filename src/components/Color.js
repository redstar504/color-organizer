import React from "react";
import StarRating from "./StarRating";
import {FaTrash} from "react-icons/fa";
import {useColors} from "../context";

function Color({id, title, color, rating}) {
    const {rateColor, removeColor} = useColors();

    return (
        <section>
            <h2>{title}</h2>
            <button onClick={() => removeColor(id)}>
                <FaTrash/>
            </button>
            <div style={{height: 50, backgroundColor: color}}/>
            <StarRating selectedStars={rating} onRate={rating => rateColor(id, rating)}/>
        </section>
    );
}

export default Color;
