// This will be a memory game for solo play only. 
// Basic layout will be 20 cards on a game board, 10 sets of 2 of the same cards; in a 4 column x 5 row style.
// The cards will have images on both the front (specific Team) and back (generic).
document.addEventListener('DOMContentLoaded', () => {

const teamNames = [

        {
            name: 'Alpha Romeo',
            image: 'image/AlfaRomeo.png',
        },
        {
            name: 'Alpha Romeo',
            image: 'image/AlfaRomeo.png',
        },
        {
            name: 'Alpha Tauri',
            image: 'image/AlphaTauri.png',
        },
        {
            name: 'Alpha Tauri',
            image: 'image/AlphaTauri.png',
        },
        {
            name: 'Alpine',
            image: 'image/Alpine.png',
        },
        {
            name: 'Alpine',
            image: 'image/Alpine.png',
        },
        {
            name: 'Aston Martin',
            image: 'image/AstonMartin.png',
        },
        {
            name: 'Aston Martin',
            image: 'image/AstonMartin.png',
        },
        {
            name: 'Ferrari',
            image: 'image/Ferrari.png',
        },
        {
            name: 'Ferrari',
            image: 'image/Ferrari.png',
        },
        {
            name: 'Haas',
            image: 'image/Haas.png',
        },
        {
            name: 'Haas',
            image: 'image/Haas.png',
        },
        {
            name: 'McLaren',
            image: 'image/McLaren.png',
        },
        {
            name: 'McLaren',
            image: 'image/McLaren.png',
        },
        {
            name: 'Mercedes',
            image: 'image/Mercedes.png',
        },
        {
            name: 'Mercedes',
            image: 'image/Mercedes.png',
        },
        {
            name: 'Red Bull',
            image: 'image/Red_Bull.png',
        },
        {
            name: 'Red Bull',
            image: 'image/Red_Bull.png',
        },
        {
            name: 'Willams',
            image: 'image/Willams.png',
        },
        {
            name: 'Willams',
            image: 'image/Willams.png',
        }
    ];




// Create Game Board

const board = document.querySelector('.gameBoard');

function createBoard() { 
    for (let i = 0; i < teamNames.length; i++) {
        var card = document.createElement('img');
        card.setAttribute('src', 'images/realLogo.png');
        card.setAttribute('date-id', i);
        board.appendChild(card);
        }
    }

    createBoard();

})    



// Shuffle
// teamNames.sort(() => 0.5 - Math.random())

// Cards Face Down

// Active Start game - Timer

// On Click -- 

// Face up and check for cardMatch
// If cardMatch is true, they will remain face up until the game is over. Player continues selection.
// If cardMatch is false, they will return to their face down postion. Player continues selection.


// Player wins if no cards are facing down; *and the timer has not reached 0* 
// Player loses if timer reaches 0.
