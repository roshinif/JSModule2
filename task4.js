function getNumbers() {
    let numbers = [];
    let input;


    do {
        input = parseFloat(prompt("Enter a number (enter 0 to stop):"));
        if (input !== 0) {
            numbers.push(input);
        }
    } while (input !== 0);


    numbers.sort((a, b) => b - a);


    console.log("Numbers from largest to smallest:");
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
}