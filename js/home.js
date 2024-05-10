const typingTextElement = document.getElementById("typing-text");

let textIndex = 0;
let index = 0;
let direction = 1; // 1 for forward, -1 for reverse

const texts = ["front-end", "back-end"];

function type() {
    const text = texts[textIndex];
    if (direction === 1) {
        if (index < text.length) {
            typingTextElement.innerHTML += text.charAt(index);
            index++;
        } else {
            direction = -1; // Change direction to reverse
            index--; // Adjust index to prevent skipping the last character
        }
    } else {
        if (index >= 0) {
            typingTextElement.innerHTML = text.substring(0, index);
            index--;
        } else {
            direction = 1; // Change direction to forward
            index = 0; // Reset index to start forward typing again
            textIndex = (textIndex + 1) % texts.length; // Switch to the next text
        }
    }

    setTimeout(type, 150); // Adjust the speed of typing by changing the delay (in milliseconds)
}

type();



