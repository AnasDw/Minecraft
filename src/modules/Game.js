export class Game{
    constructor(map){ 
        this._Map = null;
        this._World = null;
        this._Player = null;
        this._UI = null;
        this._InitializeGame(map);

    };

    _InitializeGame(map){
        this._Map = map;
        this._World = new World(this._Map);
        this._Player = new Player(this._Map);
        this._UI = new UI(this._Player.getItemsList(), gameWindow);
        this._StartGame();
    }
    _StartGame(){
        /// ----------------------------------------------------------------               
        const BarSide = document.getElementById("BarSide-Tools");
        BarSide.addEventListener("click",( element ) => {
            if ( element.target.id  === "reset") this._ResetGame();
            else if ( element.target.id  === "home") {
                this._EndGame();
            }else{
                this._UI.UpdateSelectedTool(BarSide, element, gameWindow);
                this._Player._selectTool(element.target.id);
            }
        })

        gameWindow.querySelector(".InventoryBox").addEventListener("click", (box) => {
            let temp = Array.from (box.target.classList);
            this._World._getItem()._setProp(temp[1]);
            this._Player._selectTool(null);
            this._UI.UpdateSelectedTool(BarSide, box, gameWindow);
        })
        /// ----------------------------------------------------------------               
        const Map = document.querySelector(".map");
        Map.addEventListener("click", (texture) => {
            let temp = Array.from (texture.target.classList);
            if (texture.target.classList.contains("block")){
                temp = temp.filter(x => x !== "block");
                if(this._Player._getTool() != null){
                    if (this._Player._getTool().CheckCollision(temp)){ 
                        this._Player._getTool().makeSound();
                        this._UpdateWorld(texture.target, temp[0], true, 1);
                    }else{
                        texture.target.style.border = "2px solid red";
                        setTimeout(() => {
                            texture.target.style.border = "";
                        } ,500);
                    }

                }else if (this._Player._getTool() == null && this._World._getItem()._getProp() != null ){
                        if(texture.target.classList.contains("Sky") || texture.target.classList.contains("SnowSky")){
                            if ( this._Player._getItemCounter(this._World._getItem()._getProp()) > 0)
                                {
                                    this._UpdateWorld(texture.target, this._World._getItem()._getProp(), false , -1);

                                }
                        }
                }
            }
        })
    };

    _EndGame(){
        this._UI._EndUI();
        this._World._deleteWorld();
        this._World = null;
        this._Player = null;
        this._Map = null;
        this._UI = null;
        
        SwitchScreen(homePage ,gameWindow, loadingScreen);
        music.play();
    };
    _ResetGame(){
        this._UI._EndUI();
        this._World._deleteWorld();
        this._World = null;
        this._Player = null;
        this._InitializeGame(this._Map);
        SwitchScreen(gameWindow ,gameWindow, loadingScreen);
    };
    _UpdateWorld(texture, textureName, boolean, valueToAdd){
        if(boolean == true){
            this._World._removeTile(texture)
        }else{
            this._World.addTile(textureName, texture)
        }
        this._Player._addItem(textureName, valueToAdd);
        this._UI._IncreaseItemCount(textureName, valueToAdd);
    };
}

import { loadingScreen, gameWindow, homePage, music, InventoryBox } from "../main.js"
import { World } from './World.js';
import { Player } from "./Player.js";
import { SwitchScreen } from "../models/Constants.js";
import { UI } from "./UI.js";

