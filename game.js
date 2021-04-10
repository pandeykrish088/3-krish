class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
player1 = createSprite(50,300,50,50);
//player1.shapeColor = "blue"
player2 = createSprite(800,300,50,50);
players=[player1,player2];

}
    
play(){
        
form.hide();

                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1000, 1500);
                 var x =50;
                 var y=300;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){

                     index = index+1;
                     x = x + 750;
                     y=300-allPlayers[plr].distance;
                players[index -1].x = x;
                     players[index - 1].y = y;


/*if(index === player.index){
fill("black");
textSize(25);

text(allPlayers[plr].name,x-25,y+25);

}*/
textSize(25);
fill("white");
text("Player 1 :" +allPlayers.player1.score,50,50);
text("Player 2 :" + allPlayers.player2.score, 50, 100);   
}

if(keyIsDown(UP_ARROW) && player.index !== null) {
    player.distance -= 10;
    player.update();
    }
        
        if(keyIsDown(DOWN_ARROW) && player.index !== null) {
        player.distance += 10
        player.update();
        }
}

end(){
console.log("Game Ended");
}
}