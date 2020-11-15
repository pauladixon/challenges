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
            
            fetch(userApi)
            .then(response=>response.json())
            .then(json=>{

                const firstUser = json.results[0].name.first

                fetch(userApi)
                .then(response=>response.json())
                .then(json=>{

                    const secondUser = json.results[0].name.first
                    
                    console.log(`${firstUser} and ${secondUser} are friends`)
                })
            })
        })

        // => 'Giulia' and Dylan are friends!'
    


// handle errors with catch for both async and promises if api call is invalid

    // promises with catch
        
        document.getElementById('x').addEventListener('click', () => {

            const userApi = 'https://randomuser.me/apii'

            fetch(userApi)
            .then(response=>response.json())
            .then(json=>{

                console.log('promise chaining:', json.results[0].name.first)
            })
            .catch(err=> console.log(err))
        })
        
            // => SyntaxError: Unexpected token N in JSON at position 0 (SyntaxError: Unexpected token N in JSON at position 0:33)
        

    // async with catch

        document.getElementById('y').addEventListener('click', async ()=> {

            const userApi = 'https://randomuser.me/api/'

            try {
                const reposne = await fetch(userApi)
                const json = await response.json()
                console.log('async/await:', json.results[0].name.first)
            } catch (err) {
                console.log(err)
            }
        })

            // => TypeError: Failed to fetch (/index.js:17)



// promise states

    // successful promise

        function successfulPromise() {
            return new Promise((resolve, reject) => {
                resolve('success')
            })
        }

        let practice = async () => {
            try {
                const result = await successfulPromise()
                console.log(result)
            } catch (err) {
                console.log(err)
            }
        }

        practice()
            // => success


    // rejected promise

        function rejectedPromise() {
            return new Promise((resolve, reject) => {
                reject(new Error('error'))
            })
        }

        let practice = async () => {
            try {
                const result = await rejectedPromise()
                console.log(result)
            } catch (err) {
                console.log(err)
            }
        }

        practice()
            // => Error: error (/index.js:3)


    // pending promise

        function pendingPromise() {
            return new Promise((resolve, reject) => {
                const interval = setInterval(() => {
                    console.log('pending')
                }, 1000)
                setTimeout(() => {
                    clearInterval(interval)
                    resolve('success after 4 seconds')
                }, 4000);
            })
        }

        let practice = async () => {
            try {
                const result = await pendingPromise()
                console.log(result)
            } catch (err) {
                console.log(err)
            }
        }

        practice()
            // => pending
            //    pending
            //    pending
            //    pending
            //    success after 4 seconds



// resolve or reject after 4 seconds based on random boolean

    // my solution

        const randomBool = Boolean(Math.round(Math.random())) // returns either 0 or 1 

        function isHeroHere() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (randomBool === true) {
                        resolve('batman is here')
                    } else {
                        reject(new Error('hero is on vacation'))
                    }
                }, 4000)
            })
        }

        let result = async () => {
            try {
                const result = await isHeroHere()
                console.log(result)
            } catch(err){
                console.log(err)
            }
        }

        result()
            // => batman is here
            //    Error: hero is on vacation (/index.js:16)
            //    (randomized)



// using the promise finally method

    const promise = () => {
        return new Promise((resolve,reject)=>{
            reject(new Error('Something went wrong'))
        })
    }

    let result = async () => {
        try {
            const success = await promise()
            console.log(success)
        } catch (err) {
            console.log(err)
        } finally {
            console.log('nah')
        }
    }

    result()
        // => Error: Something went wrong (/index.js:3)
        //    nah