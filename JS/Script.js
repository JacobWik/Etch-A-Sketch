document.body.onload = addElement(16, 16);
document.getElementById("resetButton").onclick = function() {resetBoard()};
document.getElementById("changeSizeButton").onclick = function() {changeSize()};


function changeSize(){
    resetBoard();
    let input = prompt("please enter your board size", 16);
    while(input > 100){
        input = prompt("maximum board size is 100", 16);
    }
    let columnArray = document.getElementsByClassName("column");
    let numberOfElementsToRemove = columnArray.length;
    for(var i = 0; i < numberOfElementsToRemove; i++) {
        console.log();
        columnArray[0].remove();
    }
    addElement(input, input);
}

function resetBoard(){
    let cellArray = document.getElementsByClassName("cell");
    for(var i = 0; i < cellArray.length; i++) {
        cellArray[i].style.backgroundColor = "";
    }
}

/*function addElement () {
    // create a new div element
    let newDiv = document.createElement("div");
    newDiv.classList.add("column");
    document.getElementById("grid").appendChild(newDiv);
    for(let i = 0; i<16;i++){
        let childDiv = document.createElement("div");
        childDiv.classList.add("cell")
        newDiv.appendChild(childDiv);
    }
  }*/

function addElement(number, timesNumber){
    for(let i = 0; i < number; i++){

        // create a new div element
        let newDiv = document.createElement("div");
        newDiv.classList.add("column");
        document.getElementById("grid").appendChild(newDiv);

        // add timesNumber divs as children to previously created div
        for(let i = 0; i < timesNumber; i++){
            let childDiv = document.createElement("div");
            childDiv.classList.add("cell")
            newDiv.appendChild(childDiv);
        }
    }
    addEventListenerToDivs();
}

function addEventListenerToDivs(){
    let cellArray = document.getElementsByClassName("cell");
    for(var i = 0; i < cellArray.length; i++) {

        cellArray[i].addEventListener("mouseover", function( event ) {
        // highlight the mouseover target
        event.target.style.backgroundColor  = "white";
      }, false);
    }
}

