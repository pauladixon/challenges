// array methods


// slice 

    // makes a new array while keeping the same content in the original array

let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter']
let newPlanets = planets.slice(3, 5)

    // console.log(newPlanets) => ['Mars', 'Jupiter']
    // console.log(planets) => ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter']




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
