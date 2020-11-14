

let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter']
let newPlanets = planets.slice(3, 5)
newPlanets = ['Mars', 'Jupiter']


let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter']
planets.push('Saturn')
planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn']

let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter']
planets.unshift('Moon')
planets = ['Moon', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter']


let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn']
let removedPlanet = planets.pop()
removedPlanet = ['Saturn']
planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter']

let planets = ['Moon', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter']
let removedPlanet = planets.shift()
removedPlanet = ['Moon']
planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter']



let planets = ['Moon', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter']
let location = planets.indexOf('Moon')
location = 0 

let planets = ['Moon', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter']
let boolean = planets.includes('Moon')
boolean = true


let moon = 'Moon'
let padded = moon.padStart(10, 'a')
padded = 'aaaaaaMoon'
let padTry = moon.padStart(10)
padTry = '      Moon'

let moon = 'Moon'
let padded = moon.padEnd(10, 'a')
padded = 'Moonaaaaaa'
let padTry = moon.padEnd(1)
padTry = 'Moon'




const shopInventory = ['milk', 'cheddar', 'mustard', 'ketchup', 'olive oil', 'cheddar', 'milk', 'garlic', 'mayo', 'carrots', 'cheddar', 'mustard', 'mayo', 'orange juice']

 
let countMustard = function(){
    let number = 0
    for (let i=0; i<shopInventory.length; i++){
        if (shopInventory[i] == 'mustard') {
            number++
        }
    }
    console.log(number)
}
 
countMustard()


const nightClubRegister = [
    {
        name: 'Ahmed',
        lastname: 'Abdool',
        age: 25,
        gender: 'male'
    },
    {
        name: 'Sally',
        lastname: 'Morgan',
        age: 18,
        gender: 'female'
    },
    {
        name: 'Dionne',
        lastname: 'Brown',
        age: 29,
        gender: 'female'
    },
    {
        name: 'Max',
        lastname: 'Forrester',
        age: 20,
        gender: 'male'
    }
]

for (let i=0; i<nightClubRegister.length; i++){
    if (nightClubRegister[i].gender === 'male'){
        if (nightClubRegister[i].age >= 21){
            console.log('hello mr. ' + nightClubRegister[i].lastname + ', you may come in.')
        } else {
            console.log('sorry, mr. ' + nightClubRegister[i].lastname + ', you may not come in')
        }
    } else {
        if (nightClubRegister[i].age >= 21){
            console.log('hello ms. ' + nightClubRegister[i].lastname + ', you may come in.')
        } else {
            console.log('sorry, ms. ' + nightClubRegister[i].lastname + ', you may not come in')
        }
    }
}

let c;

let x = function (a, b) {
    a + b == c
    return x
}


let paula = {
    name: 'paula',
    age: 30,
    friends: ['joann', 'mattie', 'kent'],
    isPetOwner: true,
    greeting: 'sup',
    sayGreeting: function(){
        console.log(this.greeting)
    }
}



let username = 'rick123'
let password = 'aL8#klfo'
let enteredUsername = 'rick123'
let enteredPassword = '123'

if (enteredUsername !== username){
    console.log('the username you entered is incorrect')
} else if (enteredPassword !== password){
    console.log('the password you entered is incorrect')
} else if (enteredUsername === username && enteredPassword === password){
    console.log('access granted!')
} else {
    console.log('please try again')
}



if (!enteredUsername || !enteredPassword) {
    console.log('please provide username and password')
} else {
    if (enteredUsername === username && enteredPassword === password){
        console.log('access granted')
    } else {
        console.log('either username or password are incorrect. try again')
    }
}

for (let i = 0; i <= 100; i++){
    console.log(i+'mississippi')
}

let myArray = [1, 2, 3, 4, 5, 6, 7, 9, 10]
for (let i = 0; i < myArray.length; i++){
    console.log(myArray[i])
}

const people = 56

for (let i=1; i <= people; i++){
    if (i%2 === 0) {
        console.log('blue team')
    } else console.log ('red team')
}