// Code your solutions in this file
const cards = [];

function writeCards(name) {
    for (let i = 0; i < name.length; i++) {
        cards.message = `Thank you, ${name[i]}, for the wonderful surprise gift!`;
        cards.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`);
        
    }
    return cards
}

function countDown() {
    let countDown = 10
    while (countDown >= 0) {
        console.log(countDown--)
    }
}