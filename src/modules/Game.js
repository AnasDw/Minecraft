// import { World } from "./World";
// import { Player } from "./Player";
// import { SelectedMap } from "../main";

class Game{

    constructor(map){ 
        this._Map = map;
        this._World = new World(this._Map);
        this._Player = new Player(this._Map);
    };

    _StartGame(){
        self._InitializeDom();

    };
    _UpdateWorld(){
        
    };
    _ResetGame(){
        console.log("sdsddsdsd");
        this._World.setMap(SelectedMap);
    };

    _InitializeDom(){
        const BarSide = document.getElementById("BarSide-Tools");
        BarSide.addEventListener("click",( element ) => {
            console.log("object");
            if (element.target.getAttribute() === "reset") this._ResetGame();
        })
    }

}
export default Game;
