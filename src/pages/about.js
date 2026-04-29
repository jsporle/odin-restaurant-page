import "../styles/menu.css";

export function loadAbout() {
    const content = document.createElement('div');
    content.classList.add("about");
    
    const hoursTitle = document.createElement("h2");
    hoursTitle.textContent = "Opening Hours";
    hoursTitle.classList.add("menu-section-title");
    content.appendChild(hoursTitle);

    const hoursGrid = document.createElement("div");
    hoursGrid.classList.add("menu-grid");

    const hours = [
        { day: "Mon", time: "Closed" },
        { day: "Tue", time: "Closed" },
        { day: "Wed", time: "12:00 - 19:00" },
        { day: "Thu", time: "12:00 - 22:00" },
        { day: "Fri", time: "12:00 - 23:00" },
        { day: "Sat", time: "12:00 - 23:00" },
        { day: "Sun", time: "12:00 - 19:00" }
    ];

    hours.forEach(item => {
        const dayCell = document.createElement("span");
        dayCell.classList.add("item-name");
        dayCell.textContent = item.day;

        const timeCell = document.createElement("span");
        timeCell.classList.add("item-price");
        timeCell.textContent = item.time;

        hoursGrid.append(dayCell, timeCell);
    });

    content.appendChild(hoursGrid);

    return content;    
};