const groundImage = new Image();

groundImage.addEventListener('load', function(){
    ctx.drawImage(groundImage, 0, 472, 128, 128);
});

groundImage.src = 'assets/ground.png';

let ground = [];

function Ground(x){
    this.x = x;
    this.y = 472;
    this.velocity = 2;
    this.move = function(){
        this.x -= this.velocity;
    };
    this.draw = function(){
        ctx.drawImage(groundImage, this.x, 536, 64, 64);
        
    };
    this.restart = function(){
        if(this.x < -64){
            this.x = 1000;
        }
    };
    this.getGround = function(){
        this.move();
        this.restart();
        this.draw();
    };
}
