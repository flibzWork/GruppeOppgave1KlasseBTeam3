
function addItem() {
    document.getElementById('inventory').classList.add = '';
}

function removeItem() {
    document.getElementById('kurv').classList.add = '';
}

function invInfo() {
    document.getElementById('appLeft').innerHTML =/*HTML*/`
        <div class="mainInv" id="main-Inv" draggable="true" onclick="invInfo()">Inventory</div>
        
        <div class="invOut" id="mainInvOut" draggable="true">
        Ut hent boks
        <button class="btn" onclick="addItem()">
             Add item
        </button>
        <button class="btn" onclick="removeItem()">
             Remove item
        </button>
        </div>`
}

function basketInfo() {
    document.getElementById('appRight').innerHTML=/*HTML*/`
        <div class="basket" id="basketInv" draggable="true" onclick="basketInfo()">Basket</div>
        <div class="basOut" id="basketInvOut" draggable="true"> Ut hent boks
            <button class="addBasketItem btn" onclick = "addBasketItem()" >
                Add item
            </button>
            <button class="removeBasketItem btn" onclick="removeBasketItem()">
            Remove item
            </button>
        </div>`
}

function blankAll() {
    document.getElementById('mainInvOut').innerHTML ='';
    document.getElementById('basketInvOut').innerHTML ='';
}