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
var BoxObstacle = (function (_super) {
    __extends(BoxObstacle, _super);
    function BoxObstacle() {
        var _this = _super.call(this) || this;
        _this.rect = null;
        _this.state = _this.stateNone;
        BoxObstacle.I.push(_this);
        _this.x = 0;
        _this.y = 0;
        _this.w = BOXOBSTACLE_LENGTH;
        _this.h = BOXOBSTACLE_LENGTH;
        _this.color = OBSTACLE_COLOR;
        _this.move = false;
        _this.speed = 0;
        _this.direction = 1;
        _this.rect = new Rect(_this.x, _this.y, _this.w, _this.h, _this.color);
        return _this;
    }
    BoxObstacle.prototype.onDestroy = function () {
        this.rect.destroy();
        Obstacle.I = [];
    };
    BoxObstacle.prototype.update = function () {
        this.state();
        this.rect.perspective(this.x, this.y, 0);
    };
    BoxObstacle.prototype.setStateNone = function () {
        this.state = this.stateNone;
    };
    BoxObstacle.prototype.stateNone = function () {
    };
    BoxObstacle.prototype.setStateRun = function () {
        this.state = this.stateRun;
    };
    BoxObstacle.prototype.stateRun = function () {
        if (this.move) {
            this.x += this.speed * this.direction;
            if (this.x < -Game.obstacleposition || this.x > Game.obstacleposition) {
                this.direction = this.direction * -1;
            }
        }
    };
    BoxObstacle.detectObstacle = function (x, y) {
        var flag = false;
        var r = Util.w(PLAYER_RADIUS_PER_W);
        var _r = Util.w(OBSTACLE_RADIUS_PER_W);
        var n;
        for (n = 0; n < Obstacle.I.length; n++) {
            var dx = Obstacle.I[n].x - x;
            var dy = Obstacle.I[n].y - y;
            var c = Math.sqrt(dx * dx + dy * dy);
            if (c <= r + _r) {
                Game.launchedposition = Obstacle.I[n].y;
                flag = true;
                Player.I.currentNum = n;
                console.log("c" + c + "r+r" + r + _r);
            }
        }
        return flag;
    };
    BoxObstacle.prototype.setStateMiss = function () {
    };
    BoxObstacle.prototype.stateMiss = function () {
    };
    BoxObstacle.I = [];
    return BoxObstacle;
}(GameObject));
__reflect(BoxObstacle.prototype, "BoxObstacle");
//# sourceMappingURL=BoxObstacle.js.map