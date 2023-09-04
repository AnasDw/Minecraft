export const homePage = document.getElementById("home-land-video");
export const gameWindow = document.getElementById("game-window");
export const loadingScreen = document.getElementById("loading-screen");
export const music = document.getElementById("video-sound");
export const InventoryBox = document.getElementById("InventoryBox");


export let SelectedMap = "none";
export let SelectedItems;

let audio_played = true;




const videoPromise = new Promise((resolve, reject) => {
    let video = document.querySelector("video");
    video.addEventListener("play", () => {
        resolve(document.getElementById("video-sound"));
    });
});

videoPromise.then((sound) => {
    sound.volume = 1;
    sound.play();
    setTimeout(() => {
        document.querySelector(".Menu").style.display = "flex";
    }, 3500);
})
.catch((error) => {console.error(error);});

document.querySelector("video").addEventListener("ended", () => {
    const v = document.querySelector("video");
    v.src = "https://ik.imagekit.io/AnasDweik/Minecraft/Untitled.mp4?updatedAt=1693249758551";
    v.poster = "https://ik.imagekit.io/AnasDweik/Minecraft/screenPoster2.png?updatedAt=1693250448825"
    v.play();
});



// ------------ Icons ------------
// Initialize the music button.
document.getElementById("icon").addEventListener("click", () => {
    if (!audio_played) {    
        audio_played = true;
        music.play();
        music.muted = false;
    }else{
        music.muted = !music.muted;
    }
        // Update the button text based on the muted state
    if (music.muted) {
        document.getElementById("icon").src = "https://ik.imagekit.io/AnasDweik/Minecraft/mute.png?updatedAt=1693237048520"
    } else {
        document.getElementById("icon").src = "https://ik.imagekit.io/AnasDweik/Minecraft/note.png?updatedAt=1693239198419";
    }
});


// ------------ Getting Started ------------
const Getting_Started = document.getElementById("Getting-Started");
const Maps_Menu = document.getElementById("Maps-menu");
const Menu = document.querySelector(".Menu"); 

// open the menu of constructions.
Menu.querySelector("li:nth-child(2)").addEventListener("click", () => {
    Menu.style.display = "none";
    Getting_Started.style.display = "flex"; 
});

// close the menu of constructions.
Getting_Started.querySelector("#close-Instructions").addEventListener("click", () => {
    Getting_Started.style.display = "none"; 
    Menu.style.display = "flex";
});
// --------------------------------------
// ------------- Maps menu --------------
Menu.querySelector("li:nth-child(1)").addEventListener("click", () => {
    Menu.style.display = "none";
    Maps_Menu.style.display = "flex"; 
});

// close the menu of maps.
Maps_Menu.querySelector("#close-Instructions").addEventListener("click", () => {
    Maps_Menu.style.display = "none"; 
    Menu.style.display = "flex";
});

const Maps = Maps_Menu.querySelectorAll("li");

// choosing a map ... 
Maps.forEach(map => {
    map.addEventListener("click", (chosen_map) => {
        Maps.forEach(item_Map =>  {
            item_Map.classList.remove("chosen-map");
        }); 
        chosen_map.target.classList.add("chosen-map");
        SelectedMap = chosen_map.target.getAttribute('key');
    });
})


Maps_Menu.querySelector("#Tnt").addEventListener("click", () => {
    if(SelectedMap !== "none"){
        SelectedItems = `${SelectedMap}List`;
        music.pause();

        Maps_Menu.style.display = "none";
        Menu.style.display = "flex";
        homePage.style.display = "none";
        loadingScreen.style.display = "flex";
        setTimeout(function(){
            loadingScreen.style.display = "none"
            gameWindow.style.display = "flex";
        }, 3000);

        const StartGame = new Game(SelectedMap);
        console.log("game");

    }else alert("Please select a map");
});




import { Game } from './modules/Game.js';