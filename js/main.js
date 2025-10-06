document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.querySelector('.back-to-top');

    // Функция, которая показывает или скрывает кнопку
    function toggleButtonVisibility() {
        if (window.scrollY > 300) { // Показываем, если прокручено больше 300 пикселей
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    }

    // Слушатель событий скролла
    window.addEventListener('scroll', toggleButtonVisibility);
});
// --- Логика копирования контактов по клику ---
    const copyableElements = document.querySelectorAll('.copyable-text');

    copyableElements.forEach(element => {
        element.addEventListener('click', function() {
            // Получаем текст из атрибута data-copy-value
            const textToCopy = this.getAttribute('data-copy-value'); 

            // Используем современный API для копирования
            navigator.clipboard.writeText(textToCopy).then(() => {
                // Показываем подтверждение
                const originalText = this.innerHTML;
                this.innerHTML = '<span style="color: #00FF00; font-weight: bold;">[СКОПИРОВАНО!]</span>';
                
                // Возвращаем исходный текст через 1.5 секунды
                setTimeout(() => {
                    this.innerHTML = originalText;
                }, 1500);

            }).catch(err => {
                console.error('Ошибка копирования:', err);
                // На случай ошибки (например, старый браузер), показываем, что не удалось
                alert(`Не удалось скопировать. Пожалуйста, скопируйте вручную: ${textToCopy}`);
            });
        });
    });