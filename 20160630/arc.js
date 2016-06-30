/**
 * Created by mac on 16/6/30.
 */

window.ucai = window.ucai || {};

(function(){
            function arc(x, y) {
                this._x = x;
                this._y = y;
                this._context2d = document.getElementById("canvas").getContext("2d");
            }

            Object.defineProperties(arc.prototype, {
                x: {
                    set: function (value) {
                        this._x = value;
                    },
                    get: function () {
                        return this._x;
                    }
                },
                y: {
                    set: function (value) {
                        this._y = value;
                    },
                    get: function () {
                        return this._y;
                    }
                },

                });

            arc.prototype.draw = function (context2d) {

                context2d.save();
                context2d.beginPath();
                context2d.fillStyle = "#0000ff";
                context2d.globalAlpha = 0.5;

                context2d.rect(0, 0, 550, 400);
                context2d.arc(this.x,this.y,50,0,Math.PI*2);

                context2d.fill("evenodd");
                context2d.closePath();
                context2d.restore();
            };

          ucai.arc = arc;
})();