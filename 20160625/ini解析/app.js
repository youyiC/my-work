/**
 * Created by mac on 16/6/25.
 */


(function(){
    function init(){
        $.get("ini").done(function(data){
            var ini = new ucai.Ini(data);
            console.log(ini.app.name);
        });
    }
    init();
})();