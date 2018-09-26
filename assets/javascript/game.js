
// DATA
var numberOptions = [1,2,3,4,5,6,7,8,9,10,11,12];
var counter = 0;
var wins = 0;
var lost = 0;
var goal = 0;
var blueNumber=0;
var greenNumber = 0;
var redNumber = 0;
var yellowNumber = 0;





// FUNCTIONS

function goalNumber() {
      goal = Math.floor((Math.random() * 100) + 1);
      console.log("CURRENT GOAL: ", goal)
   
    $(".goal").text(goal);
}





function startGame(){
    goalNumber();
    counter=0;
    $(".score").text(counter);


     blueNumber =
        numberOptions[Math.floor(Math.random() * numberOptions.length)];
    greenNumber =
        numberOptions[Math.floor(Math.random() * numberOptions.length)];
     redNumber =
        numberOptions[Math.floor(Math.random() * numberOptions.length)];
     yellowNumber =
        numberOptions[Math.floor(Math.random() * numberOptions.length)];

    console.log("RANDOM BLUE: ", blueNumber);
    console.log("RANDOM RED: ", redNumber);
    console.log("RANDOM GREEN: ", greenNumber);
    console.log("RANDOM YELLOW: ", yellowNumber);


}

function checkWin(){
   if (counter === goal){
       wins ++
       $('#wins').text(wins);
       $('#youwin').show();
       $("#youlost").hide();
       startGame()
   }else if(counter > goal){
       lost++
       $('#lost').text(lost);
       $('#youlost').show();
       $("#youwin").hide();
       startGame();
   }
   console.log("WINS & LOSSES: ", wins, lost)


}

function score(){

}







// GAME LOGIC
startGame();


$('.crystal').on('click', function(e){
    
    var thisId = e.target.id;
    if(thisId ==="blue-crystal"){
        counter += blueNumber;
    }else if(thisId ==="red-crystal"){
        counter += redNumber;
    }else if (thisId === "green-crystal") {
        counter += greenNumber;
    }else if (thisId === "yellow-crystal") {
        counter += yellowNumber;
    }else{
        console.log("Wrong")
    }
    $('.score').text(counter);

    checkWin();


})

   


    

