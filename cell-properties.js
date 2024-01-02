const sheetDB = [];

const fontFamily = document.querySelector(".font-family-prop");
const fontSize = document.querySelector(".font-size-prop");
const boldIcon = document.querySelector(".bold-icon");
const italicIcon = document.querySelector(".italic-icon");
const underlineIcon = document.querySelector(".underline-icon");
const leftAlignIcon = document.querySelector(".left-align-icon");
const centerAlignIcon = document.querySelector(".center-align-icon");
const rightAlignIcon = document.querySelector(".right-align-icon");
const textColorPicker = document.querySelector(".text-color-picker");
const cellBgColorPicker = document.querySelector(".cell-bg-color-picker");

const addressBar = document.querySelector(".address-bar");

const cells = document.querySelectorAll(".cell");

const activePropertyBgColor = "#d1d8e0";
const inactivePropertyBgColor = "#ecf0f1";

function addDefaultPropertiesToEachCell() {
    for(let i = 0; i < rowCount; i++) {
        const rowDb = [];
        for(let j = 0; j < colCount; j++) {
            const cellProperties = {
                isBold: false,
                isItalic: false,
                isUnderline: false,
                fontFamily: "monospace",
                fontSize: 14,
                alignment: "left",
                textColor: "#000000",
                bgColor: "transparent"
            }
            rowDb.push(cellProperties);
        }
        sheetDB.push(rowDb);
    }
}

function decodeRowIdAndColId(address) {
    const rowId = Number(address.substring(1)) - 1;
    const colId = address.charCodeAt(0) - 65;

    return { rowId, colId};
}

function getActiveCellElementAndProperties() {
    const address = addressBar.value;

    const { rowId, colId } = decodeRowIdAndColId(address);

    const cellElement = document.querySelector(`.cell[rowId="${rowId}"][colId="${colId}"]`);
    const cellProperties = sheetDB[rowId][colId];

    return {
        cellElement,
        cellProperties
    }
}

function addEventListenerOnCellProperties() {
    boldIcon.addEventListener("click", () => {
        const { cellElement, cellProperties } = getActiveCellElementAndProperties();
    
        cellProperties.isBold = !cellProperties.isBold;
        cellElement.style.fontWeight = cellProperties.isBold ? "bold" : "normal";
        boldIcon.style.backgroundColor = cellProperties.isBold ? activePropertyBgColor : inactivePropertyBgColor;
    })
    
    italicIcon.addEventListener("click", () => {
        const { cellElement, cellProperties } = getActiveCellElementAndProperties();
    
        cellProperties.isItalic = !cellProperties.isItalic;
        cellElement.style.fontStyle = cellProperties.isItalic ? "italic" : "normal";
        italicIcon.style.backgroundColor = cellProperties.isItalic ? activePropertyBgColor : inactivePropertyBgColor;
    })
    
    underlineIcon.addEventListener("click", () => {
        const { cellElement, cellProperties } = getActiveCellElementAndProperties();
    
        cellProperties.isUnderline = !cellProperties.isUnderline;
        cellElement.style.textDecoration = cellProperties.isUnderline ? "underline" : "none";
        underlineIcon.style.backgroundColor = cellProperties.isUnderline ? activePropertyBgColor : inactivePropertyBgColor;
    })
    
    fontSize.addEventListener("change", () => {
        const { cellElement, cellProperties } = getActiveCellElementAndProperties();
    
        cellProperties.fontSize = fontSize.value;
        cellElement.style.fontSize = cellProperties.fontSize + "px";
    })
    
    fontFamily.addEventListener("change", () => {
        const { cellElement, cellProperties } = getActiveCellElementAndProperties();
    
        cellProperties.fontFamily = fontFamily.value;
        cellElement.style.fontFamily = cellProperties.fontFamily;
    })
    
    textColorPicker.addEventListener("input", () => {
        const { cellElement, cellProperties } = getActiveCellElementAndProperties();
    
        cellProperties.textColor = textColorPicker.value;
        cellElement.style.color = cellProperties.textColor;
    })
    
    cellBgColorPicker.addEventListener("input", () => {
        const { cellElement, cellProperties } = getActiveCellElementAndProperties();
    
        cellProperties.bgColor = cellBgColorPicker.value;
        cellElement.style.backgroundColor = cellProperties.bgColor;
    })
    
    leftAlignIcon.addEventListener("click", () => {
        const { cellElement, cellProperties} = getActiveCellElementAndProperties();
    
        cellProperties.alignment = "left";
        cellElement.style.textAlign = cellProperties.alignment;
    
        leftAlignIcon.style.backgroundColor = activePropertyBgColor;
        centerAlignIcon.style.backgroundColor = inactivePropertyBgColor;
        rightAlignIcon.style.backgroundColor = inactivePropertyBgColor;
    })
    
    centerAlignIcon.addEventListener("click", () => {
        const { cellElement, cellProperties} = getActiveCellElementAndProperties();
    
        cellProperties.alignment = "center";
        cellElement.style.textAlign = cellProperties.alignment;
    
        centerAlignIcon.style.backgroundColor = activePropertyBgColor;
        leftAlignIcon.style.backgroundColor = inactivePropertyBgColor;
        rightAlignIcon.style.backgroundColor = inactivePropertyBgColor;
    })
    
    rightAlignIcon.addEventListener("click", () => {
        const { cellElement, cellProperties} = getActiveCellElementAndProperties();
    
        cellProperties.alignment = "right";
        cellElement.style.textAlign = cellProperties.alignment;
        
        rightAlignIcon.style.backgroundColor = activePropertyBgColor;
        centerAlignIcon.style.backgroundColor = inactivePropertyBgColor;
        leftAlignIcon.style.backgroundColor = inactivePropertyBgColor;
    })    
}

function addEventListenerOnCells() {
    for(let i = 0; i < cells.length; i++) {
        const cell = cells[i];

        cell.addEventListener("click", () => {
            // update cell props header
            const rowId = cell.getAttribute("rowId");
            const colId = cell.getAttribute("colId");

            const cellProperties = sheetDB[rowId][colId];

            fontFamily.value = cellProperties.fontFamily;
            fontSize.value = cellProperties.fontSize;
            boldIcon.style.backgroundColor = cellProperties.isBold ? activePropertyBgColor : inactivePropertyBgColor;
            italicIcon.style.backgroundColor = cellProperties.isItalic ? activePropertyBgColor : inactivePropertyBgColor;
            underlineIcon.style.backgroundColor = cellProperties.isUnderline ? activePropertyBgColor : inactivePropertyBgColor;

            leftAlignIcon.style.backgroundColor = inactivePropertyBgColor;
            centerAlignIcon.style.backgroundColor = inactivePropertyBgColor;
            rightAlignIcon.style.backgroundColor = inactivePropertyBgColor;

            if(cellProperties.alignment === "left") {
                leftAlignIcon.style.backgroundColor = activePropertyBgColor;
            } else if(cellProperties.alignment === "center") {
                centerAlignIcon.style.backgroundColor = activePropertyBgColor;
            } else {
                rightAlignIcon.style.backgroundColor = activePropertyBgColor;
            }
        })
    }
}

addDefaultPropertiesToEachCell();
addEventListenerOnCellProperties();
addEventListenerOnCells();

