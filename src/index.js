import React from "react";
import {createRoot} from "react-dom/client";
import data from "./data/colors.json";
import App from "./App";
import {ColorProvider} from "./context";

const root = createRoot(document.getElementById("root"));
root.render(
    <ColorProvider>
        <App colors={data}/>
    </ColorProvider>
);