// async and promises


// return user data using promises

    // my solution

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
            .then((success) => console.log(success))
            .catch((error) => console.log(error))

            // => 'here is your data: :-)'


    // scrimba solution

        const userData2 = new Promise((resolve, reject) => {
            const error = false
            
            if(error) {
                reject('500 Level Error')
            } else {
                resolve({
                    firstName: 'Paula',
                    age: 30,
                    email: 'pppdixon@gmail.com'
                })
            }
        })

        userData2
            .then((data) => console.log(data))
            .catch((error) => console.log(error))

            // => 
                // {
                //     firstName: 'Paula',
                //     age: 30,
                //     email: 'pppdixon@gmail.com'
                // }



// fetch practice with json api

    // fetch comment from json api

        fetch('https://jsonplaceholder.typicode.com/comments/1')
            .then(response => response.json())
            .then(data => console.log(data))

            // =>
                // {postId: 1, id: 1, name: "id labore ex et quam laborum", email: "Eliseo@gardner.biz", body: "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium"}


    // post comment data to json api and print response

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

            // => {id: 501}



// promise practice with 'uploaded a photo to ig'

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
        // => 'photo has been uploaded'
        // => 1



// print random joke from chuck norris joke api

    const apiUrl = "https://api.chucknorris.io/jokes/random"

    async function printJoke() {
        let response = await fetch(apiUrl)
        let joke = await response.json()
        console.log(joke.value)
    }

    printJoke()
    // => 'Chuck Norris is so cool, ice cubes want to be exactly like him.'



// print that user1 and user 2 are friends, using the first names from the random user api, with each click of the button 

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

        // => 'Giulia' and Dylan are friends!'
    


// 