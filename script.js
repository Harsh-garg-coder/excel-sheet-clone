const rowCount = 100;
const colCount = 26;

function createAddressBars() {
    const rowAddressContainer = document.querySelector(".row-address-container");
    const colAddressContainer = document.querySelector(".col-address-container");

    for(let i = 0; i < rowCount; i++) {
        const rowNumber = i + 1;
    
        const cell = document.createElement("div");
        cell.setAttribute("class", "row-address-cell");
        cell.innerText = rowNumber;
    
        rowAddressContainer.append(cell);
    }

    for(let i = 0; i < colCount; i++) {
        const colNumber = String.fromCharCode(65 + i);
    
        const cell = document.createElement("div");
        cell.setAttribute("class", "col-address-cell");
        cell.innerText = colNumber;
    
        colAddressContainer.append(cell);
    }
}

function handleCellClick(cell, cellRow, cellCol) {
    //  update address bar
    const cellAddress = String.fromCharCode(65 + cellCol) + (cellRow + 1);
    const addressBar = document.querySelector(".address-bar");
    addressBar.value = cellAddress;
}

function createCells() {
    const cellsContainer = document.querySelector(".cells-container");

    for(let i = 0; i < rowCount; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");

        for(let j = 0; j < colCount; j++) {
            const cell = document.createElement("div");

            cell.setAttribute("class", "cell");
            cell.setAttribute("contenteditable", "true");
            cell.addEventListener("click", () => handleCellClick(cell, i, j));
    
            row.append(cell);
        }
    
        cellsContainer.append(row);
    }
}

createAddressBars();
createCells();


