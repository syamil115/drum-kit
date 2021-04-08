for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var drum = this.innerHTML;

    makeSound(drum);
    buttonAnimation(drum);


  });
}


document.addEventListener("keydown", function(event) {
    var drum = event.key;

    if (drum === "w" || drum === "a" || drum === "s" || drum === "d" || drum === "j" || drum === "k" || drum === "l" ) {
      makeSound(drum);
      buttonAnimation(drum);
    } else
    return;

});

function makeSound (drum) {
  switch (drum) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    default:
      console.log("NaN");

  }
}

function buttonAnimation (syamil) {
     document.querySelector("." + syamil).classList.add("pressed");
     setTimeout(function () {
        document.querySelector("." + syamil).classList.remove("pressed");
     }, 200);
}
