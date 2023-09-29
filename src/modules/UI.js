export class UI {
  constructor(List, gameWindow) {
    this._ItemsList = List;
    this._gameWindow = gameWindow;
    this.InitUI();
  }

  InitUI() {
    this._ItemsList.forEach((element, index) => {
      const container = document.createElement("div");
      container.className = "block";
      container.classList.add(`${Object.keys(element)}`);
      container.id = index;
      const counter = document.createElement("div");
      counter.classList.add("Item-counter");
      counter.classList.add("Flex-Centre");
      counter.textContent = Object.values(element);
      container.appendChild(counter);
      this._gameWindow.querySelector(".InventoryBox").appendChild(container);
    });
  }

  _EndUI() {
    this._ItemsList = null;
    document.getElementById("game").querySelector(".InventoryBox").remove();
    const Div = document.createElement("div");
    Div.className = "InventoryBox";
   console.log( document.getElementById("game").appendChild(Div))
  }
  _IncreaseItemCount(itemClass, valueToAdd) {
    const itemList = document.querySelectorAll(".InventoryBox");
    itemList.forEach((inventoryBox) => {
      const matchingElements = inventoryBox.querySelectorAll(`.${itemClass}`);
      matchingElements.forEach((box) => {
        box.querySelectorAll(".Item-counter").forEach((counter) => {
          counter.textContent = parseInt(counter.textContent) + valueToAdd;
        });
      });
    });
  }

  UpdateSelectedTool(BarSide, element, gameWindow) {
    BarSide.querySelectorAll("img").forEach((element) => {
      element.classList.remove("ActiveTool");
    });
    /// ----------------------------------------------------------------
    if (
      element.target.id === "Pickaxe" ||
      element.target.id === "shovel" ||
      element.target.id === "Sword" ||
      element.target.id === "axe"
    ) {
      element.target.classList.add("ActiveTool");
    }
    if (element.target.id === "box") {
      document
        .getElementById("game")
        .querySelector(".InventoryBox")
        .classList.toggle("Active");
    }
  }
}
