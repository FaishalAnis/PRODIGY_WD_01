document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav a");
    const currentPage = window.location.pathname;

    links.forEach((link) => {
        if (currentPage.includes(link.getAttribute("href"))) {
            link.classList.add("current");
        }
    });
});