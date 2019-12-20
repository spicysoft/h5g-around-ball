var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
// Liberapp 2019 - Tahiti Katagai
// 障害オブジェクト管理
var Wave = (function (_super) {
    __extends(Wave, _super);
    function Wave() {
        return _super.call(this) || this;
    }
    Wave.prototype.update = function () {
        //    if(Game.obstacledistance >= 0){
        //        Wave.spawn();
        //    }
    };
    Wave.ObstacleSet = function () {
        var n;
        for (n = 0; n < Obstacle.I.length; n++) {
            var num = 300;
            var _num = -Game.obstacledistance;
            Obstacle.I[n].y = num + n * _num;
            var result = this.getRandom(-100, 100);
            Obstacle.I[n].x = result;
            Obstacle.I[n].ball.perspective(Obstacle.I[n].x, Obstacle.I[n].y, 0);
            if (n == Obstacle.I.length - 1) {
                Game.highestPosi = Obstacle.I[n].y;
                console.log(Game.highestPosi + "//" + Obstacle.I[n].y);
            }
        }
    };
    Wave.ObstacleUpdate = function () {
        new EffectCircle(Obstacle.I[Player.I.currentNum].x, Obstacle.I[Player.I.currentNum].y, Obstacle.I[Player.I.currentNum].radius, OBSTACLE_COLOR);
        if (OBSTACLE_MAX_DISTANCE > Game.obstacledistance) {
            Game.obstacledistance += OBSTACLE_ADD_DISTANCE;
        }
        Game.highestPosi += -Game.obstacledistance;
        Obstacle.I[Player.I.currentNum].y = Game.highestPosi;
        var result = this.getRandom(-OBSTACLE_MAX_POSITION, OBSTACLE_MAX_POSITION);
        Obstacle.I[Player.I.currentNum].x = result;
    };
    Wave.getRandom = function (min, max) {
        var random = Math.floor(Math.random() * (max + 1 - min)) + min;
        return random;
    };
    Wave.I = null;
    return Wave;
}(GameObject));
__reflect(Wave.prototype, "Wave");
//# sourceMappingURL=Wave.js.map