import "./styles.css";
import { loadHome } from "./pages/home.js"
import { loadAbout } from "./pages/about.js"
import { loadMenu } from "./pages/menu.js"

const contentContainer = document.getElementById("content");

function renderPage(importedPage) {
    content.textContent = "";
    const pageElement = importedPage();
    content.appendChild(pageElement);
    console.log("new page render!")
};

const UI = {
    btnHome: document.getElementById("btn-home"),
    btnMenu: document.getElementById("btn-menu"),
    btnAbout: document.getElementById("btn-about"),
};

UI.btnHome.onclick = () => {
    renderPage(loadHome);
};

UI.btnMenu.onclick = () => {
    renderPage(loadMenu);
};

UI.btnAbout.onclick = () => {
    renderPage(loadAbout);
};

