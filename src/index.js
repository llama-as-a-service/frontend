import React from "react"
import { createRoot } from 'react-dom/client';
import "./index.css"
import "bulma/css/bulma.css"

import App from "./App"

window.toTitleCase = (key) => {
  const result = key.replace("_", " ").replace(/([A-Z])/g, " $1")
  return result.charAt(0).toUpperCase() + result.slice(1)
}

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render((
  <React.StrictMode>
    <App />
  </React.StrictMode>
));

