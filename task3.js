function getDogNames() {
    let dogs = [];


    for (let i = 0; i < 6; i++) {
        let name = prompt(`Enter the name of dog ${i + 1}:`);
        dogs.push(name);
    }


    dogs.sort().reverse();


    let listHTML = "<ul>";
    for (let i = 0; i < dogs.length; i++) {
        listHTML += `<li>${dogs[i]}</li>`;
    }
    listHTML += "</ul>";


    document.getElementById("dogList").innerHTML = listHTML;
}