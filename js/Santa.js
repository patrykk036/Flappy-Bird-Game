const santaImage = new Image();

santaImage.addEventListener('load', function(){
    ctx.drawImage(santaImage, 150, santa.y, 150, 140);
});

santaImage.src = 'assets/t1.png';

function Santa() {
    this.x = 150;
    this.y = 443;
    this.width = 130;
    this.height = 90;
    this.velocity = 0;

    this.moveUp = function(){
        this.velocity = -2.9;
    };
    this.raiseGravity = function(){
        if(game.status === "fly"){
            this.velocity += 0.0981;
        }
    };
    this.addPoint = function(){
        for(let i = 0 ; i < 4 ; i++){
            if(wall[i].x <= 150 && wall[i].x >=149){
                game.score++;
                game.walls++;
            }
        }
    };
    this.checkGroundCollission = function(){
        if(this.y >= 442 && game.status !== "end") {
            this.velocity = 0;
        }
    };
    this.move = function(){
        this.y += this.velocity;
    };
    this.moveDown = function(){
        if(game.status === "end"){
            this.velocity = 6;
        }
    };
    this.draw = function(){
        ctx.drawImage(santaImage, this.x, this.y, this.width, this.height);
    };
    this.getSanta = function(){
        this.move();   
        this.moveDown();
        this.raiseGravity();
        this.addPoint();
        this.draw();
        this.checkGroundCollission();
    };
}

