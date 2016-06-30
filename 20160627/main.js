/**
 * Created by mac on 16/6/27.
 */
(function(){

    function Main() {
        this._canvas = document.getElementById("canvas");
        this._context2d = this._canvas.getContext("2d");
        //this.drawRect();
        //this.drawCircle();
        //this.drawLines();
        //this.drawText();
        this.drawImage();
    };
        Main.prototype.drawRect = function () {
            this._context2d.fillStyle = "#ff0000";
            this._context2d.fillRect(10, 10, 200, 100);
            this._context2d.lineWidth = 10;
            this._context2d.strokeRect(10, 10, 200, 100);
        }
    Main.prototype.drawCircle = function(){
        this._context2d.beginPath();
        this._context2d.arc(100,100,50,0,Math.PI*2);
        this._context2d.stroke();
        this._context2d.closePath();
    }
    Main.prototype.drawLines = function(){
        this._context2d.beginPath();
        this._context2d.moveTo(100,100);
        this._context2d.lineTo(100,200);
        this._context2d.lineTo(200,200);
        this._context2d.stroke();
        this._context2d.closePath();
    }
    Main.prototype.drawText = function(){
        this._context2d.font = "bold 100px Courier";
        this._context2d.fillStyle = "red";
        this._context2d.fillText("hello world",0,100);
    };
    Main.prototype.drawImage = function(){
        var img = document.createElement("img");
        img.onload = function(){
            //this._context2d.drawImage(img,0,0,100,100);
            this._context2d.drawImage(img,100,100,110,110,100,100);
        }.bind(this);
        img.onerror = function(){
            console.error("无法加载");
        };
        img.src = "0.jpg";
    };
    new Main();
})();
