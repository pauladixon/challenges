// find the maximum occuring character in a string

// my solution ( doesn't work )

    function maximumOccurringCharacter(text){
        let arr = text.split('')
        let char1 = arr[0]
        let char2 = ''
        let char3 = ''
        let num1 = 0
        let num2 = 0
        let num3 = 0
        for (let i=0; i<arr.length; i++){
        if (arr[i] === char1){
            num1 ++
        } else if (arr[i] !== char1){
            char2 = arr[i]
            num2 ++
        } else if (arr[i] !== char1 && arr[i] !== char2){
            char3 = arr[i]
            num3 ++
        }
        }
        if (num1 >= num2 && num1 >= num3){
        return char1
        } else if (num2 >= num3){
        return char2
        } else return char3
    }
    
    function maximumOccurringCharacter(text){

        let count = {}
        let maxKey = ''
        for (let i=0; i< text.length; i++){
            let key = text[i]
            if (!count[key]){
                count[key] = 0
            }
            count[key]++
            if(maxKey == '' || count[key] > count[maxKey]){
                maxKey = key
            }
        }
    }


    console.log(maximumOccurringCharacter('abbbaacc'))
