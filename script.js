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
    const _bindEvents = () => {
    };
    function _render(event) {
        console.log(event.target);
        event.target.textContent = 'X';
    };

    const  _populateArray = () => {
        for(i = 0; i < 9; i++){ arrayGameElements[i] = gameElement(i);}
    };
    const getGameElement = index => arrayGameElements[index];
    _populateArray();
    console.table(arrayGameElements);
})();


