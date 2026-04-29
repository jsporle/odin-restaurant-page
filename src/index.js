import "./styles.css";
import { loadHome } from "./pages/home.js"
import { loadMenu } from "./pages/menu.js"
import { loadAbout } from "./pages/about.js"
import { colourRandomizer, randomizeColor } from "./utilities/colourRandomizer.js"

function initializePage() {
    randomizeColor()

    const homeBtn = document.querySelector('[data-page="home"]');
    if (homeBtn) {
        setActiveButton(homeBtn);
        renderPage(loadHome);
    }

    document.body.classList.add("loaded");
}


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

function setActiveButton(clickedButton) {
    buttons.forEach(btn => btn.classList.remove("active"));
    clickedButton.classList.add("active");
}

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        setActiveButton(e.currentTarget);
        const pageKey = e.currentTarget.dataset.page;
        renderPage(pages[pageKey]);
    });
});

initializePage();
