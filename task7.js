function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}


function startRollingDice() {

    let sides = parseInt(prompt("Enter the number of sides on the dice:"));
    let maxNumber = sides;

    let results = [];
    let roll;


    do {
        roll = rollDice(sides);
        results.push(roll);
    } while (roll !== maxNumber);


    let listHTML = "<ul>";
    for (let i = 0; i < results.length; i++) {
        listHTML += `<li>Roll ${i + 1}: ${results[i]}</li>`;
    }
    listHTML += "</ul>";


    document.getElementById("diceResults").innerHTML = listHTML;
}