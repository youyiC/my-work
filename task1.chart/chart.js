/**
 * Created by mac on 16/6/30.
 */
(function(){

    function Main() {
        this._MAX_VALUE = 150;
        this._context2d = document.getElementById("canvas").getContext("2d");
        this._begin = 10;

        $.get("tsconfig.json").done(function (data) {
            this.drawData(data);
        }.bind(this));
        this.title("20","浏览器渲染效果对比");
        this.aside();
    }
    Main.prototype.drawData = function(data){
      this.drawRect(data.html,this._begin);
      this.drawRect(data.css,this._begin+30);
      this.drawRect(data.js,this._begin+30);

    };
    Main.prototype.drawRect = function(arr,x){
        var x = x ;
        var y1 = 400*(1-arr.chrome/this._MAX_VALUE);
        this._context2d.fillStyle = "#00ff00";
        this._context2d.fillRect(x,y1,20,400-y1);
        x+=20;
        var y2 = 400*(1-arr.firefox/this._MAX_VALUE);
        this._context2d.fillStyle ="#ffff00";
        this._context2d.fillRect(x,y2,20,400-y2);
        x+=20;
        var y3 = 400*(1-arr.ie/this._MAX_VALUE);
        this._context2d.fillStyle = "#0000ff";
        this._context2d.fillRect(x,y3,20,400-y2);
        this._begin = x;
    }
    Main.prototype.title = function(fontsize,text){
        this._context2d.font = fontsize + "px 微软雅黑";
        this._context2d.fillText(text,20,80);


    }
    Main.prototype.aside = function(){
         this._context2d.fillStyle = "#00ff00";
         this._context2d.fillRect(300,100,20,20);
         this._context2d.fillText("chrome",330,120);
         this._context2d.fillStyle = "#ffff00";
         this._context2d.fillRect(300,130,20,20);
         this._context2d.fillText("firefox",330,150);
         this._context2d.fillStyle = "#0000ff";
         this._context2d.fillRect(300,160,20,20);
         this._context2d.fillText("ie",330,180);
    }
  new Main();
})();