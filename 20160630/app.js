/**
 * Created by mac on 16/6/30.
 */
(function(){


    function Main() {
        this._canvas = document.getElementById("canvas");
        this._context2d = this._canvas.getContext("2d");

        img = new Image();
        img.onload = function () {
            this.draw(img);

        }.bind(this);
        img.src = "0.JPG";

        this.addArc();
        this.render();
        this.addListeners();
    }

    Main.prototype.draw = function (img) {
        var g = this._context2d;

        g.drawImage(img, 0, 0);

    };
    Main.prototype.addArc = function(){
        this._arc = new ucai.arc(50,50);
        this._arc.draw(this._context2d);
    };
    Main.prototype.addListeners = function() {
        this._canvas.onmousedown = function (event) {
            this._arc.x = event.layerX;
            this._arc.y = event.layerY;

            this._canvas.onmousemove = function (e) {
                this._arc.x = e.layerX;
                this._arc.y = e.layerY;
            }.bind(this);
        }.bind(this);
        this._canvas.onmouseup = function () {
            this._canvas.onmousemove = null;
        }.bind(this);
    }
    Main.prototype.render = function(){

        this._context2d.clearRect(0,0,this._canvas.width,this._canvas.height);
        this.draw(img);
        this._arc.draw(this._context2d);
     requestAnimationFrame(this.render.bind(this));
    }


   new Main();
})();