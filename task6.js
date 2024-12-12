function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}


function rollDiceUntilSix() {
    let results = [];
    let roll;


    do {
        roll = rollDice();
        results.push(roll);
    } while (roll !== 6);


    let listHTML = "<ul>";
    for (let i = 0; i < results.length; i++) {
        listHTML += `<li>Roll ${i + 1}: ${results[i]}</li>`;
    }
    listHTML += "</ul>";


    document.getElementById("diceResults").innerHTML = listHTML;
}