var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
    var arrayOne = [];
    var arrayRandom = [];

    for (var i = 1; i < 9; i++) {
        arrayOne.push(i);
        arrayOne.push(i);
    }

//    console.log(arrayOne);

    while (arrayOne.length !== 0) {
        var randomIndex = Math.floor(Math.random() * (arrayOne.length));
        var randomNumber = arrayOne[randomIndex];
        arrayRandom.push(randomNumber);
        var arrayOneRemoved = arrayOne.splice(randomIndex, 1);
        arrayOne.push(arrayOneRemoved);
        arrayOne.length--;
        return true;
    }

//    console.log();
//    console.log(arrayRandom);
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function (cardValues, $game) {

};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function ($card, $game) {

};
