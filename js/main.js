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