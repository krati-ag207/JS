var nmbrOfButtons = document.querySelectorAll(".drum").length;

for ( var i = 0; i<nmbrOfButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

function handleClick(){

    this.style.color = "white";
    
}

}









// var audio = new Audio("sounds/kick.mp3");
//     audio.play();


