const gameBoard = (() => {
    const arrayGameElements = [];
    gameElement = index => {
        this.gridID = document.getElementById('grid'+index);
        //_bindEvents();
        this.gridID.addEventListener('click', _render.bind(this));
        this.value = '';
        return {gridID, value};
    };
    const _cacheDom = index => {
        //this.gridID = tihs.document.getElementById('grid'+index);
    };
    const _bindEvents = () => {};
    const _render =  event => {
        if(event.target.textContent != ''){console.log("space already filled");}
        else {event.target.textContent = 'X';}
    };

    const  _populateArray = () => {for(i = 0; i < 9; i++) {arrayGameElements[i] = gameElement(i);} };
    const getGameElement = index => arrayGameElements[index];
    _populateArray();
    console.table(arrayGameElements);
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
