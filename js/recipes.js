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

// Get references to the input field and send button
const userMessageInput = document.getElementById('userMessage');
const sendMessageButton = document.getElementById('sendMessage');

// Add an event listener to the send button
sendMessageButton.addEventListener('click', () => {
    // Get the user's message from the input field
    const userMessage = userMessageInput.value;

    // Send the message (you can define this function)
    sendMessage(userMessage);

    // Clear the input field
    userMessageInput.value = '';
});

// Function to send the user's message
function sendMessage(message) {
    // Handle the logic for sending the message here
    // For example, you can add the message to the chat container
    // and process any responses from an API
    // Remember to update the chat container with the response
}


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

    // Assuming userMessage is a global variable containing the user's message
    if (isUser) {
        const userMessageDiv = document.createElement('div');
        userMessageDiv.classList.add('chat-message', 'user');

        const userMessageText = document.createElement('p');
        userMessageText.textContent = userMessage;

        userMessageDiv.appendChild(userMessageText);
        chatContainer.appendChild(userMessageDiv);
    }
}


// Populate initial greeting message
addMessage("Ah, bonjour! 🍽️ Welcome to my culinary kingdom. How may I assist you today? You have several options to choose from:");
addMessage("[Learn a New Dish], [Get a Random Meal], [Challenge Me, [Join a Virtual Cooking Class], [Request Cooking Tips], ");