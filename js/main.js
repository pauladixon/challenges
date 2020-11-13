
// pacman

const squares = Array.from(document.querySelectorAll('.grid div'))


// for (let i=0; i< squares.length; i++){
//     if (i%2 === 0){
//         squares[i].classList.add('even')
//     } else {
//         squares[i].classList.add('odd')
//     }
// }

const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,3,1,2,2,2,1,1,1,1,1,1,2,2,2,2,3,1,
    1,2,2,2,1,2,2,2,2,2,2,2,2,1,1,1,2,1,
    1,1,1,1,1,2,1,1,1,1,1,1,2,1,1,1,1,1,
    1,2,2,2,2,2,0,0,0,0,0,0,2,2,2,2,2,1,
    1,1,1,1,2,1,1,1,0,0,1,1,1,2,1,1,1,1,
    1,1,2,1,2,1,1,5,0,0,7,1,1,2,1,2,1,1,
    1,1,2,2,2,1,1,6,0,0,8,1,1,2,2,2,1,1,
    1,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,
    2,2,2,2,2,2,2,2,2,4,2,2,2,2,2,2,2,2,
    1,1,2,1,1,1,1,1,1,2,1,1,1,1,1,2,1,1,
    1,2,2,2,2,2,2,1,1,2,1,2,2,2,2,2,2,1,
    1,2,1,2,1,1,2,1,1,2,1,1,2,1,1,1,2,1,
    1,2,1,2,1,1,2,1,1,2,2,2,2,1,2,1,2,1,
    1,2,1,2,1,1,2,1,1,2,1,1,2,1,2,1,2,1,
    1,2,1,2,1,1,2,1,1,2,1,1,1,1,2,1,2,1,
    1,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
]

for (let i = 0; i < squares.length; i++) {
    if (layout[i] === 1) squares[i].classList.add('wall')
    if (layout[i] === 2) squares[i].classList.add('pac-dot')
    if (layout[i] === 3) squares[i].classList.add('power-pellet')
    if (layout[i] === 4) squares[i].classList.add('pac-man')
    if (layout[i] === 5) squares[i].classList.add('blinky')
    if (layout[i] === 6) squares[i].classList.add('inky')
    if (layout[i] === 7) squares[i].classList.add('pinky')
    if (layout[i] === 8) squares[i].classList.add('clyde')
}


// robot

const robot = document.querySelector('.robot')


let number = 0

function moveRobot(){
    number += 50
    robot.style.top = number + 'px'
}

robot.addEventListener('click', moveRobot)


// quotes

const quote = document.querySelector('#quote')
const button = document.querySelector('button')

const quotes = [
    "all i've got to do today is smile",
    'the only joy in the world is to begin',
    'there is no way to happiness - happiness is the way',
    'may i be peaceful, light, and happy in body and in mind'
]

function displayQuote() {

    let randomNumber = Math.floor(Math.random() * quotes.length)
    let randomQuote = quotes[randomNumber]
    quote.innerHTML = randomQuote
}

button.addEventListener('click', displayQuote)


