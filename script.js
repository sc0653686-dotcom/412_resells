document.addEventListener("DOMContentLoaded", () => {

    // Smooth scroll for navigation links
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Button smooth scroll
    const shopBtn = document.querySelector(".btn");

    if (shopBtn) {
        shopBtn.addEventListener("click", (e) => {
            e.preventDefault();

            const products = document.querySelector("#products");

            products.scrollIntoView({
                behavior: "smooth"
            });
        });
    }

});