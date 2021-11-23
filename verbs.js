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
teamNames.sort(() => 0.5 - Math.random())
const board = document.querySelector('.gameBoard');

var currentChoice = [];
var currentChoiceId = [];

function createBoard() { 
    for (let i = 0; i < teamNames.length; i++) {
        var card = document.createElement('img');
        card.setAttribute('src', 'images/realLogo.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flippedCard);
        board.appendChild(card);
        }
    }

function flippedCard(){
    var cardId = this.getAttribute('data-id');
    if (this.getAttribute('src') != 'images/fakeLogo.png'){
        currentChoice.push(teamNames[cardId].name);
        currentChoiceId.push(cardId);
        this.setAttribute('src', teamNames[cardId].image);
        }
    }

    createBoard();

})    

// Active Start game - Timer

// If cardMatch is true, they will remain face up until the game is over. Player continues selection.
// If cardMatch is false, they will return to their face down postion. Player continues selection.


// Player wins if no cards are facing down; *and the timer has not reached 0* 
// Player loses if timer reaches 0.
