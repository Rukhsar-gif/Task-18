"use strict";

const textInput = document.getElementById("textInput");
const characterCount = document.getElementById("characterCount");
const wordCount = document.getElementById("wordCount");
const sentenceCount = document.getElementById("sentenceCount");
const remainingCount = document.getElementById("remainingCount");
const clearButton = document.getElementById("clearButton");

const maxCharacters = 5000;

function countWords(text) {
    const trimmedText = text.trim();

    if (trimmedText === "") {
        return 0;
    }

    return trimmedText.split(/\s+/).length;
}

function countSentences(text) {
    const trimmedText = text.trim();

    if (trimmedText === "") {
        return 0;
    }

    const matches =
        trimmedText.match(/[.!?]+(?=\s|$)/g);

    return matches ? matches.length : 0;
}

function updateCounts() {
    const text = textInput.value;

    characterCount.textContent =
        text.length;

    wordCount.textContent =
        countWords(text);

    sentenceCount.textContent =
        countSentences(text);

    remainingCount.textContent =
        `${maxCharacters - text.length} remaining`;
}

textInput.addEventListener(
    "input",
    updateCounts
);

clearButton.addEventListener(
    "click",
    function () {
        textInput.value = "";

        updateCounts();

        textInput.focus();
    }
);

updateCounts();