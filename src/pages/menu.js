import "../styles/menu.css";

export function loadMenu() {
    const content = document.createElement('div');
    content.classList.add("menu");
    
    const title = document.createElement("h1");
    title.textContent = "Summer 2026";
    content.appendChild(title);

    const menuData = [
        {
            category: "Starters",
            items: [
                { name: "Roasted Beetroot with Hibiscus & Lime", price: "£11" },
                { name: "Burrata with Charred Grapes & Urfa Chile", price: "£14" },
                { name: "Crispy Tofu with Lime & Black Pepper Cashews", price: "£12" }
            ]
        },
        {
            category: "Mains",
            items: [
                { name: "Slow-Cooked Lamb with Miso & Fennel", price: "£28" },
                { name: "Oyster Mushroom Steaks with Za’atar Gravy", price: "£22" },
                { name: "Miso-Butter Pasta with Pickled Chillies", price: "£19" }
            ]
        },
        {
            category: "Desserts",
            items: [
                { name: "Cardamom & Coconut Panna Cotta", price: "£9" },
                { name: "Tangerine Sorbet with Chilli Salt", price: "£8" },
                { name: "Chocolate Ganache with Rose & Pistachio", price: "£11" }
            ]
        }
    ];

    menuData.forEach(section => {
        const sectionHeader = document.createElement("h2");
        sectionHeader.classList.add("menu-section-title");
        sectionHeader.textContent = section.category;
        content.appendChild(sectionHeader)
        
        const menuGrid = document.createElement("div");
        menuGrid.classList.add("menu-grid");

        section.items.forEach(item => {
            const nameCell = document.createElement("span");
            nameCell.classList.add("item-name");
            nameCell.textContent = item.name;

            const priceCell = document.createElement("span");
            priceCell.classList.add("item-price");
            priceCell.textContent = item.price;

            menuGrid.append(nameCell, priceCell);
        });

        content.appendChild(menuGrid);
    });

    return content;    
};