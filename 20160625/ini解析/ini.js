/**
 * Created by mac on 16/6/25.
 */
window.ucai = window.ucai ||{};


(function(){
    function Ini(str){
        var pNode = /\[(.*)\]/g;
        var pkv = /(.*)=(.*)/g;


        while(true){
            var result = pNode.exec(str);
            if(result){
                var nodeName = result[1];
                this[nodeName]={};

                var startIndex = result.index + result[0].length;
                var endIndex = str.indexOf("[",startIndex);
                if(endIndex == -1){
                    endIndex = str.length;
                }
                var nodeContent = str.substring(startIndex,endIndex);
                while(true){
                    var kvResult = pkv.exec(nodeContent);
                    if(kvResult){
                        this[nodeName][kvResult[1].trim()] = kvResult[2].kv.trim();
                    }else{
                        break;
                    }
                }
            }else{
                break;
            }
        }
    }

    ucai.Ini = Ini;
})();