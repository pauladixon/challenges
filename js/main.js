// let c;

// let x = function (a, b) {
//     a + b == c
//     return x
// }


// let paula = {
//     name: 'paula',
//     age: 30,
//     friends: ['joann', 'mattie', 'kent'],
//     isPetOwner: true,
//     greeting: 'sup',
//     sayGreeting: function(){
//         console.log(this.greeting)
//     }
// }


// let username = 'rick123'
// let password = 'aL8#klfo'
// let enteredUsername = 'rick123'
// let enteredPassword = '123'

// if (enteredUsername !== username){
//     console.log('the username you entered is incorrect')
// } else if (enteredPassword !== password){
//     console.log('the password you entered is incorrect')
// } else if (enteredUsername === username && enteredPassword === password){
//     console.log('access granted!')
// } else {
//     console.log('please try again')
// }



// if (!enteredUsername || !enteredPassword) {
//     console.log('please provide username and password')
// } else {
//     if (enteredUsername === username && enteredPassword === password){
//         console.log('access granted')
//     } else {
//         console.log('either username or password are incorrect. try again')
//     }
// }

// for (let i = 0; i <= 100; i++){
//     console.log(i+'mississippi')
// }

// let myArray = [1, 2, 3, 4, 5, 6, 7, 9, 10]
// for (let i = 0; i < myArray.length; i++){
//     console.log(myArray[i])
// }

// const people = 56

// for (let i=1; i <= people; i++){
//     if (i%2 === 0) {
//         console.log('blue team')
//     } else console.log ('red team')
// }

const squares = Array.from(document.querySelectorAll('.grid div'))


for (let i=0; i< squares.length; i++){
    if (i%2 === 0){
        squares[i].classList.add('even')
    } else {
        squares[i].classList.add('odd')
    }
}

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