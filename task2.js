function getParticipants() {

    let numParticipants = parseInt(prompt("Enter the number of participants:"));
    let participants = [];


    for (let i = 0; i < numParticipants; i++) {
        let name = prompt(`Enter the name of participant ${i + 1}:`);
        participants.push(name);
    }


    participants.sort();


    let listHTML = "<ol>";
    for (let i = 0; i < participants.length; i++) {
        listHTML += `<li>${participants[i]}</li>`;
    }
    listHTML += "</ol>";


    document.getElementById("participantList").innerHTML = listHTML;
}