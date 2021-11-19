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
       
        


