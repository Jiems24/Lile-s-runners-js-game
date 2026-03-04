##Restos de código reuitilizable
#HTML
 <div class="lane"></div>
            
            <div class="lane">
                <div class="player"></div>
            </div>
            <div class="lane"></div>
    
            <div class="lane"></div>



#CSS
.public{
position: absolute;
height: 20vh;
}

.track{
position: absolute;
height: 50vh;
display: flex;
flex-direction: column;
}

.lane{
margin: 3px;
height: 15vh;
position: relative;
}




#JS       

        //PARA EL SALTO
        this.isJumping = false;
        this.jumpheight = 80;
        this.jumpspeed = 4;
        this.groundY = 20;

******************
        const gameBackground = document.querySelector(".gamebackground");

*********************
renderPlayer();

*********************
function jump() {

    if (playerRed.isJumping) {
        return;
    }

**********************
let introStarted = false;

function startIntroScroll() {
    if (introStarted) {
        return introStarted = true;
    }
    gameBackground.classList.add("hideNumbers");

}
startIntroScroll();


*****************************
 playerRed.isJumping = true

    const runPosition = playerRed.positionY;
    const jumpPosition = runPosition + playerRed.jumpheight;

    const upInterval = setInterval(() => {
        playerRed.positionY += playerRed.jumpspeed;

        if (playerRed.positionY >= jumpPosition) {
            playerRed.jumpspeed *= -1  // change speed direction
        } else if (playerRed.positionY <= runPosition) {
            clearInterval(upInterval);
            playerRed.isJumping = false
            playerRed.jumpspeed *= -1 // change speed direction
        }

        renderPlayer();
    }, 16);

    ***********************

document.addEventListener("keyup", (e) => {
    console.log(e.code)
    if (e.code === "ArrowUp") {

        jump();
    }
});
