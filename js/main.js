
// pacman

// const squares = Array.from(document.querySelectorAll('.grid div'))

// const layout = [
//     1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
//     1,3,1,2,2,2,1,1,1,1,1,1,2,2,2,2,3,1,
//     1,2,2,2,1,2,2,2,2,2,2,2,2,1,1,1,2,1,
//     1,1,1,1,1,2,1,1,1,1,1,1,2,1,1,1,1,1,
//     1,2,2,2,2,2,0,0,0,0,0,0,2,2,2,2,2,1,
//     1,1,1,1,2,1,1,1,0,0,1,1,1,2,1,1,1,1,
//     1,1,2,1,2,1,1,5,0,0,7,1,1,2,1,2,1,1,
//     1,1,2,2,2,1,1,6,0,0,8,1,1,2,2,2,1,1,
//     1,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,
//     2,2,2,2,2,2,2,2,2,4,2,2,2,2,2,2,2,2,
//     1,1,2,1,1,1,1,1,1,2,1,1,1,1,1,2,1,1,
//     1,2,2,2,2,2,2,1,1,2,1,2,2,2,2,2,2,1,
//     1,2,1,2,1,1,2,1,1,2,1,1,2,1,1,1,2,1,
//     1,2,1,2,1,1,2,1,1,2,2,2,2,1,2,1,2,1,
//     1,2,1,2,1,1,2,1,1,2,1,1,2,1,2,1,2,1,
//     1,2,1,2,1,1,2,1,1,2,1,1,1,1,2,1,2,1,
//     1,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,1,
//     1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
// ]

// for (let i = 0; i < squares.length; i++) {
//     if (layout[i] === 1) squares[i].classList.add('wall')
//     if (layout[i] === 2) squares[i].classList.add('pac-dot')
//     if (layout[i] === 3) squares[i].classList.add('power-pellet')
//     if (layout[i] === 4) squares[i].classList.add('pac-man')
//     if (layout[i] === 5) squares[i].classList.add('blinky')
//     if (layout[i] === 6) squares[i].classList.add('inky')
//     if (layout[i] === 7) squares[i].classList.add('pinky')
//     if (layout[i] === 8) squares[i].classList.add('clyde')
// }

const width = 28
const grid  = document.querySelector('.grid')
const score = document.querySelector('#score')
let squares = []
const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1 
]


function createBoard() {
    for (let i=0; i<layout.length; i++){
        const square = document.createElement('div')
        grid.appendChild(square)
        squares.push(square)

        if (layout[i] === 0){
            squares[i].classList.add(pac-dot)
        }
    }
}

createBoard()






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


// list shift

const leftButton = document.querySelector('#left')
const rightButton = document.querySelector('#right')
const waitListDisplay = document.querySelector('#first-list')
const hereListDisplay = document.querySelector('#second-list')

const waitList = ['furterer volumizers', 'bloomscape plant', 'bombas socks', 'dsw uggs', 'dyson replacement']
const hereList = ['scratching post', 'rose toner']

function moveRight(){
    let package = hereList.pop()
    waitList.push(package)
    waitListDisplay.innerHTML = waitList
    hereListDisplay.innerHTML = hereList
}

rightButton.addEventListener('click', moveRight)

function moveLeft(){
    let package = waitList.pop()
    hereLisst.unshift(package)
    waitListDisplay.innerHTML = waitList
    hereListDisplay.innerHTML = hereList
}

leftButton.addEventListener('click', moveLeft)

waitListDisplay.innerHTML = waitList
hereListDisplay.innerHTML = hereList