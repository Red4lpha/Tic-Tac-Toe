const gameBoard = (() => {
    let arrayGB = [];
    const gameElement = index => {
        const gridID = document.getElementById('grid'+index);
        let value = '';
        return {gridID, value};
    };
    //populates the game elements
    for(i = 0; i < 9; i++){
        arrayGB[i] = gameElement(i);
        if(i%2===0){arrayGB[i].value = 'X';}
        else{arrayGB[i].value = 'O';}
        arrayGB[i].gridID.textContent = arrayGB[i].value;
    }
    console.table(arrayGB);
})();
