// array methods


// slice 

    // makes a new array while keeping the same content in the original array. does not modify the array

    let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter']
    let newPlanets = planets.slice(3, 5)

    console.log(planets) 
        // => ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter']
    console.log(newPlanets) 
        // => ['Mars', 'Jupiter']



// push

    // pushes a new array element to the end of the original array. modifies the array

    let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter']
    let newPlanets = planets.push('Saturn')

    console.log(planets) 
        // => ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn']
    console.log(newPlanets) 
        // => 6



// unshift

    // pushes a new array element to the beginning of the original array. modifies the array

    let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter']
    let newPlanets = planets.unshift('Moon')

    console.log(planets)
        // => ['Moon', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter']
    console.log(newPlanets) 
        // => 6



// pop

    // removes the last element of the original array and stores it. modifies the array

    let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn']
    let removedPlanet = planets.pop()

    console.log(planets) 
        // => ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter']
    console.log(removedPlanet) 
        // => 'Saturn'



// shift

    // removes the first element of the original array and stores it. modifies the array

    let planets = ['Moon', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter']
    let removedPlanet = planets.shift()

    console.log(planets) 
        // => ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter']
    console.log(removedPlanet) 
        // => 'Moon'



// indexOf

    // shows the index of a requested element in an array. does not modify the array

    let planets = ['Moon', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter']
    let location = planets.indexOf('Moon')

    console.log(planets) 
        // => ['Moon', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter']
    console.log(location) 
        // => 0
        // if you index for something that doesn't exist in the array => -1



// includes

    // gives a boolean for whether the array includes the element requested. does not modify the array

    let planets = ['Moon', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter']
    let boolean = planets.includes('Moon')

    console.log(planets) 
        // => ['Moon', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter']
    console.log(boolean) 
        // => true



// padStart

    // pads the end of a given string with the second argument until the string is the length of the first argument. does not modify the original string
    let moon = 'Moon'
    let padded = moon.padStart(10, 'a')
    let padTry = moon.padStart(10)

    console.log(moon)
        // => 'Moon
    console.log(padded) 
        // => 'aaaaaaMoon'
    console.log(padTry) 
        // => '      Moon'



// padEnd

    // pads the end of a given string with the second argument until the string is the length of the first argument. does not modify the original string
    let moon = 'Moon'
    let padded = moon.padEnd(10, 'a')
    let padTry = moon.padEnd(1)

    console.log(moon)
        // => 'Moon
    console.log(padded) 
        // => 'Moonaaaaaa'
    console.log(padTry) 
        // => 'Moon'

