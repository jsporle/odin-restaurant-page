export function randomizeColor() {
    const r = Math.floor(Math.random() * 100);
    const g = Math.floor(Math.random() * 100);
    const b = Math.floor(Math.random() * 100);

    document.documentElement.style.setProperty("--r", r);
    document.documentElement.style.setProperty("--g", g);
    document.documentElement.style.setProperty("--b", b);
}