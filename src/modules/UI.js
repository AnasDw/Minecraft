
export class UI{
    constructor(List, gameWindow) { 
        this._ItemsList = List;
        this._gameWindow = gameWindow;
        this.InitUI();
    };

    InitUI(){
        this._ItemsList.forEach((element, index) => {
            const container = document.createElement("div");
            container.className = "block";
            container.classList.add(`${ Object.keys(element)}`);
            container.id = index;
            const counter = document.createElement("div");
            counter.classList.add("Item-counter");
            counter.classList.add("Flex-Centre");
            counter.textContent = Object.values(element);
            container.appendChild(counter);
            this._gameWindow.querySelector("#InventoryBox").appendChild(container);
        });
    }
    UpdateUI(){
        
    }
    IncreaseItemCount(item){

    }
    DecreaseItemCount(item){

    }
    
}