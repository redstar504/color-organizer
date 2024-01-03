import React, {useEffect, useState} from 'react';
import ColorList from './components/ColorList';
import AddColorForm from "./components/AddColorForm";

export default function App() {
    const [colors, setColors] = useState([]);

    useEffect(() => {
        const colors = fetch(`${API_HOST}/colors/`).then(res => res.json()).then(list => {
            setColors(list);
        });
    }, []);

    const removeColor = id => {
        setColors(colors.filter(c => c.id !== id));
        fetch(`${API_HOST}/colors/${id}/`, {
            method: 'delete',
        });
    };

    const rateColor = (id, rating) => {
        const newColors = colors.map(c => c.id === id ? {...c, rating} : c);
        setColors(newColors);
        fetch(`${API_HOST}/colors/${id}/`, {
            method: 'put',
            body: JSON.stringify(newColors.find(c => c.id === id))
        })
    };

    const createColor = (title, color) => {
        fetch(`${API_HOST}/colors/`, {
            method: 'post',
            body: JSON.stringify({title, color, rating: 0})
        })
            .then(res => res.json())
            .then(color => {
                setColors([...colors, color])
            })
            .catch(err => console.log('An error occurred while creating the color.', err));
    };

    return (
        <>
            <h1>Color Organizer</h1>
            <AddColorForm onNewColor={(title, color) => createColor(title, color)}/>
            <ColorList
                colors={colors}
                onRemoveColor={id => removeColor(id)}
                onRateColor={(id, rating) => rateColor(id, rating)}
            />
        </>
    );
};