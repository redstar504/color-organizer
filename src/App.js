import React, {useEffect, useState} from 'react';
import ColorList from './components/ColorList';

export default function App() {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const colors = fetch(`${API_HOST}/colors/`).
        then(res => res.json()).
        then(list => {
          setColors(list);
        });
  }, []);

  const removeColor = id => {
    setColors(colors.filter(c => c.id !== id));
    fetch(`${API_HOST}/colors/${id}/`, {
      method: 'delete',
    }).then(res => console.log(res));
  };

  return (
      <>
        <h1>Color Organizer</h1>
        <ColorList colors={colors} onRemoveColor={id => removeColor(id)}/>
        {/*{colors.map((n, i) => (
                <li key={i} style={{color: n.color}}>{n.title}</li>
            ))}*/}
      </>
  );
};