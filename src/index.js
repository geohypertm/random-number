import React from "react";
import ReactDom from "react-dom/client";

import Geohyper from "./Geohyper";


const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Geohyper />
    </React.StrictMode>
)