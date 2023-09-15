document.addEventListener("DOMContentLoaded", () => {
    // JavaScript code for mobile menu and social media icons
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

// Get the chat container element
const chatContainer = document.querySelector('.chat-messages');

// Function to add a message to the chat container
function addMessage(text, isUser = false) {
    const messageClass = isUser ? 'user' : 'lorenzo';

    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', messageClass);

    const messageText = document.createElement('p');
    messageText.textContent = text;

    messageDiv.appendChild(messageText);
    chatContainer.appendChild(messageDiv);
}

// Populate initial greeting message
addMessage("Ah, bonjour! 🍽️ Welcome to my culinary kingdom. How may I assist you today? You have several options to choose from:");
addMessage("[Learn a New Dish], [Get a Random Meal], [Challenge Me, [Join a Virtual Cooking Class], [Request Cooking Tips], ");
