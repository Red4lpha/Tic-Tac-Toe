const gameBoard = (() => {
    const arrayGameElements = [];
    //Internal value to keep track of the current turn without input from outside
    let _lastValue = 'O';
    gameElement = index => {
        this.gridID = document.getElementById('grid'+index);
        //_bindEvents();
        this.gridID.addEventListener('click', _render.bind(this));
        this.value = '';
        return {gridID, value};
    };
    const _render = e => {
        if(e.target.textContent != ''){console.log("space already filled");}
        else {
            e.target.textContent = _lastValue === 'O'? 'X' : 'O';
            _lastValue = e.target.textContent;
            let temp = e.target.id.replace( /^\D+/g, '');
            if (temp => 0 && temp < 9) {arrayGameElements[temp].value = e.target.textContent;}
            console.log(temp);
            console.table(arrayGameElements);
        }
    };
    const  _populateArray = () => {for(i = 0; i < 9; i++) {arrayGameElements[i] = gameElement(i);} };
    const getGameElement = index => arrayGameElements[index];
    const resetBoard = () => {
        _lastValue = 'O';
        for(i = 0; i < 9; i++) {
            arrayGameElements[i].gridID.textContent = '';
            arrayGameElements[i].value = '';
        }
    };
    _populateArray();
    
    //Reserved methods:
    const _cacheDom = index => {};
    const _bindEvents = () => {};
    return {resetBoard}
})();

const player = (isFirstPlayer) => {
    const isfirstPlayer = isFirstPlayer;
    let _score = 0;
    const getScore = () => _score;
    const increaseScore = () => {_score++;};
    let _mark = isFirstPlayer ? 'X' : 'O'; 
    const getMark = () => _mark;
    
    return {getScore, increaseScore, getMark}
};

let first = player(true);
console.log(first.getScore());
const button = document.getElementById('start');
button.addEventListener('click', gameBoard.resetBoard);
