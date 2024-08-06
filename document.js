document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('messageButton');
    const messageDisplay = document.getElementById('messageDisplay');

    button.addEventListener('click', () => {
        messageDisplay.textContent = 'Hello! This is your message.';
    });
});