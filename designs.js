// Select color input
// Select size input

let color = document.querySelector("#colorPicker");
let height = document.querySelector("#inputHeight");
let width = document.querySelector("#inputWidth");
let pixel = document.querySelector("#pixelCanvas");
let size = document.querySelector("#sizePicker");

// When size is submitted by the user, call makeGrid()
color.addEventListener("click", function(){
})

size.onsubmit = function(event){
    event.preventDefault();
    removeColor();
    makeGrid();
};

function makeGrid() {
    for (let i = 0; i < height.value; i++){
        const row = pixel.insertRow(i);
        for (let j = 0; j < width.value; j++){
            const cell = row.insertCell(j);
            cell.addEventListener("click", setColor);
        }
    }
}

function removeColor(){
    while (pixel.firstChild){
         pixel.removeChild(pixel.firstChild);
    }
}


function setColor () {
    if (this.setAttribute("style", color)){
      this.removeAttribute("style", color);
    }
    else {
    this.setAttribute("style", `background-color: ${color.value}`);
    }

}