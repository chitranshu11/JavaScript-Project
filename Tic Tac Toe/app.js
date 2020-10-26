let cells = document.querySelectorAll('.row > div');

let message = document.getElementById('message');

message.textContent = 'Player 1 turn';

let player1 = false;
let player2 = false;

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}

function cellClicked () {
    let eventText = event.target.textContent;
    
    if (player1 == false && player2 == false && eventText != 'X' && eventText!='O') {
        event.target.textContent = 'X';
        player2 = true;
        message.textContent = 'Player 2 turn';
    } 
    else if (player2 == true && eventText != 'X' && eventText!='O') {
        event.target.textContent = 'O';
        player2 = false;
        player1 = true;
        message.textContent = 'Player 1 turn';
    }
    else if(player1 == true && eventText != 'X' && eventText!='O') {
        event.target.textContent = 'X';
        player1 = false;
        player2 = true;
        message.textContent = 'Player 2 turn';
    }
}
