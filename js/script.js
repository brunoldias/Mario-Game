
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const pipe2 = document.querySelector('.pipe-2');
const time = document.querySelector('.time');

const jumpSound = ()=> {
    const music = new Audio('./audio/jump.mp3');
    music.volume = 1;   
    music.play();
}

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        mario.classList.add('jump');
        jumpSound();

        setTimeout(() =>{
            mario.classList.remove('jump');
            
        }, 500);
    }
  });

  const gameOver =() =>
  {
      const music = new Audio('./audio/smb_gameover.wav');
      music.volume = 1;   
      music.play();
  }

let counter = 0;
const loop = setInterval((e) => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    time.innerHTML = 'Score: ' + counter++;
       
    if(pipePosition <= 90 && pipePosition > 0 && marioPosition < 60) {
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;
    mario.src = './img/mario-loser.png';
    mario.style.width = '80px';
    mario.style.marginLeft = '35px';  
    gameOver();
    stop(); 
    setInterval(()=> window.location.reload(), 6000 );  
    }

}, 10);


const stop = () =>
{
    clearInterval(loop); 
}

start();

function start() {
    document.getElementById('game').style.display = 'none';
};


const element = document.getElementById("btn");
element.addEventListener('click', function() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('game').style.display = '';
});
