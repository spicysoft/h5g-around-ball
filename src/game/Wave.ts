// Liberapp 2019 - Tahiti Katagai
// 障害オブジェクト管理
class Wave extends GameObject{

    static I:Wave = null;

    constructor() {
        super();
    }
    update() {
        

        //    if(Game.obstacledistance >= 0){
        //        Wave.spawn();
        //    }
    }
    static ObstacleSet(){
        var n;
        for (n = 0; n < Obstacle.I.length; n++) {
            var num = 300;
            var _num = -Game.obstacledistance;
              Obstacle.I[n].y = num + n *_num;
              var result = this.getRandom( -100, 100);
              Obstacle.I[n].x = result;
              Obstacle.I[n].ball.perspective(  Obstacle.I[n].x,  Obstacle.I[n].y, 0 );

              if(n == Obstacle.I.length-1){  
                 Game.highestPosi = Obstacle.I[n].y;
                 console.log(Game.highestPosi+ "//"+Obstacle.I[n].y);
              }
            }
    }

    static ObstacleUpdate(){
        new EffectCircle( Obstacle.I[Player.I.currentNum ].x, Obstacle.I[Player.I.currentNum].y, Obstacle.I[Player.I.currentNum].radius, OBSTACLE_COLOR );
        if(OBSTACLE_MAX_DISTANCE > Game.obstacledistance){
            Game.obstacledistance += OBSTACLE_ADD_DISTANCE;
        }
        if(OBSTACLE_MAX_POSITION > Game.obstacleposition){
            // Game.obstacleposition += OBSTACLE_ADD_POSITION
        }

        Game.highestPosi += -Game.obstacledistance;
        Obstacle.I[Player.I.currentNum].y = Game.highestPosi ;
        if(-1200 > Obstacle.I[Player.I.currentNum].y ){
            Obstacle.I[Player.I.currentNum].move = true;
            Obstacle.I[Player.I.currentNum].speed = this.getRandom( 0 , Game.obstaclespeed);
        }

         var result = this.getRandom( -Game.obstacleposition, Game.obstacleposition);
        Obstacle.I[Player.I.currentNum].x = result;
        

    }

    static BoxObstacleSet(){
        var n;
        for (n = 0; n < BoxObstacle.I.length; n++) {
            BoxObstacle.I[n].y = 600;

        }

    }

     static BoxObstacleUpdate(){
        var n;
        for (n = 0; n < BoxObstacle.I.length; n++) {
            if(BoxObstacle.I[n].y > Player.I.y + 200 ){

                BoxObstacle.I[n].y = Game.highestPosi + Game.obstacledistance/2 ;
                BoxObstacle.I[n].speed = this.getRandom( 1 , BOXOBSTACLE_SPEED);
                BoxObstacle.I[n].move = true;

            }


        }

     }



    static getRandom( min, max ) {
    var random = Math.floor( Math.random() * (max + 1 - min) ) + min;
    return random;
}
}

