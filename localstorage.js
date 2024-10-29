// Функция для входа
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Простая проверка (можно добавить дополнительную логику аутентификации)
    if (username && password) {
        // Сохранение информации о пользователе в локальном хранилище
        localStorage.setItem('username', username);
        localStorage.setItem('password', password); // Сохранение пароля
        updateUI();
        
        // Закрытие модального окна
        $('#loginModal').modal('hide'); // Используем jQuery для закрытия
    } else {
        alert('Please enter both username and password');
    }
}

// Функция для выхода
function logout() {
    // Удаление информации о пользователе из локального хранилища
    localStorage.removeItem('username');
    localStorage.removeItem('password'); // Удаление пароля
    updateUI();
}

// Функция для обновления интерфейса в зависимости от состояния аутентификации
function updateUI() {
    const username = localStorage.getItem('username');
    const authButtons = document.getElementById('auth-buttons');
    const logoutBtn = document.getElementById('logoutBtn');

    if (username) {
        authButtons.style.display = 'none'; // Скрыть кнопку входа
        logoutBtn.style.display = 'block'; // Показать кнопку выхода
    } else {
        authButtons.style.display = 'block'; // Показать кнопку входа
        logoutBtn.style.display = 'none'; // Скрыть кнопку выхода
    }

  


// Функция для инициализации состояния при загрузке страницы
function init() {
    updateUI();
}

// Вызываем инициализацию при загрузке страницы
window.onload = init;
