document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.querySelector('.back-to-top');

    // Функція, яка показує або ховає кнопку "Вгору"
    function toggleButtonVisibility() {
        if (window.scrollY > 300) { // Показуємо, якщо прокручено більше 300 пікселів
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    }

    // Слухач події прокрутки
    window.addEventListener('scroll', toggleButtonVisibility);
});

// --- Логіка копіювання контактів при кліку ---
const copyableElements = document.querySelectorAll('.copyable-text');

copyableElements.forEach(element => {
    element.addEventListener('click', function() {
        // Отримуємо текст з атрибута data-copy-value
        const textToCopy = this.getAttribute('data-copy-value'); 

        // Використовуємо сучасний API для копіювання
        navigator.clipboard.writeText(textToCopy).then(() => {
            // Показуємо підтвердження
            const originalText = this.innerHTML;
            this.innerHTML = '<span style="color: #00FF00; font-weight: bold;">[СКОПІЙОВАНО!]</span>';
            
            // Повертаємо початковий текст через 1.5 секунди
            setTimeout(() => {
                this.innerHTML = originalText;
            }, 1500);

        }).catch(err => {
            console.error('Помилка копіювання:', err);
            // На випадок помилки (наприклад, старий браузер), показуємо повідомлення
            alert(`Не вдалося скопіювати. Будь ласка, скопіюйте вручну: ${textToCopy}`);
        });
    });
});
