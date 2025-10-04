export function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    updateDarkModePreference(body.classList.contains('dark-mode'));
}

function updateDarkModePreference(isDarkMode) {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
}

function applyInitialMode() {
    const darkMode = JSON.parse(localStorage.getItem('darkMode')) ?? false;
    if (darkMode) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

// Adding event listener for button click to toggle dark mode
const toggleButton = document.getElementById('toggle-dark-mode-button');
toggleButton.addEventListener('click', toggleDarkMode);

window.onload = applyInitialMode;