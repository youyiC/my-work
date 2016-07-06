/**
 * Created by youyic on 16/7/6.
 */
(function(){

    $.fn.showContent = function(){
            var div = $("div");
            div.css({
                width:"100px",
                height:"100px",
                backgroundColor:"#ffff00",
                margin:"0 auto"
            });
           $("#btnShow").on("click",function(){

               div.animate({width:0},1000,function(){
                   if(div.css("backgroundColor")=="#00ff00"){
                       div.css({backgroundColor:"#ffff00"});
                   }else{
                       div.css({backgroundColor:"#00ff00"});
                   }
                   div.animate({width:"100px"},1000);
               });
           })

    }
    
    
    
})();