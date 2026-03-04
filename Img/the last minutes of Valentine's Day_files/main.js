
class Player {
    constructor() {
        this.positionX = 80
        this.positionY = 60
        this.width = 40
        this.height = 40
    }
}

const playerRed = new Player()

const playerElement = document.querySelector(".player");
const road = document.querySelector(".road");

const trackCount = 4;
let trackIndex = 1;

function getLaneTop(laneIndex, elementHeight) {
    const roadHeight = road.clientHeight;
    const trackHeight = roadHeight / trackCount;
    return laneIndex * trackHeight + (trackHeight - elementHeight) / 2;
}

function playerSecondTrack() {
    const top = getLaneTop(trackIndex, playerElement.clientHeight);

    playerElement.style.left = playerRed.positionX + "px";
    playerElement.style.top = top + "px";

    playerRed.positionY = top;
}

function changeTrack(event) {
    if (event.code === "ArrowUp") {
        if (trackIndex > 0) {
            trackIndex--;
            playerSecondTrack()
        }
    }

    if (event.code === "ArrowDown") {
        if (trackIndex < trackCount - 1) {
            trackIndex++;
            playerSecondTrack();
        }
    }
}

const cars = [];
const carTravelTime = 5000;
let spawnIntervalId = null;
let gameLoopId = null;
let isGameOver = false;

class Car {
    constructor(laneIndex) {
        this.laneIndex = laneIndex;
        this.element = document.createElement("img");
        this.element.classList.add("car");
        this.element.src = "./Img/coche.gif";
        this.element.alt = "car";

        this.element.style.position = "absolute";
        this.element.style.width = "10vw"
        this.element.style.height = "auto";

        road.appendChild(this.element);

        const carHeight = this.element.clientHeight || 60;
        const top = getLaneTop(this.laneIndex, carHeight);
        this.element.style.top = top + "px"

        this.startX = road.clientWidth + 20;
        this.width = this.element.clientWidth || 90;
        this.endX = -this.width - 20;

        this.element.style.left = this.startX + "px";

        this.startTime = Date.now();

        this.removed = false;
    }


update(now) {
    if (this.removed) {

    } else {
        const timePassed = now - this.startTime;
        const progress = timePassed / carTravelTime;

        const currentX = this.startX + (this.endX - this.startX) * progress;
        this.element.style.left = currentX + "px";

        if (progress >= 1) {
            this.remove();
        }
    }
}

remove() {
    if (this.removed) {

    } else {
        this.removed = true;
        this.element.remove();
    }
}
}

function spawnCar(){
    if (isGameOver) return;

    const laneIndex = getRandomTrackIndex();
    const newCar = new carTravelTime(laneIndex);
    cars.push(newCar);
}


document.addEventListener("DOMContentLoaded", () => {
    playerSecondTrack();

    document.addEventListener("keydown", changeTrack);

    const roadSize = new ResizeObserver(() => {
        playerSecondTrack();
    });
    roadSize.observe(road);
});