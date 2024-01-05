import React from "react";
import Color from "./Color";
import {useColors} from "../context";

export default function ColorList({
    onRemoveColor = f => f,
    onRateColor = f => f,
}) {
    const {colors} = useColors();
    if (!colors.length) return <div>No colors listed.</div>;

    return colors.map((color) => (
        <Color key={color.id} {...color} onRemove={onRemoveColor} onRate={onRateColor}/>
    ));
}
