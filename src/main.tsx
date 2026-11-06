import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const fonts = document.createElement("link");
fonts.rel = "stylesheet";
fonts.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Manrope:wght@400;500;600;700&display=swap";
document.head.appendChild(fonts);

const root = document.getElementById("root");
if (root) createRoot(root).render(<App />);
