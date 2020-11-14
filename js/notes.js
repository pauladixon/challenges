

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






const userData = (data) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const error = false
            if(error){
                reject('user data not found')
            } else {
                resolve(`here is your data: ${data}`)
            }
        }, 4000)
    })
}

userData(':-)')
    .then((yes) => console.log(yes))
    .catch((error) => console.log(error))



const userData2 = new Promise((resolve, reject) => {
    const error = false;
    
    if(error) {
        reject('500 Level Error')
    } else {
        resolve({
            firstName: 'Dylan',
            age: 32,
            email: 'DylansEmail310@gmail.com'
        })
    }
})

userData2
    .then((data) => console.log(data))
    .catch((error) => console.log(error))






fetch('https://jsonplaceholder.typicode.com/comments/1')
    .then(response => response.json())
    .then(data => console.log(data))
    
    
fetch('https://jsonplaceholder.typicode.com/comments', {
    method: 'POST',
    body: JSON.stringify({
        postId: 1,
        name: 'paula',
        email: 'pppdixon@gmail.com',
        body: 'sup'
    })
})
    .then(response => response.json())
    .then(data => console.log(data))





const photos = []

async function photoUpload() {
    let uploadStatus = new Promise((resolve, reject) => {
        setTimeout(() => {
            photos.push('profile pic')
            resolve('photo has been uploaded')
        }, 3000)
    })

    let result = await uploadStatus
    console.log(result)
    console.log(photos.length)
}

photoUpload()



const apiUrl = "https://api.chucknorris.io/jokes/random"

async function printJoke() {
    let response = await fetch(apiUrl)
    let joke = await response.json()
    console.log(joke.value)
}

printJoke()



// js challenges


function arrayReplace(array, elemToReplace, substitutionElem) {
    for (let i=0; i<array.length; i++) {
        if (array[i] === elemToReplace) {
            array[i] = substitutionElem
        }
    }
    return array
}

arrayReplace([1,2,1], 1, 3)




function caseInsensitivePalindrome(str) {
    let lowercase = str.toLowerCase()
    let result = 0
    for (i=0; i<lowercase.length; i++){
        if (lowercase[i] === lowercase[lowercase.length - (i+1)]) {
            result += 0
        } else {
            result += 1
        }
    }
    if (result > 0){
        return false
    } else {
        return true
    }
}

function caseInsensitivePalindrome(str) {
    const caselessStr = str.toLowerCase();
    const reversedCaselessStr = caselessStr.split('').reverse().join(''); 
    
    return caselessStr === reversedCaselessStr;
}

function caseInsensitivePalindrome(str) {
    const caselessStr = str.toLowerCase();
    let reversedCaselessStr = '';

    for(let i = caselessStr.length - 1; i >= 0; i--) {
        reversedCaselessStr += caselessStr[i];
    }
    return caselessStr === reversedCaselessStr;
}

caseInsensitivePalindrome('aaaBaaa')
