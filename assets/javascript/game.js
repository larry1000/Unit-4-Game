var numberOptions = [1,2,3,4,5,6,7,8,9,10,11,12];
var counter = 0;
var wins = 0;
var lost = 0;
var goal =0;

function goalNumber() {
      goal = Math.floor((Math.random() * 100) + 1);
    var num = parseInt($(".goal").text());
    $(".goal").text(goal);
}


var blueNumber =
  numberOptions[Math.floor(Math.random() * numberOptions.length)];
var greenNumber =
    numberOptions[Math.floor(Math.random() * numberOptions.length)];
var redNumber =
    numberOptions[Math.floor(Math.random() * numberOptions.length)];
var yellowNumber =
    numberOptions[Math.floor(Math.random() * numberOptions.length)];

for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");
imageCrystal.attr("data-crystalvalue", numberOptions[i]);
}

$("#blue-crystal").on("click", function () {


    var num = parseInt($('.score').text());
    $('.score').text(blueNumber);


    
    console.log(blueNumber);
  
});
$("#green-crystal").on("click", function () {

    var num = parseInt($('.score').text());
    $('.score').text(greenNumber);

    console.log(greenNumber);

});
$("#red-crystal").on("click", function () {

    var num = parseInt($('.score').text());
    $('.score').text(redNumber);


    console.log(redNumber);

});
$("#yellow-crystal").on("click", function () {

    var num = parseInt($('.score').text());
    $('.score').text(yellowNumber);

    console.log(yellowNumber);

});
$(".crystal").on("click", function () {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr(".score"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    // alert("New score: " + counter);

    // if (counter === targetNumber) {
    //     alert("You win!");
    // }

    // else if (counter >= targetNumber) {
    //     alert("You lose!!");
    // }

});


// $(".crystal").on("click", function() {

//     goal = redNumber + blueNumber;
//   var num = parseInt($(".score").text());
//   $(".score").text(goal);

//   console.log(goal);
// });

// function adding () {
//     counter = blueNumber + greenNumber;
//     $('.score').text("Total: " + counter);
// };

// $('.score').text(counter);

