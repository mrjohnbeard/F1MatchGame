// This will be a memory game for solo play only. 
// Basic layout will be 20 cards on a game board, 10 sets of 2 of the same cards; in a 4 column x 5 row style.
// The cards will have images on both the front (specific Team) and back (generic).

const teamNames = [
    
    // teamName

    {
        name: 'Alpha Romeo',
        img: 'image/.png',
    },
    {
        name: 'Alpha Romeo',
        img: 'image/.png',
    },
    {
        name: 'Alpha Tauri',
        img: 'image/.png',
    },
    {
        name: 'Alpha Tauri',
        img: 'image/.png',
    },
    {
        name: 'Alpine',
        img: 'image/.png',
    },
    {
        name: 'Alpine',
        img: 'image/.png',
    },
    {
        name: 'Aston Martin',
        img: 'image/.png',
    },
    {
        name: 'Aston Martin',
        img: 'image/.png',
    },
    {
        name: 'Ferrari',
        img: 'image/.png',
    },
    {
        name: 'Ferrari',
        img: 'image/.png',
    },
    {
        name: 'Haas',
        img: 'image/.png',
    },
    {
        name: 'Haas',
        img: 'image/.png',
    },
    {
        name: 'McLaren',
        img: 'image/.png',
    },
    {
        name: 'McLaren',
        img: 'image/.png',
    },
    {
        name: 'Mercedes',
        img: 'image/.png',
    },
    {
        name: 'Mercedes',
        img: 'image/.png',
    },
    {
        name: 'Red Bull',
        img: 'image/.png',
    },
    {
        name: 'Red Bull',
        img: 'image/.png',
    },
    {
        name: 'Willams',
        img: 'image/.png',
    },
    {
        name: 'image/.png',
        img: 'Willams',
    },   
]

// Create Game Board
function createBoard() 
    for (let i = 0; i < teamNames.length; i++);


// Shuffle
teamNames.sort(() => 0.25 - Math.random())

// Cards Face Down

// Active Start game - Timer

// On Click -- 

// Face up and check for cardMatch
// If cardMatch is true, they will remain face up until the game is over. Player continues selection.
// If cardMatch is false, they will return to their face down postion. Player continues selection.


// Player wins if no cards are facing down; *and the timer has not reached 0* 
// Player loses if timer reaches 0.
