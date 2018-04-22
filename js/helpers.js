function makeBoard(board) {
    //render of t
    let boardString = '';
    for (let i = 0; i < board.length; i++) {
         boardString += '<div class="hex-row n' + i + '">';
        for (let j = 0; j < board[i].length; j++) {
            boardString += ' <div class="hex"> <div class="top"></div> <div class="middle"></div> <div class="bottom"></div> </div>';
        }
        boardString += '</div>';
    }
    document.getElementsByClassName('board')[0].innerHTML = boardString;
    //action of the event of click
    let hexagonos = document.getElementsByClassName('hex');
    for (let index = 0; index < hexagonos.length; index++) {
        hexagonos[index].onclick = function () {
            const column = index % board.length;
            const line = (index - column) / board[0].length;
            markPosition(board, line, column);   
        };

    }
}
function markPosition(board, line, column) {
    if (board[line][column] === 0) {
        const hexagonos = document.getElementsByClassName('hex');
        board[line][column] = 1;
        hexagonos[(line * board.length) + column].className = 'hex selected';           
    };
}