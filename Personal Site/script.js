document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector('.text');
    const phrases = textElement.getAttribute('data-text').split(', ');
    let currentPhraseIndex = 0;
    let isErasing = false;
    let charIndex = 0;

    function typePhrase() {
        const phrase = phrases[currentPhraseIndex];
        if (!isErasing && charIndex <= phrase.length) {
            textElement.textContent = phrase.substring(0, charIndex);
            charIndex++;
            setTimeout(typePhrase, 100); // Typing speed
        } else if (isErasing && charIndex >= 0) {
            textElement.textContent = phrase.substring(0, charIndex);
            charIndex--;
            setTimeout(typePhrase, 50); // Erasing speed
        } else {
            isErasing = !isErasing;
            if (!isErasing) {
                currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            }
            setTimeout(typePhrase, isErasing ? 2000 : 500); // Pause before typing/erasing
        }
    }

    typePhrase(); // Start the cycle immediately
});