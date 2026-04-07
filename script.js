// Получаем элементы
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close-modal');
const serviceBtns = document.querySelectorAll('.service-btn');
const form = document.getElementById('appointment-form');
const serviceSelect = document.getElementById('service');

// Открытие модального окна при клике на кнопку "Записаться"
serviceBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // Пытаемся определить, какая услуга была выбрана
        const card = this.closest('.service-card');
        if (card) {
            const serviceName = card.querySelector('h3').innerText;
            // Устанавливаем выбранную услугу в выпадающий список
            if (serviceSelect) {
                for (let i = 0; i < serviceSelect.options.length; i++) {
                    if (serviceSelect.options[i].value === serviceName) {
                        serviceSelect.selectedIndex = i;
                        break;
                    }
                }
            }
        }
        modal.style.display = 'flex';
    });
});

// Закрытие модального окна при клике на крестик
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Обработка отправки формы
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Предотвращаем реальную отправку
    
    // Собираем данные из формы
    const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        service: document.getElementById('service').value,
        date: document.getElementById('date').value
    };
    
    // Здесь можно отправить данные на сервер
    console.log('Данные для записи:', formData);
    
    // Показываем сообщение об успехе
    alert(`Спасибо, ${formData.name}! Ваша заявка на услугу "${formData.service}" принята. Мы свяжемся с вами в ближайшее время.`);
    
    // Очищаем форму
    form.reset();
    
    // Закрываем модальное окно
    modal.style.display = 'none';
});