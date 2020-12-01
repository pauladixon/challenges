
// pacman game widget

const width = 28
const grid  = document.querySelector('.grid')
const scoreDisplay = document.querySelector('#score')
let score = 0
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
            squares[i].classList.add('pac-dot')
        } else if (layout[i] === 1){
            squares[i].classList.add('wall')
        } else if (layout[i] === 2){
            squares[i].classList.add('ghost-lair')
        } else if (layout[i] === 3){
            squares[i].classList.add('power-pellet')
        }
    }
}

createBoard()

let pacmanCurrentIndex = 490
squares[pacmanCurrentIndex].classList.add('pac-man')

function control(e) {
    squares[pacmanCurrentIndex].classList.remove('pac-man')
    switch(e.keyCode){
        case 40:
            if (
                !squares[pacmanCurrentIndex + width].classList.contains('ghost-lair')
                && !squares[pacmanCurrentIndex + width].classList.contains('wall') 
                && pacmanCurrentIndex + width < width * width
                ) pacmanCurrentIndex += width
        break
        case 38:
            if (
                !squares[pacmanCurrentIndex - width].classList.contains('ghost-lair')
                && !squares[pacmanCurrentIndex - width].classList.contains('wall')
                && pacmanCurrentIndex - width >= 0
                ) pacmanCurrentIndex -= width
        break
        case 37:
            if (
                !squares[pacmanCurrentIndex - 1].classList.contains('ghost-lair')
                && !squares[pacmanCurrentIndex - 1].classList.contains('wall')
                && pacmanCurrentIndex % width !== 0
                ) pacmanCurrentIndex -= 1
                if (pacmanCurrentIndex === 364){
                    pacmanCurrentIndex = 391
                }
        break
        case 39:
            if (
                !squares[pacmanCurrentIndex + 1].classList.contains('ghost-lair')
                && !squares[pacmanCurrentIndex + 1].classList.contains('wall')
                && pacmanCurrentIndex % width < width - 1
                ) pacmanCurrentIndex += 1
                if (pacmanCurrentIndex === 391){
                    pacmanCurrentIndex = 364
                }
        break
    }
    squares[pacmanCurrentIndex].classList.add('pac-man')
    pacDotEaten()
    powerPelletEaten()
    checkForWin()
    checkForGameOver()
}

document.addEventListener('keyup', control)

function pacDotEaten() {
    if (squares[pacmanCurrentIndex].classList.contains('pac-dot')){
        squares[pacmanCurrentIndex].classList.remove('pac-dot')
        score ++
        scoreDisplay.innerHTML = score
    }
}

function powerPelletEaten() {
    if (squares[pacmanCurrentIndex].classList.contains('power-pellet')){
        squares[pacmanCurrentIndex].classList.remove('power-pellet')
        score += 10
        ghosts.forEach(ghost => ghost.isScared = true)
        setTimeout(unscareGhosts, 10000)
    }
}

function unscareGhosts(){
    ghosts.forEach(ghost => ghost.isScared = false)
}

class Ghost {
    constructor(className, startIndex, speed) {
        this.className = className
        this.startIndex = startIndex
        this.speed = speed
        this.currentIndex = startIndex
        this.isScared = false
        this.timerId = NaN
    }
}

const ghosts = [
    new Ghost('blinky', 348, 250),
    new Ghost('pinky', 376, 400),
    new Ghost('inky', 351, 300),
    new Ghost('clyde', 379, 500)
]

ghosts.forEach(ghost => squares[ghost.currentIndex].classList.add(ghost.className))
ghosts.forEach(ghost => moveGhost(ghost))


function moveGhost(ghost) {
    const directions = [-1, +1, -width, +width]
    let direction = directions[Math.floor(Math.random() * directions.length)]
    ghost.timerId = setInterval(function() {

        if (
            !squares[ghost.currentIndex + direction].classList.contains('wall') 
            && !squares[ghost.currentIndex + direction].classList.contains('ghost')
        ){
            squares[ghost.currentIndex].classList.remove(ghost.className)
            squares[ghost.currentIndex].classList.remove('ghost', 'scared-ghost')

            ghost.currentIndex += direction

            squares[ghost.currentIndex].classList.add(ghost.className)
            squares[ghost.currentIndex].classList.add('ghost')

        } else direction = directions[Math.floor(Math.random() * directions.length)]

        if (ghost.isScared) {
            squares[ghost.currentIndex].classList.add('scared-ghost')
        }

        if (ghost.isScared && squares[ghost.currentIndex].classList.contains('pac-man')){
            squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
            ghost.currentIndex = ghost.startIndex
            score += 100
            squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
        }
        checkForGameOver()
        checkForWin()
    }, ghost.speed)
}

function checkForGameOver() {
    if (
        squares[pacmanCurrentIndex].classList.contains('ghost') 
        && !squares[pacmanCurrentIndex].classList.contains('scared-ghost')
    ){
        ghosts.forEach(ghost => clearInterval(ghost.timerId))
        document.removeEventListener('keyup', control)
        scoreDisplay.innerHTML = 'GAME OVER'
    }
}

function checkForWin() {
    if (score === 274) {
        ghosts.forEach(ghost => clearInterval(ghost.timerId))
        document.removeEventListener('keyup', control)
        scoreDisplay.innerHTML = 'YOU WIN'
    }
}





// move on element click - robot widget

const robot = document.querySelector('.robot')


let number = 0

function moveRobot(){
    number += 50
    robot.style.top = number + 'px'
}

robot.addEventListener('click', moveRobot)



// render on button click - quote widget

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



// list shift - packing tracking widget

const leftButton = document.querySelector('#left')
const rightButton = document.querySelector('#right')
const waitListDisplay = document.querySelector('#first-list')
const hereListDisplay = document.querySelector('#second-list')

const waitList = ['filing cabinet', ' external monitor', ' standing mat', ' desk shelf']
const hereList = ['everybody.world shorts', ' hair stuff']

function moveRight(){
    let package = hereList.pop()
    waitList.push(package)
    waitListDisplay.innerHTML = waitList
    hereListDisplay.innerHTML = hereList
}

rightButton.addEventListener('click', moveLeft)

function moveLeft(){
    let package = waitList.pop()
    hereList.unshift(package)
    waitListDisplay.innerHTML = waitList
    hereListDisplay.innerHTML = hereList
}

leftButton.addEventListener('click', moveRight)

waitListDisplay.innerHTML = waitList
hereListDisplay.innerHTML = hereList



// traffic light promises widget

let active = 0
let lights = document.querySelectorAll('.circle')

const switchLight = (currentLight) => {
    currentLight.classList.add(currentLight.getAttribute('color'))
}
const turnOffLight = (currentLight) => {
    currentLight.className = 'circle'
}
const changeLight = () => {
    return new Promise((resolve, reject) => {
        let currentLight = lights[active]
        if (active === 0){
            switchLight(currentLight)
            setTimeout(() => {
                turnOffLight(currentLight)
                active = 1
                resolve(active)
            }, 1000)
        } if (active === 1) {
            switchLight(currentLight)
            setTimeout(() => {
                turnOffLight(currentLight)
                active = 2
                resolve(active)
            }, 1000)
        } if (active === 2) {
            switchLight(currentLight)
            setTimeout(() => {
                turnOffLight(currentLight)
                active = 0
                resolve(active)
            }, 30000)
        }
    })
}
let trafficLight = async () => {
    try {
        await changeLight()
        await changeLight()
        await changeLight()
    } catch (err) {
        console.log(err)
    }
}

trafficLight()