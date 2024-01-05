import React from "react";
import {Star} from "./Star";

const createArray = (length) => [...Array(length)];

function StarRating({totalStars = 5, selectedStars = 0, onRate = f => f}) {
    return createArray(totalStars).map((n, i) => (
        <Star
            key={i}
            selected={selectedStars > i}
            onSelect={() => onRate(i + 1)}
        />
    ));
}

export default StarRating;
