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

const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,3,1,2,2,2,1,1,1,1,1,1,2,2,2,2,3,1,
    1,2,2,2,1,2,2,2,2,2,2,2,2,1,1,1,2,1,
    1,1,1,1,1,2,1,1,1,1,1,1,2,1,1,1,1,1,
    1,2,2,2,2,2,0,0,0,0,0,0,2,2,2,2,2,1,
    1,1,1,1,2,1,1,1,0,0,1,1,1,2,1,1,1,1,
    1,1,2,1,2,1,1,5,0,0,7,1,1,2,1,2,1,1,
    1,1,2,2,2,1,1,6,0,0,8,1,1,2,2,2,1,1,
    1,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,
    2,2,2,2,2,2,2,2,2,4,2,2,2,2,2,2,2,2,
    1,1,2,1,1,1,1,1,1,2,1,1,1,1,1,2,1,1,
    1,2,2,2,2,2,2,1,1,2,1,2,2,2,2,2,2,1,
    1,2,1,2,1,1,2,1,1,2,1,1,2,1,1,1,2,1,
    1,2,1,2,1,1,2,1,1,2,2,2,2,1,2,1,2,1,
    1,2,1,2,1,1,2,1,1,2,1,1,2,1,2,1,2,1,
    1,2,1,2,1,1,2,1,1,2,1,1,1,1,2,1,2,1,
    1,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
]

// const shopInventory = ['milk', 'cheddar', 'mustard', 'ketchup', 'olive oil', 'cheddar', 'milk', 'garlic', 'mayo', 'carrots', 'cheddar', 'mustard', 'mayo', 'orange juice']

 
// let countMustard = function(){
//     let number = 0
//     for (let i=0; i<shopInventory.length; i++){
//         if (shopInventory[i] == 'mustard') {
//             number++
//         }
//     }
//     console.log(number)
// }
 
// countMustard()


// const nightClubRegister = [
//     {
//         name: 'Ahmed',
//         lastname: 'Abdool',
//         age: 25,
//         gender: 'male'
//     },
//     {
//         name: 'Sally',
//         lastname: 'Morgan',
//         age: 18,
//         gender: 'female'
//     },
//     {
//         name: 'Dionne',
//         lastname: 'Brown',
//         age: 29,
//         gender: 'female'
//     },
//     {
//         name: 'Max',
//         lastname: 'Forrester',
//         age: 20,
//         gender: 'male'
//     }
// ]

// for (let i=0; i<nightClubRegister.length; i++){
//     if (nightClubRegister[i].gender === 'male'){
//         if (nightClubRegister[i].age >= 21){
//             console.log('hello mr. ' + nightClubRegister[i].lastname + ', you may come in.')
//         } else {
//             console.log('sorry, mr. ' + nightClubRegister[i].lastname + ', you may not come in')
//         }
//     } else {
//         if (nightClubRegister[i].age >= 21){
//             console.log('hello ms. ' + nightClubRegister[i].lastname + ', you may come in.')
//         } else {
//             console.log('sorry, ms. ' + nightClubRegister[i].lastname + ', you may not come in')
//         }
//     }
// }