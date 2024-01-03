import React from 'react';
import {createRoot} from 'react-dom/client';
import data from './data/colors.json';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(<App colors={data}/>);