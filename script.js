// 1. Форма сообщения о кибербуллинге
const reportForm = document.getElementById("report-form");
const reportMessage = document.getElementById("report-message");

reportForm.addEventListener("submit", function (event) {
    event.preventDefault();

    reportMessage.textContent =
        "Спасибо за сообщение. Сейчас оно не отправляется на сервер. Если тебе нужна помощь, расскажи взрослому, которому доверяешь.";
});


// 2. Тест о кибербуллинге
const checkAnswerButton = document.getElementById("check-answer");
const quizResult = document.getElementById("quiz-result");

checkAnswerButton.addEventListener("click", function () {
    const selectedAnswer = document.querySelector(
        'input[name="quiz-answer"]:checked'
    );

    if (!selectedAnswer) {
        quizResult.textContent = "Сначала выбери ответ.";
        return;
    }

    if (selectedAnswer.value === "yes") {
        quizResult.textContent =
            "Правильно! Обидные комментарии и унизительные фотографии могут быть кибербуллингом. Сохрани доказательства и обратись к взрослому, которому доверяешь.";
    } else {
        quizResult.textContent =
            "Не совсем! Это может быть кибербуллингом. Сохрани доказательства и попроси помощи у взрослого, которому доверяешь.";
    }
});


// 3. Анализатор сообщений
// Это проверка ключевых слов, а не настоящий искусственный интеллект.
const analyzerForm = document.getElementById("analyzer-form");
const messageInput = document.getElementById("message-input");
const analyzerResult = document.getElementById("analyzer-result");

analyzerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const message = messageInput.value.trim().toLowerCase();

    if (message.length === 0) {
        analyzerResult.textContent = "Сначала введи сообщение.";
        return;
    }

    const harmfulPhrases = [
        "ненавижу тебя",
        "ты тупой",
        "ты глупая",
        "ты глупой",
        "не красивая",
        "не красивый",
        "ты тупая",
        "идиот",
        "идиотка",
        "убей себя",
        "никто тебя не любит",
        "неудачник",
        "неудачница",
        "ты никому не нужна",
        "ты никому не нужен"
    ];

    const foundHarmfulPhrase = harmfulPhrases.some(function (phrase) {
        return message.includes(phrase);
    });

    if (foundHarmfulPhrase) {
        analyzerResult.textContent =
            "Внимание! В сообщении могут быть обидные выражения. Контекст тоже важен. Если тебе прислали такое сообщение, сохрани доказательства и расскажи взрослому, которому доверяешь.";
    } else {
        analyzerResult.textContent =
            "Мы не нашли знакомых нам обидных выражений. Но это не означает, что сообщение безопасно. Важны контекст и намерения человека.";
    }
});


// 4. Форма консультации с психологом
const psychologistForm = document.getElementById("psychologist-form");
const consultationType = document.getElementById("consultation-type");
const contactPreference = document.getElementById("contact-preference");
const psychologistMessage = document.getElementById("psychologist-message");

psychologistForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!consultationType.value || !contactPreference.value) {
        psychologistMessage.textContent =
            "Пожалуйста, выбери оба варианта.";
        return;
    }

    if (consultationType.value === "online") {
        psychologistMessage.textContent =
            "Ты выбрала онлайн-консультацию. Заявка пока не отправлена. Для настоящего общения необходимо подключить службу консультаций.";
    } else {
        psychologistMessage.textContent =
            "Ты выбрала личную встречу. Запись пока не оформлена. Для настоящей записи необходимо подключить службу консультаций.";
    }
});
