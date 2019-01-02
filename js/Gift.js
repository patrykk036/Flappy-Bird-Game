const giftImage = new Image();
giftImage.addEventListener('load', function(){
    ctx.drawImage(giftImage, 30, 30, 40, 40);
});
giftImage.src = 'assets/gift.png';

function Gift(){
    this.x = santa.x + 10;
    this.y = santa.y + 10;
    this.velocity = 0;
    this.size = 40;
    this.isThrowed = false;
    this.isCatched = false;

    this.draw = function(){
        ctx.drawImage(giftImage, this.x, this.y, this.size, this.size);
        if(game.status === "fly"){
            ctx.drawImage(giftImage, 30, 30, 40, 40);
            ctx.drawImage(brickImage, 30, 90, 42, 42);
        }
    };
    this.raiseGravity = function(){
        this.velocity += 0.0981;
    };
    this.move = function(){
        if(!this.isThrowed){
            this.x = santa.x + 10;
            this.y = santa.y - 10;
            this.velocity = 0;
        }
        if(this.isThrowed){
            this.x -= 1;
            this.y += this.velocity;
        }
    };
    this.restart = function(){
        this.isThrowed = false;
    };
    this.checkCollission = function(){
        if(this.x + this.size - 20 > person.x && this.x < person.x + person.size &&
            this.y + this.size - 30 > person.y && game.status === "fly"){
                this.isCatched = true;
                game.score += 5;
                game.gifts++;
                if(game.bestScore < game.score){
                    localStorage.setItem('bestScore', game.score);
                }
                this.restart();
            }
        if(this.y > 550){
            this.restart();
        }
    };
    this.returnGift = function(){
        this.draw();
        this.raiseGravity();
        this.move();
        this.checkCollission();
    };
}

document.onkeydown = function(e) {
    if (e.keyCode === 32 && game.status === "fly"){
        gift.isThrowed = true;
    }
}