import React, {createContext, useContext, useEffect, useState} from "react";

const ColorContext = createContext({});
export const useColors = () => useContext(ColorContext);

export function ColorProvider({children}) {
    const [colors, setColors] = useState([]);

    useEffect(() => {
        fetch(`${API_HOST}/colors/`)
            .then(res => res.json())
            .then(list => {
                setColors(list);
            });
    }, []);

    const removeColor = id => {
        setColors(colors.filter(c => c.id !== id));
        fetch(`${API_HOST}/colors/${id}/`, {
            method: "delete",
        });
    };

    const rateColor = (id, rating) => {
        const newColors = colors.map(c => c.id === id ? {...c, rating} : c);
        setColors(newColors);
        fetch(`${API_HOST}/colors/${id}/`, {
            method: "put",
            body: JSON.stringify(newColors.find(c => c.id === id))
        });
    };

    const createColor = (title, color) => {
        fetch(`${API_HOST}/colors/`, {
            method: "post",
            body: JSON.stringify({title, color, rating: 0})
        })
            .then(res => res.json())
            .then(color => {
                setColors([...colors, color]);
            })
            .catch(err => console.log("An error occurred while creating the color.", err));
    };

    return (
        <ColorContext.Provider value={{colors, createColor, removeColor, rateColor}}>
            {children}
        </ColorContext.Provider>
    );
};
