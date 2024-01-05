import React from "react";
import {useInput} from "../hooks";
import {useColors} from "../context";

function AddColorForm({onNewColor = f => f}) {
    const {createColor} = useColors();
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");

    const submit = e => {
        e.preventDefault();
        createColor(titleProps.value, colorProps.value);
        resetTitle();
        resetColor();
    };

    return (
        <form onSubmit={submit}>
            <input
                {...titleProps}
                placeholder="color title"
                required
            />
            <input
                {...colorProps}
                type="color"
                required
            />
            <button>ADD</button>
        </form>
    );

}

export default AddColorForm;