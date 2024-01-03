import React, {useState} from "react";
import {Star} from "./Star";

const createArray = length => [...Array(length)];

function StarRating({style = {}, totalStars = 5, selectedStars = 0, onRate = f => f, ...props}) {
    return (
        <div style={{padding: "5px", ...style}} {...props}>
            {createArray(totalStars).map((n, i) => (
                <Star key={i} selected={selectedStars > i} />
            ))}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </div>
    );
}

export default StarRating;