var numDrumBtns = document.querySelectorAll(".drum").length;

for (i = 0; i < numDrumBtns; i = i + 1)
document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonLetter = this.innerHTML;

    makeSound(buttonLetter);
    buttonAnimation(buttonLetter);

    
});

document.addEventListener('keydown', function(event){

    makeSound(event.key);
    buttonAnimation(event.key);

});

function makeSound(key){

    switch (key) {
        case "w":
            var crash = new Audio("crash.mp3");
            crash.play();
            break;

        case "a": 
            var bass = new Audio("kick-bass.mp3");
            bass.play();
            break; 
        
        case "s":
            var snare = new Audio("snare.mp3");
            snare.play();
            break;

        case "d":
            var tom1 = new Audio("tom-1.mp3");
            tom1.play();                
            break;

        case "j":
            var tom2 = new Audio("tom-2.mp3");
            tom2.play();
            break;

        case "k":
            var tom3 = new Audio("tom-3.mp3");
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio("tom-4.mp3");
            tom4.play();
            break;

        default:
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    },100);
}