
// pacman game widget

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
    if (e.keyCode === 40) {
        console.log('pressed down')
    }
}

document.addEventListener('keyup', control)





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