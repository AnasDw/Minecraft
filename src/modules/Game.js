export class Game{

    constructor(map){ 
        this._Map = map;
        this._World = new World(this._Map);
        this._Player = new Player(this._Map);
        this._UI = new UI(this._Player.getItemsList(), gameWindow);

        this._StartGame();
    };

    _StartGame(){
        const BarSide = document.getElementById("BarSide-Tools");
        BarSide.addEventListener("click",( element ) => {
            /// ----------------------------------------------------------------
            BarSide.querySelectorAll("img").forEach( element => {
                element.classList.remove("ActiveTool");
            });
            /// ----------------------------------------------------------------

            if ( element.target.id  === "reset") this._ResetGame();
            else if ( element.target.id  === "home") {
                SwitchScreenShow(homePage, loadingScreen);
                this._ResetGame();
                music.play();
            }
            /// ----------------------------------------------------------------

            else if ( element.target.id  === "axe"){
                gameWindow.style.cursor = 'url("https://ik.imagekit.io/AnasDweik/Minecraft/Axe.png?updatedAt=1693242201304"),auto';
            } 
            else if ( element.target.id  === "shovel") {
                gameWindow.style.cursor = 'url("https://ik.imagekit.io/AnasDweik/Minecraft/shovel.png?updatedAt=1693242201334"),auto';
            }
            else if ( element.target.id  === "Pickaxe"){
                gameWindow.style.cursor = 'url("https://ik.imagekit.io/AnasDweik/Minecraft/stoneCrusher.png?updatedAt=1693242201292"),auto';
            }
            if (element.target.id === "Pickaxe" ||
            element.target.id === "shovel" || 
            element.target.id === "axe"){
                element.target.classList.add("ActiveTool");                
            }
            /// ----------------------------------------------------------------
            if (element.target.id === "box"){
                gameWindow.querySelector("#InventoryBox").classList.toggle("Active");
            }   
        })
    };

    _UpdateWorld(){
        
    };
    _ResetGame(){
        this._World = null;
        this._Player = null;
        
        this._World = new World(this._Map);
        this._Player = new Player(this._Map);
        SwitchScreenShow(gameWindow, loadingScreen)
    };
}

import { loadingScreen, gameWindow, homePage, music, InventoryBox } from "../main.js"
import { World } from './World.js';
import { Player } from "./Player.js";
import { SwitchScreenShow } from "../models/Constants.js";
import { UI } from "./UI.js";

