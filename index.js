document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const mobileMenu = document.querySelector(".mobile-menu");

    menuIcon.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
    });

    // Add event listeners to social media icons
    const socialIcons = document.querySelectorAll(".social-icon");

    socialIcons.forEach((icon) => {
        icon.addEventListener("click", () => {
            // Handle the click event for each social media icon
            const id = icon.id;

            // Perform specific actions based on the social media platform (e.g., open a link)
            switch (id) {
                case "github":
                    window.open("https://github.com", "_blank");
                    break;
                case "linkedin":
                    window.open("https://www.linkedin.com", "_blank");
                    break;
                // Add cases for other social media platforms
            }
        });
    });
});

let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 2000); // Change slide every 2 seconds (adjust as needed)
}
