const idioms = [
    { phrase: "Right up my alley", meaning: "Как раз по мне", example: "This jazz concert is right up my alley!", color: "rgba(66, 135, 245, 0.2)" },
    { phrase: "In the zone", meaning: "В состоянии концентрации", example: "I’m in the zone, don't distract me.", color: "rgba(147, 112, 219, 0.2)" },
    { phrase: "Music to my ears", meaning: "Что-то приятное", example: "The news was music to my ears.", color: "rgba(0, 206, 209, 0.2)" },
    { phrase: "Clear my head", meaning: "Привести мысли в порядок", example: "A walk helps me clear my head.", color: "rgba(100, 149, 237, 0.2)" },
    { phrase: "Park my carcass", meaning: "Приземлиться / сесть", example: "I need to park my carcass on that sofa.", color: "rgba(72, 61, 139, 0.2)" },
    { phrase: "Lift my spirits", meaning: "Поднять настроение", example: "Your visit really lifted my spirits.", color: "rgba(219, 112, 147, 0.2)" },
    { phrase: "On cloud nine", meaning: "На седьмом небе от счастья", example: "She was on cloud nine after the test.", color: "rgba(135, 206, 235, 0.2)" },
    { phrase: "Ring a bell", meaning: "Напоминать о чем-то", example: "That name rings a bell.", color: "rgba(123, 104, 238, 0.2)" },
    { phrase: "Wind down", meaning: "Расслабиться", example: "I wind down with some music.", color: "rgba(60, 179, 113, 0.2)" },
    { phrase: "Face the music", meaning: "Встречать трудности", example: "It's time to face the music.", color: "rgba(255, 99, 71, 0.15)" },
    { phrase: "Keep my cool", meaning: "Сохранять спокойствие", example: "I managed to keep my cool.", color: "rgba(70, 130, 180, 0.2)" },
    { phrase: "Hit the right note", meaning: "Сделать всё как надо", example: "The gift hit the right note.", color: "rgba(218, 112, 214, 0.2)" }
];

// ... (массив идиом оставляем прежним) ...

let currentIndex = 0;
const container = document.getElementById('active-card-container');
const counter = document.getElementById('counter');

function renderCard() {
    const item = idioms[currentIndex];
    container.innerHTML = `
        <div class="card" id="main-card">
            <div class="card-inner">
                <div class="card-front" style="background: ${item.color}">
                    <strong style="font-size: 1.5rem; display: block; margin-bottom: 10px;">${item.phrase}</strong>
                    <p style="font-style: italic; opacity: 0.8; font-size: 0.9rem;">"${item.example}"</p>
                </div>
                <div class="card-back" style="background: ${item.color}">
                    <p style="font-size: 1.4rem; font-weight: bold;">${item.meaning}</p>
                </div>
            </div>
        </div>
    `;

    const card = document.getElementById('main-card');
    card.onclick = () => card.classList.toggle('flipped');
    counter.innerText = `${currentIndex + 1} / ${idioms.length}`;
}

// Кнопки навигации
document.getElementById('next-btn').onclick = () => {
    currentIndex = (currentIndex + 1) % idioms.length;
    renderCard();
};

document.getElementById('prev-btn').onclick = () => {
    currentIndex = (currentIndex - 1 + idioms.length) % idioms.length;
    renderCard();
};

// ПОЧИНЕННАЯ КНОПКА ТЕСТА
document.getElementById('test-mode-btn').onclick = () => {
    const card = document.getElementById('main-card');
    // Если карточка перевернута — возвращаем её в начало
    card.classList.remove('flipped');
    // Можно добавить уведомление
    const btn = document.getElementById('test-mode-btn');
    btn.innerText = "Попробуй вспомнить перевод перед тем как нажать!";
    setTimeout(() => { btn.innerText = "Test Mode"; }, 2000);
};

renderCard();