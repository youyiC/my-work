/**
 * Created by mac on 16/6/25.
 */
(function(){
    function Main(){
        this.getElements();
        this.addListeners();
    }
    Main.prototype.getElements = function(){
        this._playlist = document.getElementById("playlist");
        this._player = document.getElementById("player");

    };
    Main.prototype.createPlaylistByFilesIn = function(files,ulNode){
        (function(self){
            function songSelectedHandler(file){
                var reader = new FileReader();
                reader.onload = function(){
                    self._player.src = reader.result;
                };
                reader.readAsDataURL(file);
            }
            for(var i=0;i<files.length;i++){
                var file = files[i];
                if(file.type = "audio/mp3"){
                    var song = new ucai.Song(file);
                    song.onselect = songSelectedHandler;
                    ulNode.appendChild(song.node);
                }
            }
        })(this);
    };
    Main.prototype.addListeners = function(){
        (function(self){
            document.ondragover = function(event){
              event.preventDefault();
            };
            document.ondrop = function(event){
                event.preventDefault();
                var files = event.dataTransfer.files;
                self.createPlaylistByFilesIn(files,self._playlist);
            }

        })(this);
    };
     new Main();
})();