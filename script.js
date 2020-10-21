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
    const _render =  e => {
        if(e.target.textContent != ''){console.log("space already filled");}
        else {
            e.target.textContent = _lastValue === 'O'? 'X' : 'O';
            _lastValue = e.target.textContent;
            let temp = e.target.id.replace( /^\D+/g, '');
            console.log(temp);
            
        }
    };
    const  _populateArray = () => {for(i = 0; i < 9; i++) {arrayGameElements[i] = gameElement(i);} };
    const getGameElement = index => arrayGameElements[index];
    const resetBoard = () => {};
    _populateArray();
    console.table(arrayGameElements);
    //Reserved methods:
    const _cacheDom = index => {};
    const _bindEvents = () => {};


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
