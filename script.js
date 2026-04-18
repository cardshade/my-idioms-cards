 const idioms = [
    { phrase: "Right up my alley", meaning: "Как раз по мне" },
    { phrase: "In the zone", meaning: "В состоянии концентрации" },
    { phrase: "Music to my ears", meaning: "Что-то приятное" },
    { phrase: "Clear my head", meaning: "Привести мысли в порядок" },
    { phrase: "Park my carcass", meaning: "Приземлиться / сесть" },
    { phrase: "Lift my spirits", meaning: "Поднять настроение" },
    { phrase: "On cloud nine", meaning: "На седьмом небе" },
    { phrase: "Ring a bell", meaning: "Напоминать о чем-то" },
    { phrase: "Wind down", meaning: "Расслабиться" },
    { phrase: "Face the music", meaning: "Встречать трудности" },
    { phrase: "Keep my cool", meaning: "Сохранять спокойствие" },
    { phrase: "Hit the right note", meaning: "Сделать всё как надо" }
];

let currentIndex = 0;
const container = document.getElementById('active-card-container');
const counter = document.getElementById('counter');

function renderCard() {
    const item = idioms[currentIndex];
    // Очищаем и создаем новую карточку
    container.innerHTML = `
        <div class="card" id="main-card">
            <div class="card-inner">
                <div class="card-front">
                    <strong style="font-size: 1.4rem;">${item.phrase}</strong>
                    <p style="font-size: 0.7rem; margin-top: 15px; opacity: 0.5;">TAP TO FLIP</p>
                </div>
                <div class="card-back">
                    <p style="font-size: 1.2rem;">${item.meaning}</p>
                </div>
            </div>
        </div>
    `;

    // Добавляем событие переворота
    const card = document.getElementById('main-card');
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
    
    // Обновляем счетчик
    counter.innerText = `${currentIndex + 1} / ${idioms.length}`;
}

// Кнопки навигации
document.getElementById('next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % idioms.length;
    renderCard();
});

document.getElementById('prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + idioms.length) % idioms.length;
    renderCard();
});

// Кнопка режима проверки (просто сбрасывает переворот)
document.getElementById('test-mode-btn').addEventListener('click', () => {
    renderCard(); // Перерисовываем карточку «лицом» к нам
    alert("Test Mode: Попробуй вспомнить перевод перед тем как нажать!");
});

// Запускаем первую карточку при старте
renderCard();