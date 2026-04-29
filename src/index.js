import "./styles.css";
import { loadHome } from "./pages/home.js"

const contentContainer = document.getElementById("content");

function renderPage(importedPage) {
    content.textContent = "";
    const pageElement = importedPage();
    content.appendChild(pageElement);
    console.log("test home ran!")
};

renderPage(loadHome);

