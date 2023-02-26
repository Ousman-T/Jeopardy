const card1 = Math.round(Math.random() * 10);
const card2 = Math.round(Math.random() * 10);
const card3 = Math.round(Math.random() * 10);
const card4 = Math.round(Math.random() * 10);
const card5 = Math.round(Math.random() * 10);
const card6 = Math.round(Math.random() * 10);
const card7 = Math.round(Math.random() * 10);
const card8 = Math.round(Math.random() * 10);
const card9 = Math.round(Math.random() * 10);
const card10 = Math.round(Math.random() * 10);
cardArr = [card1,card2,card3,card4,card5,card6,card7,card8,card9,card10];
console.log(cardArr);

// function DrawCard(){
//     prompt("Pick a card between 0-10.");
//     return;
// }

const player1 = prompt("Pick a card between 0-10");
const computer = cardArr[Math.floor(Math.random() * cardArr.length)];
console.log(player1);
console.log(computer);

function PlayRound(){
    for(let i = 0; i < cardArr.length; i++){
        console.log("Let's see who wins!");
    }
}
PlayRound();