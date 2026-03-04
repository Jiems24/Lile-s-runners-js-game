
class Player {
    constructor() {
        this.positionX = 200
        this.positionY = 60
        this.width = 40
        this.height = 40
    }
}

const playerRed = new Player()

const playerElement = document.querySelector(".player");

const road = document.querySelector(".road");

const trackCount = 4;
const trackIndex = 1;

function playerSecondTrack(){
const roadHeight = playerElement.clientHeight;
const playerHeight = playerElement.clientHeight;

const trackHeight = roadHeight / trackCount;

const top = trackIndex * trackHeight + (trackHeight - playerHeight) / 2;

playerElement.style.left = playerRed.positionX + "px";
playerElement.style.top = top + "px";
}

window.addEventListener("load", ()=>{
playerSecondTrack();
})
window.addEventListener("resize",()=>{
playerSecondTrack();
})


/*const obstaclesArr = []

setInterval(() => {
    obstaclesArr.forEach(() => {
        // move this obstacle

        // detect collision
        if() {
            // game over
            // player.speed  = player.speed * 0.97
        }
    })
}, 40);
*/
