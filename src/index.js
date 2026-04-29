import "./styles.css";
import { loadHome } from "./pages/home.js"
import { loadMenu } from "./pages/menu.js"
import { loadAbout } from "./pages/about.js"

function renderPage(importedPage) {
    content.textContent = "";
    const pageElement = importedPage();
    content.appendChild(pageElement);
    console.log("new page render!")
};

const contentContainer = document.getElementById("content");

const pages = {
    home: loadHome,
    menu: loadMenu,
    about: loadAbout,
};

const buttons = document.querySelectorAll(".btn-nav");

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const pageKey = e.target.dataset.page;
        renderPage(pages[pageKey]);
    });
});
