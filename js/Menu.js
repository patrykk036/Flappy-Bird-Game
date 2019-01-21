const menuBoardImage = new Image();
const menuPlayImage = new Image();
const menuInfoImage = new Image();
const restartGameImage = new Image();
const endBoardImage = new Image();
const acceptImage = new Image();

menuBoardImage.addEventListener('load', function(){
    ctx.drawImage(menuBoardImage, 30, 30, 40, 40);
});
menuBoardImage.src = 'assets/board.png';

menuPlayImage.addEventListener('load', function(){
    ctx.drawImage(menuPlayImage, 30, 30, 40, 40);
});
menuPlayImage.src = 'assets/play.png';

menuInfoImage.addEventListener('load', function(){
    ctx.drawImage(menuInfoImage, 30, 30, 40, 40);
});
menuInfoImage.src = 'assets/info.png';

restartGameImage.addEventListener('load', function(){
    ctx.drawImage(restartGameImage, 30, 30, 40, 40);
});
restartGameImage.src = 'assets/restart.png';

endBoardImage.addEventListener('load', function(){
    ctx.drawImage(endBoardImage, 30, 30, 40, 40);
});
endBoardImage.src = 'assets/endboard.png';

acceptImage.addEventListener('load', function(){
    ctx.drawImage(acceptImage, 30, 30, 40, 40);
});
acceptImage.src = 'assets/accept.png';

function Menu(){
    this.boardX = 350;
    this.boardY = 200;
    this.boardWidth = 300;
    this.boardHeight = 200;

    this.buttonsSize = 75;
    this.buttonsY = 240;

    this.playX = 400;
    this.infoX = 525;

    this.drawBest = function(){
        ctx.font="25px Comic Sans MS";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Personal best: " + game.bestScore, 490, 350);
    };
    
    this.drawCurrentScore = function(){
        ctx.font="25px Comic Sans MS";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText(game.gifts, 90, 60);
        ctx.fillText(game.walls, 90, 120);
    };

    this.drawEnd = function(){
        if(game.status === "end"){
            ctx.font="25px Comic Sans MS";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.drawImage(endBoardImage, 340, 125, 320, 350);
            ctx.drawImage(giftImage, 430, 190, 40, 40);
            ctx.fillText(game.gifts, 450, 260);
            ctx.drawImage(brickImage, 510, 190, 42, 42);
            ctx.fillText(game.walls, 530, 260);
            ctx.fillText("Overall score: " + game.score, 490, 310);
            ctx.drawImage(restartGameImage, 455, 340, 80, 80);
        }
    };

    this.drawInfo = function(){
        ctx.drawImage(endBoardImage, 340, 125, 320, 350);
        ctx.fillStyle = "white";
        ctx.fillText("Left mouse button:" , 490, 190);
        ctx.fillStyle = "#40719C";   
        ctx.fillText("JUMP" , 490, 230);
        ctx.fillStyle = "white"; 
        ctx.fillText("Space:" , 490, 290);
        ctx.fillStyle = "#40719C"; 
        ctx.fillText("Throw gift" , 490, 330);
        ctx.fillStyle = "white";
        ctx.drawImage(acceptImage, 455, 345, this.buttonsSize, this.buttonsSize);
    };

    this.draw = function(){
        ctx.drawImage(menuBoardImage, this.boardX, this.boardY, this.boardWidth, this.boardHeight);
        ctx.drawImage(menuPlayImage, this.playX, this.buttonsY, this.buttonsSize, this.buttonsSize);
        ctx.drawImage(menuInfoImage, this.infoX, this.buttonsY, this.buttonsSize, this.buttonsSize);
        this.drawBest();
    };

    this.returnMenu = function(){
        this.draw();
    };
}

c.addEventListener('click', function(event){
    let canvasX = event.pageX - c.offsetLeft;
    let canvasY = event.pageY - c.offsetTop;

    if(game.status === "menu" && canvasX > 400 && canvasX < 475 && canvasY > 240 && canvasY < 315){
        game.status = "fly";
    }
    if(game.status === "menu" && canvasX > 525 && canvasX < 600 && canvasY > 240 && canvasY < 315){
        game.status = "info";
    }
    if(game.status === "info" && canvasX > 455 && canvasX < 530 && canvasY > 345 && canvasY < 420){
        game.status = "menu";
    }
    if(game.status === "end" && canvasX > 455 && canvasX < 535 && canvasY > 340 && canvasY < 420){
        game.status = "menu";
        game.restartGame();
    }
});