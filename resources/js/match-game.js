var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

$(document).ready(function() {
    MatchGame.renderCards(MatchGame.generateCardValues(), $('#game'));
});

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function() {
  let numbers = [];
  let random = [];
    for (let i = 1; i < 9; i++) {
      numbers.push(i, i);
    }
    
    while (numbers.length > 0) {
      let index = Math.floor(Math.random() * numbers.length);
      random.push(numbers[index]);
      numbers.splice(index, 1);
    }
  return random;
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {
    $game.data('flippedCard', []);
// 	  $game.data('gameFlippedCard', []);

	let cardColors = [
		'hsl(25,85%,65%)', 'hsl(55,85%,65%)', 'hsl(90,85%,65%)', 
        'hsl(160,85%,65%)', 'hsl(220,85%,65%)', 'hsl(265,85%,65%)', 
        'hsl(310,85%,65%)', 'hsl(360,85%,65%)', 'hsl(25,45%,65%)',
        'hsl(55,45%,65%)', 'hsl(90,45%,65%)', 'hsl(160,45%,65%)',
		'hsl(220,45%,65%)', 'hsl(265,45%,65%)', 'hsl(310,45%,65%)', 
        'hsl(360,45%,65%)', 'hsl(25,85%,35%)', 'hsl(55,85%,35%)'
	];

	$game.html('');
  
  for (let j = 0; j < cardValues.length; j++) {
    let $card = $('<div class="col-lg-3 col-md-3 col-sm-3 card"></div>');
      $card.data('value', cardValues[j]);
      $card.data('flipped', false);
      $card.data('color', cardColors[cardValues[j]-1]);
      $game.append($card);
      $card.click(function() {
			MatchGame.flipCard($(this), $game);
      });
  }
  
};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {
  let $flippedCard = $game.data('flippedCard');
    if ($card.data('flipped') === true ) {
      return;
    } else {
      $card.css('background-color', $card.data('color'));
      $card.append($card.data('value'));
      $card.data('flipped',true);
      $flippedCard.push($card);
    }
  
  
	if ($flippedCard.length === 2) {
		if ( $flippedCard[0].data('value') === $flippedCard[1].data('value')) {
			$flippedCard[0].css('background-color', 'rgb(153,153,153)').css('color', 'rgb(204,204,204)');
			$flippedCard[1].css('background-color', 'rgb(153,153,153)').css('color', 'rgb(204,204,204)');
			$flippedCard.length = 0;
		} else {
      setTimeout(function() {
				$flippedCard[0].html('').css('background-color', 'rgb(32,64,86)').data('flipped', false);
				$flippedCard[1].html('').css('background-color', 'rgb(32,64,86)').data('flipped', false);
				$flippedCard.length = 0;
			}, 500);
		}
	} else return;
};