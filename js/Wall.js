const brickImage = new Image();

brickImage.addEventListener('load', function(){ 
});

brickImage.src = 'assets/IceBox.png';

let wall = [];

function Wall(x){
    this.x = x;
    this.y = [0, 0, 0, 0, 0, 0, 0, 0]; // +42
    this.y[0] = 0;
    this.y[7] = 494;
    this.velocity = 2;
    
    this.generate = function(){
    this.variant = Math.floor(Math.random() * 7);
    switch(this.variant){
        case 0:
            this.y[1] = 242;
            this.y[2] = this.y[1] + 42;
            this.y[3] = this.y[2] + 42;
            this.y[4] = this.y[3] + 42;
            this.y[5] = this.y[4] + 42;
            this.y[6] = this.y[5] + 42;
        break;
        case 1:
            this.y[1] = 42;
            this.y[2] = this.y[1] + 242;
            this.y[3] = this.y[2] + 42;
            this.y[4] = this.y[3] + 42;
            this.y[5] = this.y[4] + 42;
            this.y[6] = this.y[5] + 42;
        break;
        case 2:
            this.y[1] = 42;
            this.y[2] = this.y[1] + 42;
            this.y[3] = this.y[2] + 242;
            this.y[4] = this.y[3] + 42;
            this.y[5] = this.y[4] + 42;
            this.y[6] = this.y[5] + 42;
        break;
        case 3:
            this.y[1] = 42;
            this.y[2] = this.y[1] + 42;
            this.y[3] = this.y[2] + 42;
            this.y[4] = this.y[3] + 242;
            this.y[5] = this.y[4] + 42;
            this.y[6] = this.y[5] + 42;
        break;
        case 4:
            this.y[1] = 42;
            this.y[2] = this.y[1] + 42;
            this.y[3] = this.y[2] + 42;
            this.y[4] = this.y[3] + 42;
            this.y[5] = this.y[4] + 242;
            this.y[6] = this.y[5] + 42;
        break;
        case 5:
            this.y[1] = 42;
            this.y[2] = this.y[1] + 42;
            this.y[3] = this.y[2] + 42;
            this.y[4] = this.y[3] + 42;
            this.y[5] = this.y[4] + 42;
            this.y[6] = this.y[5] + 242;
        break;
        case 6:
            this.y[1] = 42;
            this.y[2] = this.y[1] + 42;
            this.y[3] = this.y[2] + 42;
            this.y[4] = this.y[3] + 42;
            this.y[5] = this.y[4] + 42;
            this.y[6] = this.y[5] + 42;
        break;

    }
}
    this.move = function(){
        this.x -= this.velocity;
    };
    this.checkSantaCollission = function(){
        for(let i = 0 ; i < 8 ; i++){
            if(this.x < santa.x + 130 && this.x + 35 > santa.x
                && this.y[i] + 40 > santa.y && this.y[i] < santa.y + 80){
                    game.status = "end";
                }
        }
    };
    this.restart = function(){
        if(this.x < -217) {
            this.x = 1183;
            this.generate();

        }
    };
    this.draw = function(){
        for(let i = 0 ; i < 8 ; i++){
            ctx.drawImage(brickImage, this.x, this.y[i], 42, 42);
        }
    };
    this.getWall = function(x){
        if(game.status === "fly"){
            this.move();
            this.checkSantaCollission();
            this.restart();
            this.draw();
        }
    };
}
