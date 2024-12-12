
function getNumbers() {

    let numbers = [];


    for (let i = 0; i < 5; i++) {
        let number = prompt(`Enter number ${i + 1}:`);
        numbers.push(Number(number));
    }



    let resultText = "Numbers in reverse order:<br>";
    for (let i = numbers.length - 1; i >= 0; i--) {
        resultText += numbers[i] + "<br>";
    }


    document.getElementById("result").innerHTML = resultText;
}