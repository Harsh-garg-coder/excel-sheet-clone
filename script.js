const rowCount = 100;
const colCount = 26;
let selectedCell = "";


const rowAddressContainer = document.querySelector(".row-address-container");

for(let i = 0; i < rowCount; i++) {
    const rowNumber = i + 1;

    const cell = document.createElement("div");
    cell.setAttribute("class", "row-address-cell");
    cell.innerText = rowNumber;

    rowAddressContainer.append(cell);
}

const colAddressContainer = document.querySelector(".col-address-container");

for(let i = 0; i < colCount; i++) {
    const colNumber = String.fromCharCode(65 + i);

    const cell = document.createElement("div");
    cell.setAttribute("class", "col-address-cell");
    cell.innerText = colNumber;

    colAddressContainer.append(cell);
}

const cellsContainer = document.querySelector(".cells-container");
for(let i = 0; i < rowCount; i++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");

    for(let j = 0; j < colCount; j++) {
        const cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        cell.setAttribute("contenteditable", "true");
        cell.addEventListener("click", () => {
            selectedCell = String.fromCharCode(65 + j) + "" + (i + 1);
            const cellAddress = document.querySelector(".address-bar");
            cellAddress.value = selectedCell;
        })

        row.append(cell);
    }

    cellsContainer.append(row);
}