alert("Keep your pokemon alive when your train level reaches 100 you can evolve")


// use const and let instead of var...
const feeding = document.querySelector("#feed");
const sleeping = document.querySelector("#sleep");
const training = document.querySelector("#train");
let hungryScore = 100;
let tiredScore = 100;
let trainScore = 50;

// document.getElementById("ShowHunger").innertext = "Paragraph changed!";
const hungerLbl = document.querySelector("#showHunger")
const tiredLbl = document.querySelector("#showTired")
const trainLbl = document.querySelector("#showTrain")

hungerLbl.innerHTML = hungryScore;
tiredLbl.innerHTML = tiredScore;
trainLbl.innerHTML = trainScore;

/*
 function Scores(){
    while (hungryScore && tiredScore > 0){
    hungryScore = hungryScore - 1;
    tiredScore = tiredScore - 1;
    
    //console.log(hungryScore)
    console.log(tiredScore)
 
    // When the page runs the hungryscore & 
    // tiredscore should decrement it seems to 
    // automatically jump to 0 when it should go over time
    
  }
}

window.onload = Scores();// with this it automatically shows the decremented ending value, without it shows my starting value doesnt decremtn over time
*/

let counter = window.setInterval(scores, 1000);
function scores() {

  if (hungryScore && tiredScore > 0) {
    hungryScore = hungryScore - 5;
    tiredScore = tiredScore - 5;
    trainScore = trainScore - 5;

    //console.log(hungryScore)
    console.log(tiredScore);
    
    hungerLbl.innerHTML = "Eat Meter: " + hungryScore;
tiredLbl.innerHTML = "Rest Meter: "+tiredScore;
trainLbl.innerHTML = "Train Meter: "+trainScore;

  }
  else if((hungryScore ==0 || hungryScore < 0)|| (tiredScore == 0 || tiredScore <0)){
    clearInterval(counter)
    alert("You have neglected your pokemon shame on you.Press esc and then refresh page to bring them back to life");
    
  }
}

//functions that decrement or increment on button press

feeding.addEventListener("click", e => {
  var image = document.querySelector("#pic").src="https://cdn.glitch.com/051540a4-9ba5-4a90-8cd7-2cd0fff78b59%2Fpickachueat.gif?v=1589439582428"
  hungryScore = hungryScore + 3;
  if (hungryScore == 65) {
    console.log("im full");
  }
  console.log(hungryScore);
});

sleeping.addEventListener("click", e => {
    var image = document.querySelector("#pic").src="https://cdn.glitch.com/051540a4-9ba5-4a90-8cd7-2cd0fff78b59%2Fpickachusleep.gif?v=1589439593470"

  tiredScore = tiredScore + 3;
  if (tiredScore == 50) {
    console.log("im tired");
  }
  console.log(tiredScore);
});

training.addEventListener("click", e => {
  trainScore = trainScore + 10;
  
  var image = document.querySelector("#pic").src="https://cdn.glitch.com/051540a4-9ba5-4a90-8cd7-2cd0fff78b59%2Fpickahutrain.gif?v=1589439728662"
  if (trainScore > 100) {
     alert("Your pokemon can now evolve")
    
    
      var image = document.querySelector("#pic").src="https://cdn.glitch.com/051540a4-9ba5-4a90-8cd7-2cd0fff78b59%2Fraichugif.gif?v=1589439571205" 
    
    
//       if(image.src.match("https://cdn.glitch.com/d58fd386-4a90-49df-a729-2a5a55d1d26a%2Fpika.jpeg?v=1588528259661")){
//         image = "https://cdn.glitch.com/051540a4-9ba5-4a90-8cd7-2cd0fff78b59%2Fraichu-facts-pokemon.jpg?v=1589428795016";

//       }
   
      
    
  }
  console.log(trainScore);
});
