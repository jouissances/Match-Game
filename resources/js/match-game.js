var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

$(document).ready(function() {
    MatchGame.renderCards(cardValues, $('#game'))
});

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
    var arrayOne = [];
    var cardValues = [];

    for (var i = 1; i < 9; i++) {
        arrayOne.push(i);
        arrayOne.push(i);
    }

    //    console.log(arrayOne);

    while (arrayOne.length !== 0) {
        var randomIndex = Math.floor(Math.random() * (arrayOne.length));
        var randomNumber = arrayOne[randomIndex];
        cardValues.push(randomNumber);
        var arrayOneRemoved = arrayOne.splice(randomIndex, 1);
        arrayOne.push(arrayOneRemoved);
        arrayOne.length--;
        return cardValues;
    }

    //    console.log();
    //    console.log(cardValues);
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function (cardValues, $game {
        var cardColors = ['hsl(25%, 85%, 65%)', 'hsl(55%, 85%, 65%)', 'hsl(90%, 85%, 65%)', 'hsl(160%, 85%, 65%)', 'hsl(220%, 85%, 65%)', 'hsl(265%, 85%, 65%)', 'hsl(310%, 85%, 65%)', 'hsl(360%, 85%, 65%)'];
        var game = $('#game');
        
        $game.empty();
        
        var card = $('cardValues[i]');
        $('#card').each(cardValues, function(i, cardValues[i]) {
            '<div class="col-md-3" id="card">' + card '</div>'
            }); 
        $('#card').data('card', card);
        $('#card').data('flipped', false);
        $('#card').data('color', cardColors[card-1]);
        
        $('#game').append(card);
        };

        /*
          Flips over a given card and checks to see if two cards are flipped over.
          Updates styles on flipped cards depending whether they are a match or not.
         */

        MatchGame.flipCard = function ($card, $game) {
            
        };
