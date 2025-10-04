export function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    updateLocalStorage(body.classList.contains('dark-mode'));
}

function updateLocalStorage(isDarkMode) {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
}

function applyInitialMode() {
    const darkMode = JSON.parse(localStorage.getItem('darkMode')) === null ? false : JSON.parse(localStorage.getItem('darkMode'));
    if (darkMode) {
        document.body.classList.add('dark-mode');
    }
}

window.onload = applyInitialMode;