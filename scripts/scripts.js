// scripts.js
window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");

    // When scrolled more than 50px, add shadow and change background
    if (window.scrollY > 50) {
        navbar.classList.add("bg-white", "shadow-lg");
        navbar.classList.remove("bg-transparent");
    } else {
        navbar.classList.add("bg-transparent");
        navbar.classList.remove("bg-white", "shadow-lg");
    }
});
