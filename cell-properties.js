const sheetDB = [];

for(let i = 0; i < rowCount; i++) {
    const rowDb = [];
    for(let j = 0; j < colCount; j++) {
        const cellProperties = {
            isBold: false,
            isItalic: false,
            isUnderline: false,
            fontFamily: "monospace",
            fontSize: 14,
            allignment: "left",
            textColor: "#000000",
            bgColor: "transparent"
        }
        rowDb.push(cellProperties);
    }
    sheetDB.push(rowDb);
}

const fontFamily = document.querySelector(".font-family-prop");
const fontSize = document.querySelector(".font-size-prop");
const boldIcon = document.querySelector(".bold-icon");
const italicIcon = document.querySelector(".italic-icon");
const underlineIcon = document.querySelector(".underline-icon");
const leftAlignIcon = document.querySelector(".left-align-icon");
const centerAlignIcon = document.querySelector(".center-align-icon");
const rightAlignIcon = document.querySelector(".right-align-icon");
const textColorPicker = document.querySelector(".text-color-picker");
const cellBgColorPicker = document.querySelector(".cell-bg-color-picker")

const addressBar = document.querySelector(".address-bar");
