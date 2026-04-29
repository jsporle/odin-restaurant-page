import "../styles/home.css";

export function loadHome() {
    const content = document.createElement('div');
    content.classList.add("home");

    const svgNS = "http://www.w3.org/2000/svg";
    const iconContainer = document.createElement("div");
    iconContainer.classList.add("home-icon");

    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke-width", "1");

    const path = document.createElementNS(svgNS, "path");
    path.setAttribute("d", "M8 4L8 20M18 12C16 11.3333333 15 10 15 8 15 6 16 4.66666667 18 4L18 20 18 12zM5 4L5 7C5 8.65685425 6.34314575 10 8 10L8 10C9.65685425 10 11 8.65685425 11 7L11 4");

    svg.appendChild(path);
    iconContainer.appendChild(svg);

    const title = document.createElement("h1")
    title.classList.add("title")
    title.textContent = "A new dining experience in the heart of Brighton";

    content.append(iconContainer, title);

    return content;    
};