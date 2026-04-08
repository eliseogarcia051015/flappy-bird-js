var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");

var jumping = 0;
var counter = 0;

hole.addEventListener('animationiteration', () => {
    var random = Math.floor(Math.random() * 3);
    var top = (random * 100) + 100;
    hole.style.top = -(top) + "px";
    counter++;
});

function resetGame(){
    counter = 0;
    character.style.top = "75px";

    block.style.animation = "none";
    hole.style.animation = "none";

    block.style.left = "400px";
    hole.style.left = "400px";

    /* force reflow (restart animation) */
    block.offsetHeight;

    block.style.animation = "block 2s infinite linear";
    hole.style.animation = "block 2s infinite linear";
}

setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if (jumping == 0){
        character.style.top = (characterTop + 3.25) + "px";
    }
    if(characterTop < 0){
        character.style.top = "0px";
    }
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop = -(500 - characterTop);
    if (
        characterTop > 480 ||
        (
            blockLeft < 70 &&
            blockLeft > 20 &&
            (cTop < holeTop || cTop > holeTop + 130)
        )
    ){
        alert("Game over. Score: " + counter);
        resetGame();
    }
}, 10);

function jump (){
    jumping = 1;
    let jumpCount = 0; 
    var jumpInterval = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));

        if(characterTop > 0){
            character.style.top = (characterTop - 4) + "px";
        }

        if(jumpCount > 20){
            clearInterval(jumpInterval);
            jumping = 0;
        }
        jumpCount++; 
    }, 10);
}