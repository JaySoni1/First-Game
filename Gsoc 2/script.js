// script.js


const deck = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let card1, card2, card3;


function resetGame() {
    card1 = undefined;
    card2 = undefined;
    card3 = undefined;
    document.getElementById("card1").textContent = "?";
    document.getElementById("card2").textContent = "?";
    document.getElementById("message").textContent = "";
}


function drawCards() {
    card1 = deck[Math.floor(Math.random() * deck.length)];
    card2 = deck[Math.floor(Math.random() * deck.length)];

   
    while (card1 === card2) {
        card2 = deck[Math.floor(Math.random() * deck.length)];
    }

    document.getElementById("card1").textContent = formatCard(card1);
    document.getElementById("card2").textContent = formatCard(card2);
    document.getElementById("message").textContent = "Guess if the next card will be in between or outside.";
}


function formatCard(value) {
    switch (value) {
        case 11: return "J";
        case 12: return "Q";
        case 13: return "K";
        case 14: return "A";
        default: return value;
    }
}

function guessInBetween() {
    if (!card1 || !card2) {
        document.getElementById("message").textContent = "Draw two cards first!";
        return;
    }

    card3 = deck[Math.floor(Math.random() * deck.length)];
    const minCard = Math.min(card1, card2);
    const maxCard = Math.max(card1, card2);

    document.getElementById("message").textContent = `Card 3: ${formatCard(card3)}`;
    if (card3 > minCard && card3 < maxCard) {
        document.getElementById("message").textContent += " - You guessed correctly!";
    } else {
        document.getElementById("message").textContent += " - Wrong guess!";
    }
}


function guessOutside() {
    if (!card1 || !card2) {
        document.getElementById("message").textContent = "Draw two cards first!";
        return;
    }

    card3 = deck[Math.floor(Math.random() * deck.length)];
    const minCard = Math.min(card1, card2);
    const maxCard = Math.max(card1, card2);

    document.getElementById("message").textContent = `Card 3: ${formatCard(card3)}`;
    if (card3 < minCard || card3 > maxCard) {
        document.getElementById("message").textContent += " - You guessed correctly!";
    } else {
        document.getElementById("message").textContent += " - Wrong guess!";
    }
}


resetGame();
