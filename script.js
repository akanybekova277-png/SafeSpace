const checkAnswerButton = document.getElementById("check-answer");
const quizResult = document.getElementById("quiz-result");

checkAnswerButton.addEventListener("click", function () {
    const selectedAnswer = document.querySelector(
        'input[name="quiz-answer"]:checked'
    );

    if (!selectedAnswer) {
        quizResult.textContent = "Please choose an answer first.";
        return;
    }

    if (selectedAnswer.value === "yes") {
        quizResult.textContent =
            "Correct! Hurtful comments and embarrassing photos can be cyberbullying. Save evidence and ask a trusted adult for help.";
    } else {
        quizResult.textContent =
            "Not quite! This can be cyberbullying. Save evidence and ask a trusted adult for help.";
    }
});
// Basic SafeSpace message analyzer
const analyzerForm = document.getElementById("analyzer-form");
const messageInput = document.getElementById("message-input");
const analyzerResult = document.getElementById("analyzer-result");

analyzerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const message = messageInput.value.trim().toLowerCase();

    if (message.length === 0) {
        analyzerResult.textContent = "Please enter a message first.";
        return;
    }

    const harmfulWords = [
        "hate you",
        "stupid",
        "idiot",
        "kill yourself",
        "nobody likes you",
        "loser"
    ];

    const foundHarmfulWords = harmfulWords.some(function (word) {
        return message.includes(word);
    });

    if (foundHarmfulWords) {
        analyzerResult.textContent =
            "Warning: This message may contain hurtful language. Context matters. If someone sent you this message, save the evidence and talk to a trusted adult.";
    } else {
        analyzerResult.textContent =
            "No listed harmful phrases were detected. However, this does not guarantee that the message is safe. Context and intent matter.";
    }
});
// Psychologist consultation form
const psychologistForm = document.getElementById("psychologist-form");
const consultationType = document.getElementById("consultation-type");
const contactPreference = document.getElementById("contact-preference");
const psychologistMessage = document.getElementById("psychologist-message");

psychologistForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!consultationType.value || !contactPreference.value) {
        psychologistMessage.textContent = "Please choose both options.";
        return;
    }

    if (consultationType.value === "online") {
        psychologistMessage.textContent =
            "You selected an online consultation. No request has been sent yet. A real consultation service must be connected before you can talk to a psychologist.";
    } else {
        psychologistMessage.textContent =
            "You selected an in-person consultation. No appointment has been booked. A real consultation service must be connected before you can book an appointment.";
    }
});