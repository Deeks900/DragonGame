let score = 0;
let cross = true;

audio = new Audio('song.mp3');
audiogo = new Audio('oversound.mp3');
setTimeout(()=>{
    audio.play();
}, 1000);
document.onkeydown = (event) => {
    if (event.code === 'ArrowUp') {
        console.log("key pressed");
        pokemon = document.querySelector('.pokemon');
        pokemon.classList.add('animatePokemon');
        setTimeout(() => {
            pokemon.classList.remove('animatePokemon')
        }, 700);

    }
    if (event.code === 'ArrowRight') {
        pokemon = document.querySelector('.pokemon');
        pokemonX = parseInt(window.getComputedStyle(pokemon, null).getPropertyValue('left'));
        pokemon.style.left = pokemonX + 125 + "px";
    }

    if (event.code === 'ArrowLeft') {
        pokemon = document.querySelector('.pokemon');
        pokemonX = parseInt(window.getComputedStyle(pokemon, null).getPropertyValue('left'));
        pokemon.style.left = (pokemonX - 125) + "px";
    }
}



setInterval(() => {
    pokemon = document.querySelector('.pokemon');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');
    dx = parseInt(window.getComputedStyle(pokemon, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(pokemon, null).getPropertyValue('top'));
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    if (offsetX < 73 && offsetY < 52) {
        gameOver.innerHTML = "You Lost!-Reload To Give A Shot Again";
        obstacle.classList.remove('obstacleAni');
        cross === false;
        audiogo.play();
        setTimeout(()=>{
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if (offsetX < 145 && cross === true) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + "s";

        }, 500);

    }
}, 10);

const updateScore = (score) => {
    scoreCount.innerHTML = "Your Score: " + score;
}
