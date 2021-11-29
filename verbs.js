document.addEventListener('DOMContentLoaded', () => {

    const teamNames = [

        {
            name: 'Alpha Romeo',
            image: 'images/AlfaRomeo.png',
        },
        {
            name: 'Alpha Romeo',
            image: 'images/AlfaRomeo.png',
        },
        {
            name: 'Alpha Tauri',
            image: 'images/AlphaTauri.png',
        },
        {
            name: 'Alpha Tauri',
            image: 'images/AlphaTauri.png',
        },
        {
            name: 'Alpine',
            image: 'images/Alpine.png',
        },
        {
            name: 'Alpine',
            image: 'images/Alpine.png',
        },
        {
            name: 'Aston Martin',
            image: 'images/AstonMartin.png',
        },
        {
            name: 'Aston Martin',
            image: 'images/AstonMartin.png',
        },
        {
            name: 'Ferrari',
            image: 'images/Ferrari.png',
        },
        {
            name: 'Ferrari',
            image: 'images/Ferrari.png',
        },
        {
            name: 'Haas',
            image: 'images/Haas.png',
        },
        {
            name: 'Haas',
            image: 'images/Haas.png',
        },
        {
            name: 'McLaren',
            image: 'images/McLaren.png',
        },
        {
            name: 'McLaren',
            image: 'images/McLaren.png',
        },
        {
            name: 'Mercedes',
            image: 'images/Mercedes.png',
        },
        {
            name: 'Mercedes',
            image: 'images/Mercedes.png',
        },
        {
            name: 'Red Bull',
            image: 'images/Red_Bull.png',
        },
        {
            name: 'Red Bull',
            image: 'images/Red_Bull.png',
        },
        {
            name: 'Willams',
            image: 'images/Williams.png',
        },
        {
            name: 'Willams',
            image: 'images/Williams.png',
        }
    ];
    teamNames.sort(() => 0.5 - Math.random())
    const board = document.querySelector('.gameBoard');

    let currentChoice = [];
    let currentChoiceId = [];

    function createBoard() {
        for (let i = 0; i < teamNames.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'images/realLogo.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flippedCard);
            board.appendChild(card);
        }
    }

    function flippedCard() {
        const cardId = this.getAttribute('data-id');
        if (this.getAttribute('src') != 'images/fakeLogo.png') {
            currentChoice.push(teamNames[cardId].name);
            currentChoiceId.push(cardId);
            this.setAttribute('src', teamNames[cardId].image);
                if(currentChoice.length == 2) {
                    setTimeout(checkMatch, 1000);
                }

        }
    }

    function checkMatch(){
        const cards = document.querySelectorAll('img');
        const firstChoice = currentChoiceId[0];
        const secondChoice = currentChoiceId[1];
            if(currentChoice[0] == currentChoice[1]){
                cards [firstChoice].setAttribute('src', 'images/fakeLogo.png');
                cards [secondChoice].setAttribute('src', 'images/fakeLogo.png');
            } else{
                cards [firstChoice].setAttribute('src', 'images/realLogo.png');
                cards [secondChoice].setAttribute('src', 'images/realLogo.png');
            }
            
            currentChoice = [];
            currentChoiceId = [];
    }

    createBoard();

})

// Active Start game - Timer

// If cardMatch is true, they will remain face up until the game is over. Player continues selection.
// If cardMatch is false, they will return to their face down postion. Player continues selection.


// Player wins if no cards are facing down; *and the timer has not reached 0* 
// Player loses if timer reaches 0.
