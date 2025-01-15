let count = 1;
let gameState = 0;

function checkIfDone() {
    const cells = document.querySelectorAll('#ttt td');
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const line of lines) {
        const [a, b, c] = line;
        if (
            cells[a].textContent &&
            cells[a].textContent === cells[b].textContent &&
            cells[a].textContent === cells[c].textContent
        ) {
            return true;
        }
    }
    return false;
}

function resetBoard() {
    count = 1;
    gameState = 0;
    const cells = document.querySelectorAll('#ttt td');
    cells.forEach(cell => {
        cell.textContent = '';
        cell.style.backgroundColor = 'white';
    });
    console.log('Game has been reset.');
}

function cellClicked(cell) {
    if (gameState === 1 || cell.textContent) return;

    cell.textContent = count % 2 === 0 ? 'X' : 'O';
    cell.style.backgroundColor = '#f0f8ff';

    if (checkIfDone()) {
        gameState = 1;
        alert(`Player ${count % 2 === 0 ? 'X' : 'O'} wins!`);
        return;
    }

    count++;
    if (count === 10) {
        alert("It's a draw!");
    }
}
