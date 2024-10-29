
const backgroundMusic = new Audio('assets/sounds/main.mp3');
backgroundMusic.loop = true;
backgroundMusic.volume = 0.5;

window.addEventListener('focus', () => backgroundMusic.play());
window.addEventListener('blur', () => backgroundMusic.pause());

// Theme Management with Toggle
const ThemeManager = {
    body: document.body,
    eventsSection: document.getElementById('events'),
    faqSection: document.querySelectorAll('.faq, .question, .answer'),

    toggleTheme(isNightMode) {
        this.body.classList.toggle('dark-mode', isNightMode);
        this.body.classList.toggle('light-mode', !isNightMode);
        
        if (isNightMode) {
            this.eventsSection.style.backgroundColor = '#333';
            this.eventsSection.style.color = 'white';
        } else {
            this.eventsSection.style.backgroundColor = 'white';
            this.eventsSection.style.color = 'black';
        }

        this.faqSection.forEach(el => el.classList.toggle('night-mode', isNightMode));
    }
};

document.getElementById('toggle-mode').addEventListener('change', function() {
    const isNightMode = this.checked;
    ThemeManager.toggleTheme(isNightMode);

    
    const themeChangeSound = new Audio('assets/sounds/theme.mp3');
    themeChangeSound.play();
});

// FAQ Toggle Functionality
function toggleAnswer(index) {
    const answer = document.getElementById(`answer-${index}`);
    if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        answer.style.transform = 'scaleY(0)';
    } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.style.transform = 'scaleY(1)';
    }
}

document.querySelectorAll('.faq-question').forEach((question, index) => {
    question.addEventListener('click', () => toggleAnswer(index));
});

// Form Handling  Validation, Sound, Success Message
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const successMessage = document.createElement('div');
    successMessage.classList.add('alert', 'alert-success');
    successMessage.style.display = 'none';
    form.appendChild(successMessage);

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nameField = document.getElementById('name');
        const emailField = document.getElementById('email');
        const messageField = document.getElementById('message');

        let isValid = true;

        if (nameField.value.trim() === "") {
            nameField.classList.add('is-invalid');
            isValid = false;
        } else {
            nameField.classList.remove('is-invalid');
        }

        if (!validateEmail(emailField.value)) {
            emailField.classList.add('is-invalid');
            isValid = false;
        } else {
            emailField.classList.remove('is-invalid');
        }

        if (messageField.value.trim() === "") {
            messageField.classList.add('is-invalid');
            isValid = false;
        } else {
            messageField.classList.remove('is-invalid');
        }

        if (isValid) {
            successMessage.textContent = "Form submitted successfully!";
            successMessage.style.display = 'block';
            form.reset();

            const successAudio = new Audio('assets/sounds/sentmessageform.mp3');
            successAudio.play();

            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 3000);
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase()) && email.toLowerCase().endsWith(".com");
    }
});

// Subscription 
document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const modal = bootstrap.Modal.getInstance(document.getElementById('subscribeModal'));
    modal.hide();

    const successAudio = new Audio('assets/sounds/sentmessageform.mp3');
    successAudio.play();
    alert('Thank you for subscribing!');
});



// Keyboard Navigation
const navItems = document.querySelectorAll('.nav-link');
let currentIndex = 0;

function focusNavItem(index) {
    navItems[currentIndex].classList.remove('active');
    currentIndex = index;
    navItems[currentIndex].focus();
    navItems[currentIndex].classList.add('active');
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowDown') {
        event.preventDefault();
        if (currentIndex < navItems.length - 1) {
            focusNavItem(currentIndex + 1);
        }
    } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        if (currentIndex > 0) {
            focusNavItem(currentIndex - 1);
        }
    }
});

let isTimeVisible = false;
const showTimeButton = document.getElementById('show-time-btn');
const displayTime = document.getElementById('display-time');
if (showTimeButton) {
    showTimeButton.addEventListener('click', function () {
        if (isTimeVisible) {
            displayTime.textContent = ""; // Скрыть время
            isTimeVisible = false;
            showTimeButton.textContent = "Show time"; 
        } else {
            const currentTime = new Date().toLocaleTimeString();
            displayTime.textContent = currentTime; // Показать время
            isTimeVisible = true;
            showTimeButton.textContent = "Hide time"; 
        }
    });
}


document.addEventListener('DOMContentLoaded', function() {
    // Функция для получения приветствия в зависимости от времени суток
    function getGreeting() {
        const now = new Date();
        const hour = now.getHours();
        let greeting;

        // приветствие с switch
        switch (true) {
            case (hour >= 5 && hour < 12):
                greeting = "Good Morning!";
                break;
            case (hour >= 12 && hour < 17):
                greeting = "Good Afternoon!";
                break;
            case (hour >= 17 && hour < 21):
                greeting = "Good Evening!";
                break;
            default:
                greeting = "Good Night!";
                break;
        }

        return greeting;
    }

    // Функция для отображения приветствия на странице
    function displayGreeting() {
        const greeting = getGreeting();
        const greetingElement = document.getElementById('display-greeting');
        greetingElement.textContent = greeting;
    }

    // Вызываем функцию для отображения приветствия при загрузке страницы
    displayGreeting();
});
