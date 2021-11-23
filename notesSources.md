This will be a memory game for solo play only. 
Basic layout will be 20 cards on a game board, 10 sets of 2 of the same cards; in a 4 column x 5 row style.
Create array to store name and image of card; 
The cards will have images on both the front (specificTeam) and back (genericBack).
Game starts when user clicks on start button; timer starts
When User clicks on card, it will flip over. User will then click another card causing it to flip over.
Both cards will be asked if they are === 
If yes, both cards will be pushed into newArray, and card img (genericFront) will be shown, player makes new choice
If not equal, both cards will flip back to normal position, player makes new choice
Check if win/loss conditions are met; if niether, repeat line 5
User Wins if newArray === 20
User Loses if timer reaches 0




Define required constants
    current.Selection Object  
        will have 2 blank arrays
        which stores data on user.Click 
    face.Up Object
        will store already matched cards
        will be used to determine if game has been won yet
    cards. Object
        will store image of teamName
        all will start face.Down
    Win Condition
        if all cards are faced up; and timer does not equal 0
    Lose Condition
        if timer reaches 0

Define required variables to track the state of the game
    Keep track of current.Selection
        if both arrays in current.Selection are equal
            then keep both cards and send to face.Up
            else; return to face.Down position
    Loop
        check if all cards are faced up
        if not, continue to next player selection

When card is clicked
    An add event listener that stores input to current.Selection
       
        


