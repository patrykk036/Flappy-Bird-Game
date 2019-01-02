const game = new Game();
const menu = new Menu();
const santa = new Santa();
const person = new Person();
const gift = new Gift();

giftImage.addEventListener('load', function(){
    ctx.drawImage(giftImage, 30, 30, 40, 40);
});

giftImage.src = 'assets/gift.png';

function init(){
    for(let i = 0 ; i < 17 ; i++){
        ground.push(new Ground(i*64));
    }
    
    background.push(new Background(0));
    background.push(new Background(1000));

    wall.push(new Wall(1050));
    wall.push(new Wall(1400));
    wall.push(new Wall(1750));
    wall.push(new Wall(2100));
    wall[0].generate();
    wall[1].generate();
    wall[2].generate();
    wall[3].generate();
}

init();

document.body.addEventListener('click', function(){
    if(game.status === "fly"){
        santa.moveUp();
    }
});

setInterval(game.returnGame, 10);