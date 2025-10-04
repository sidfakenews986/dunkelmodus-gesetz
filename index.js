export function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    updateDarkModePreference(body.classList.contains('dark-mode'));
}

function updateDarkModePreference(isDarkMode) {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
}

function applyInitialMode() {
    const darkMode = JSON.parse(localStorage.getItem('darkMode')) || false;
    if (darkMode) {
        document.body.classList.add('dark-mode');
    }
}

window.onload = applyInitialMode;