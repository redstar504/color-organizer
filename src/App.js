import React from "react";
import ColorList from "./components/ColorList";
import AddColorForm from "./components/AddColorForm";

export default function App() {
    return (
        <>
            <h1>Color Organizer</h1>
            <AddColorForm onNewColor={(title, color) => createColor(title, color)}/>
            <ColorList
                onRemoveColor={id => removeColor(id)}
                onRateColor={(id, rating) => rateColor(id, rating)}
            />
        </>
    );
};