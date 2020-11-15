// async and promises




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



// using async / await

document.getElementById("action").addEventListener("click", async ()=>{
    
    const userApi = 'https://randomuser.me/api/'
    
    let response1 = await fetch(userApi)
    let results1 = await response1.json()
    let firstUser = results1.results[0].name.first
    
    let response2 = await fetch(userApi)
    let results2 = await response2.json()
    let secondUser = results2.results[0].name.first
    
    console.log(`${firstUser} and ${secondUser} are friends!`)
})

// using promise chain

document.getElementById("action").addEventListener("click", ()=>{
    
    const userApi = 'https://randomuser.me/api/'
    
    fetch(userApi).then(response=>response.json()).then(json=>{
        const firstUser = json.results[0].name.first
        fetch(userApi).then(response=>response.json()).then(json=>{
            const secondUser = json.results[0].name.first
            console.log(`${firstUser} and ${secondUser} are friends`)
        })
    })
})
    
    