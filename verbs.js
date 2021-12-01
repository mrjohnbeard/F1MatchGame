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
    const board = document.querySelector('.gameBoard');

    let isRunning = false;
    let time = 60;
    let currentChoice = [];
    let currentChoiceId = [];
    let foundCards = [];
    let pairsTotal = 10;

    teamNames.sort(() => 0.5 - Math.random())

    function startTimer() {
        const countdownEl = document.getElementById('countdown');

        setInterval(updateCountdown, 1000);

        function updateCountdown() {
            if (isRunning) {
                const minutes = Math.floor(time / 60);
                let seconds = time % 60;
                seconds = seconds < 10 ? '0' + seconds : seconds;
                countdownEl.innerHTML = `${minutes}:${seconds}`;
                time--;
                if (time <= 0) {
                    countdownEl.innerHTML = "TIME IS OUT, YOU LOSE. PLEASE RESTART THE RACE."
                    clearInterval;
                    isRunning = false;
                }
            } else {
            }
        }
    }

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
        if (currentChoice.length != 2 && isRunning) {
            const cardId = this.getAttribute('data-id');
            if (this.getAttribute('src') != 'images/fakeLogo.png') {
                currentChoice.push(teamNames[cardId].name);
                currentChoiceId.push(cardId);
                this.setAttribute('src', teamNames[cardId].image);
                if (currentChoice.length == 2) {
                    setTimeout(checkMatch, 1000);
                }
            }
        }
    }

    function checkMatch() {
        const cards = document.querySelectorAll('img');
        const firstChoice = currentChoiceId[0];
        const secondChoice = currentChoiceId[1];
        const winnerEl = document.getElementById('winner');
        if (currentChoice[0] == currentChoice[1]) {
            foundCards++;
            cards[firstChoice].setAttribute('src', 'images/fakeLogo.png');
            cards[secondChoice].setAttribute('src', 'images/fakeLogo.png');
        } else {
            cards[firstChoice].setAttribute('src', 'images/realLogo.png');
            cards[secondChoice].setAttribute('src', 'images/realLogo.png');
        }

        currentChoice = [];
        currentChoiceId = [];
        if (foundCards == pairsTotal) {
            isRunning = false;
            winnerEl.innerHTML = "YOU WON! Click Restart to play again!"
        }
    }

    function resetTimer() {
        const countdownEl = document.getElementById('countdown');
        const winnerEl = document.getElementById('winner');
        countdownEl.innerHTML = "1:00";
        winnerEl.innerHTML = ""

    }
    function cleanBoard() {
        let card = document.querySelectorAll('img');
        for (let i = 0; i < card.length; i++) {
            card[i].setAttribute('src', 'images/realLogo.png');
        }
    }

    document.getElementById("startB").addEventListener("click", function () {
        if (isRunning) {
        } else {
            time = 60;
            startTimer();
            isRunning = true;
        }
    });

    document.getElementById("restartB").addEventListener("click", function () {
        resetTimer();
        isRunning = false;
        cleanBoard();


    });
    createBoard();
})
