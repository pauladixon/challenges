// loops and conditionals


// count instances in an array

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
        // => 2



// conditionals within a for loop over an array of objects

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
                console.log('sorry, mr. ' + nightClubRegister[i].lastname + ', you may not come in.')
            }
        } else {
            if (nightClubRegister[i].age >= 21){
                console.log('hello ms. ' + nightClubRegister[i].lastname + ', you may come in.')
            } else {
                console.log('sorry, ms. ' + nightClubRegister[i].lastname + ', you may not come in.')
            }
        }
    }

    // => hello mr. Abdool, you may come in.
    //    sorry, ms. Morgan, you may not come in.
    //    hello ms. Brown, you may come in.
    //    sorry, mr. Forrester, you may not come in.



// methods within objects

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

    paula.sayGreeting()
        // => 'sup'


// more conditionals 

    let username = 'rick123'
    let password = 'aL8#klfo'
    let enteredUsername = 'rick123'
    let enteredPassword = '123'

    // my solution: 
        if (enteredUsername !== username){
            console.log('the username you entered is incorrect')
        } else if (enteredPassword !== password){
            console.log('the password you entered is incorrect')
        } else if (enteredUsername === username && enteredPassword === password){
            console.log('access granted!')
        } else {
            console.log('please try again')
        }

        // => 'the password you entered is incorrect'
    
    // scrimba solution:

        if (!enteredUsername || !enteredPassword) {
            console.log('please provide username and password')
        } else {
            if (enteredUsername === username && enteredPassword === password){
                console.log('access granted')
            } else {
                console.log('either username or password are incorrect. try again')
            }
        }

        // => 'either username or password are incorrect. try again.'



// modulus / template literals example

    const people = 8

    for (let i=1; i <= people; i++){
        if (i%2 === 0) {
            console.log(`person ${i} is on the blue team`)
        } else console.log (`person ${i} is on the red team`)
    }

    // =>
        // person 1 is on the red team
        // person 2 is on the blue team
        // person 3 is on the red team
        // person 4 is on the blue team
        // person 5 is on the red team
        // person 6 is on the blue team
        // person 7 is on the red team
        // person 8 is on the blue team

