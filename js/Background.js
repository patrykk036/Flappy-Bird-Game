const bgImage = new Image();

bgImage.addEventListener('load', function(){
    ctx.drawImage(bgImage, 0, 0, 1000, 600);
});

bgImage.src = 'assets/BG.png';

let background = [];

function Background(x){
    this.x = x;
    this.y = 0;

    this.move = function(){
        this.x -= 0.1;
    };
    this.restart = function(){
        if(this.x < -1000){
            this.x = 1000;
        }
    };
    this.draw = function(){
        ctx.drawImage(bgImage, this.x, 0, 1000, 600);
    };
    this.getBackground = function(){
        this.move();
        this.restart();
        this.draw();
    };
}

