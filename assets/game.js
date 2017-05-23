//Initialize variabls//

var target = Math.floor(Math.random() * 40);
var wins = 0;
var losses = 0;
var score = 0;
var blueValue = Math.floor(Math.random() * 10);
var redValue = Math.floor(Math.random() * 10);
var greenValue = Math.floor(Math.random() * 10);
var yellowValue = Math.floor(Math.random() * 10);

//JQuery on-click events for the crystal buttons//

$(document).ready(function() {

	$("#blue").on("click", function() {
		score = score + blueValue;
		$('.crystal-score').html(blueValue);
		$('.score').html(score);
	});

	$("#red").on("click", function() {
		score = score + redValue;
		$('.crystal-score').html(redValue);
		$('.score').html(score);
	});

	$("#green").on("click", function() {
		score = score + greenValue;
		$('.crystal-score').html(greenValue);
		$('.score').html(score);
	});

	$("#yellow").on("click", function() {
		score = score + yellowValue;
		$('.crystal-score').html(yellowValue);
		$('.score').html(score);
	});

	//If-else-if statement for win/loss conditions//

	if (score === target) {
		wins++;
		$('.wins').html(wins);
		var target = Math.floor(Math.random() * 40);
		var blueValue = Math.floor(Math.random() * 10);
		var redValue = Math.floor(Math.random() * 10);
		var greenValue = Math.floor(Math.random() * 10);
		var yellowValue = Math.floor(Math.random() * 10);
	} else if (score > target) {
		losses++;
		$('.losses').html(losses);
		var target = Math.floor(Math.random() * 40);
		var blueValue = Math.floor(Math.random() * 10);
		var redValue = Math.floor(Math.random() * 10);
		var greenValue = Math.floor(Math.random() * 10);
		var yellowValue = Math.floor(Math.random() * 10);
	}
});