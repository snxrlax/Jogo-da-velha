document.addEventListener('DOMContentLoaded', ()=>{

    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{
        square.addEventListener('click', handleClick);
    })
});

function handleClick(event){
    console.log(event.target.id)
    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {

        setTimeout(() => {
            let result = document.getElementById('result');
            result.innerHTML = `<p>O jogo acabou! O vencedor foi o jogador ${playerTime}</p>`
        }, 25);

    };
    updateSquare(position);
};

function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
};