const girlImage = new Image();

girlImage.addEventListener('load', function(){
    ctx.drawImage(girlImage, -50, -50, 10, 10);
});

girlImage.src ='assets/girl.png';

function Person(){
    this.x = 1200;
    this.y = 475;
    this.size = 60;
    this.velocity = 1;

    this.checkCollissionWithWall = function(){

        if(this.x < wall[0].x + 38  && wall[0].x < 1000){
            this.velocity = .4;
        }
        if(this.x > wall[1].x - 56){
            this.velocity = -3.4;
        }
    };
    this.restart = function(){
        if(wall[1].x < 0){
            this.x = wall[0].x + 220;
            gift.isCatched = false;
        }
    };
    this.move = function(){
        this.x += this.velocity;
    };
    this.draw = function(){
        ctx.drawImage(girlImage, this.x, this.y, this.size, this.size);
    };
    this.drawGift = function(){
        if(gift.isCatched){
            ctx.drawImage(giftImage, this.x, this.y, gift.size, gift.size);
        }
    };
    this.returnPerson = function(){
        if(game.status === "fly"){
            this.checkCollissionWithWall();
            this.restart();
            this.drawGift();
            this.move();
            this.draw();
        }
    };
}