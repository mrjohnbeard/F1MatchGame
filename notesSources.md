Overall Status of Game

isRunning - true or false state of the game; starting point
time - timer used for win/loss logic; loss if reaches 0 
teamNames - card information
foundCards - used to store info for win condition, compared with pairsTotal
pairsTotal - counter used for win/loss logic;

Selections
currentChoice - current card clicked
currentChoiceId - ID used to check if cards match


Functions

startTimer - starts the time
updateCountdown - intervals for the time
createBoard - creates the cards, based on # of teamNames
flippedCard - when card is CLICKED, IMG is shown and stored
checkMatch - checks IDs for match, adds foundCard if yes, returns cards id no; check if win condition is met; continue flipping
resetTimer - resets time back to baseline
cleanBoard - replaces all IDs IMGs back to baseline

Buttons

startB - starts time, isRunning becomes true, cards can be flipped; game starts
restartB - resets time, isRunning becomes false, cleans board for new game


Wire Frame 

Title of Game
Timer
Game Area
Buttons