// document.querySelectAll("button").addEventListener("click", buttonEvent);
var buttonArray = document.querySelectorAll(".drum");
var buttonArrayLength = buttonArray.length


for (var i=0; i<buttonArrayLength; i++) {
  buttonArray[i].addEventListener("click", function() {
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
  })
}

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
})

function makeSound(key) {
  switch (key) {
    case "w":
     var crash = new Audio("./crash.mp3");
     crash.play();
     break;
    case "a":
     var kickBass = new Audio('./kick-bass.mp3');
     kickBass.play();
     break;
    case "s":
     var snare = new Audio("./sounds/snare.mp3");
     snare.play();
     break;
//     case "d":
//      var tom1 = new Audio("/sounds/tom-1.mp3");
//      tom1.play();
//      break;
//     case "j":
//      var tom2 = new Audio("/sounds/tom-2.mp3");
//      tom2.play();
//      break;
//     case "k":
//      var tom3 = new Audio("/sounds/tom-3.mp3");
//      tom3.play();
//      break;
//     case "l":
//      var tom4 = new Audio("/sounds/tom-4.mp3");
//      tom4.play();
//      break;
    default: console.log(key)
  }
}
