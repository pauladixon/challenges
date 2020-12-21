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
        // => 



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



// map

    // maps a function over a whole array. does not modify the original array.

    const nums = [1, 2, 3, 4, 5]

    const numsAddOne = nums.map((value) => value + 1)

    console.log(nums)
        // -> [1, 2, 3, 4, 5]
    console.log(numsAddOne)
        // -> [2, 3, 4, 5, 6]


// filter 

    // filters out the numbers that fit the function requirement. does not modify the original array.

    const nums = [1, 2, 3, 4, 5]

    const evenNums = nums.filter((value) => value % 2 === 0)

    console.log(nums)
        // -> [1, 2, 3, 4, 5]
    console.log(evenNums)
        // -> [2, 4]


// reduce

    // reduces a nums array to equal the sum of its values, beginning with the index specified.

    const nums = [1, 2, 3, 4, 5]

    const sum = nums.reduce((total, current) => {
        return total + current
    }, 0)

    console.log(sum)
        // => 15 

    // total is also known as accumulator. in this example, 1 would be the total and 2 would be the current number, where the method cycles through the array until it adds each amount to the accumulator. 0 here represents the beginning total.

    // you can also begin with other beginning totals, like an empty array:

    const numsAddOneEvens = nums.reduce((acc, current) => {
        current = current + 1
        if(current % 2 === 0){
            acc.push(current)
        }
        return acc
    }, [])

    console.log(numsAddOneEvens)
        // => [2, 4, 6]



// spread operators

    // allows you to call on previous array or object to repeat the data in a new object

    const users =  ['paula', 'dylan', 'joann']
    const allUsers = ['tomas', ...users]
    console.log(allUsers)
        // => ['tomas', 'paula', 'dylan', 'joann']

    const user = {firstName: 'paula', lastName: 'dixon'}
    const fullUser = {...user, pets: true}
    console.log(fullUser)
        //  => {firstName: 'paula', lastName: 'dixon', pets: true}


    // the spread operator also enables you to destructure an array, for instance from defaults that were set to the data:

    const user = {firstName: 'paula', lastName: 'dixon', hometown: 'pittsburgh'}
    const defaults = {...user, hometown: 'los angeles'}
    console.log(defaults)
        //  => {firstName: 'paula', lastName: 'dixon', hometown: 'pittsburgh}
        // the object maintains its original assignments

    const {hometown, ...remainder } = defaults
    console.log(remainder)
        // => {firstName: 'paula', lastName: 'dixon'}



// rest operators

    // allows as many arguments as the user wants to pass into a function

    function addNums(...nums){
        return nums.reduce((acc, current) => { return total + current}, 0)
    }

    console.log(addNums(1, 2, 3))
        // => 6
    console.log(addNums(1, 2))
        //  => 3



