
var count = 1;
var gameState = 0;


function checkIfDone(){
    var tableById = document.getElementById('ttt');
    var cells = tableById.getElementsByTagName('td');

    // check if any row is equal 
    if(cells[0].textContent === cells[1].textContent && cells[1].textContent === cells[2].textContent){
        return true;
    }
    if(cells[3].textContent === cells[4].textContent && cells[4].textContent === cells[5].textContent){
        return true;
    }
    if(cells[6].textContent === cells[7].textContent && cells[7].textContent === cells[8].textContent){
        return true;
    }
    // check if any col is equal
    if(cells[0].textContent === cells[3].textContent && cells[3].textContent === cells[6].textContent){
        return true;
    }
    if(cells[1].textContent === cells[4].textContent && cells[4].textContent === cells[7].textContent){
        return true;
    }
    if(cells[2].textContent === cells[5].textContent && cells[5].textContent === cells[8].textContent){
        return true;
    }
    // check any diagonals are equal
    if(cells[0].textContent === cells[4].textContent && cells[4].textContent === cells[8].textContent){
        return true;
    }
    if(cells[2].textContent === cells[4].textContent && cells[4].textContent === cells[6].textContent){
        return true;
    }
    // check if it is draw

    return false;
    
}

function resetBoard(){
    count = 1;
    gameState = 0;
    var cells = document.getElementById('ttt').getElementsByTagName('td');

    // Set the content of each cell to its initial value
    for (var i = 0; i < cells.length; i++) {
        var row = Math.floor(i / 3);
        var col = i % 3;
        cells[i].textContent = row.toString() + col.toString();
        cells[i].style.opacity = 0;
    }

    // Log or display a message indicating the game is reset
    console.log('Game has been reset.');
}

function changeOpacity(cell){
    cell.style.opacity = 1;
}


function cellClicked(cell){
    
    if(gameState == 0){
        if(cell.textContent == 'X' || cell.textContent == 'O'){
            console.log("Value already placed.")
            return;
        }
    
        if (count%2 == 0){
            
            var newContent = 'X';
            console.log("Even click and clicked cell " + cell.textContent);
            cell.textContent = newContent;
            changeOpacity(cell);
            
        }else{
            
            var newContent = 'O';
            console.log("Odd click and clicked cell " + cell.textContent);
            cell.textContent = newContent;
            changeOpacity(cell);
        }
    
        let b = checkIfDone();
        if( Boolean(b) == true ){
            gameState = 1;
            console.log("hmm now what");
            alert("Game won");
        }
    } else{
        console.log("game done");
        return;
    }
    count++;
    if(count == 10){
        alert("game is draw");
        console.log("completed");
    }
}