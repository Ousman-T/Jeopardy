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

const player1 = prompt("Choose a number between 0 - 10");
const computer = cardArr[Math.floor(Math.random() * cardArr.length)];
console.log(player1);
console.log(computer);

for(let i = 0; i < 10; i++){
    if(player1 > computer){
        console.log("You've won the round, now win the game!");
    } else if (computer > player1){
        console.log("You've lost the round, but can still win the game!");
    }
}