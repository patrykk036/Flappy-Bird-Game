var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

function Game(){

    this.status = "menu";
    this.score = 0;
    this.gifts = 0;
    this.walls = 0;
    this.bestScore = localStorage.getItem('bestScore') === null ? 0 : localStorage.getItem('bestScore');
    
    this.restartGame = function(){
        for(let i = 0 ; i < 4 ; i++){
            wall.pop();
        }
        for(let i = 0 ; i < 17 ; i++){
            ground.pop();
        }
        background.pop();
        background.pop();

        init();
        santa.y = 432;
        person.x = 1200;
        gift.isCatched = false;
        game.bestScore = localStorage.getItem('bestScore') === null ? 0 : localStorage.getItem('bestScore');
        game.gifts = 0;
        game.walls = 0;
        game.score = 0;
    };

    this.returnGame = function(){
        for(let i = 0 ; i < 2 ; i++){
            background[i].getBackground();
        }
        for(let i = 0 ; i < 4 ; i++){
            wall[i].getWall();
        }
        gift.returnGift();
        santa.getSanta();
        for(let i = 0 ; i < 17 ; i++){
            ground[i].getGround();
        }   
        person.returnPerson();
        if(game.status === "menu"){
            menu.returnMenu();
        }
        if(game.status === "fly"){
            menu.drawCurrentScore();
        }
        if(game.status === "info"){
            menu.drawInfo();
        }
        if(game.status === "end"){
            menu.drawEnd();
        }
    }; 
}