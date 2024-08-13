
document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('userInput');
    const displayText = document.getElementById('displayText');
    const typeButton = document.getElementById('typeButton');
    const revealButton = document.getElementById('revealButton');
    const hideButton = document.getElementById('hideButton');

    typeButton.addEventListener('click', () => {
        userInput.style.display = 'block';
        userInput.focus();
        displayText.textContent = '.......';
    });

    userInput.addEventListener('input', () => {
        displayText.textContent = '.......';
    });

    revealButton.addEventListener('click', () => {
        displayText.textContent = userInput.value;
    });

    hideButton.addEventListener('click', () => {
        displayText.textContent = '.......';
    });
});
