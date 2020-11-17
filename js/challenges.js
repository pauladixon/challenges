// js challenges


// replace elemToReplace within the array with substitutionElem

    function arrayReplace(array, elemToReplace, substitutionElem) {
        for (let i=0; i<array.length; i++) {
            if (array[i] === elemToReplace) {
                array[i] = substitutionElem
            }
        }
        return array
    }
    arrayReplace([1,2,1], 1, 3)
        // => [3, 2, 3]



// return true or false if the string is a palindrome, regardless of case

    // my solution

        function caseInsensitivePalindrome(str) {
            let lowercase = str.toLowerCase()
            let result = 0
            for (i=0; i<lowercase.length; i++){
                if (lowercase[i] === lowercase[lowercase.length - (i+1)]) {
                    result += 0
                } else {
                    result += 1
                }
            }
            if (result > 0){
                return false
            } else {
                return true
            }
        }

    // scrimba solution 1

        function caseInsensitivePalindrome(str) {
            const caselessStr = str.toLowerCase();
            const reversedCaselessStr = caselessStr.split('').reverse().join(''); 
            
            return caselessStr === reversedCaselessStr;
        }

    // scrimba solution 2

        function caseInsensitivePalindrome(str) {
            const caselessStr = str.toLowerCase();
            let reversedCaselessStr = ''

            for(let i = caselessStr.length - 1; i >= 0; i--) {
                reversedCaselessStr += caselessStr[i]
            }
            return caselessStr === reversedCaselessStr
        }

    caseInsensitivePalindrome('AaaBaAA')
        // => true
    caseInsensitivePalindrome('AacCBaAA')
        // => false



// enclose the string in parentheses

    // my solution

        function encloseInBrackets(str) {
            let array = str.split('')
            array.unshift('(')
            array.push(')')
            let newStr = array.join('')
            return newStr
        }

    // scrimba solutions

        function encloseInBrackets(str) {
            const solution1 = '(' + str + ')'
            const solution2 = `(${str})`
            const solution3 = '('.concat(str, ')')
            
            return solution3
        }

    encloseInBrackets('abc')
        // => '(abc)'



// return the factorial of the given number

    function factorialNumber(num) {
        let result = 1
        for (let i=1; i<=num; i++){
            result *= i
        }
        return result
    }

    factorialNumber(9)
        // => 362880



// return the first (furthest to the left) integer in a string

    // my solution 

        function firstDigit(str) {
            let array = str.split('')
            for (let i=0; i<array.length; i++){
                if (array[i] >= 0){
                    return array[i]
                }
            }
        }

    // scrimba solution

        function firstDigit(str) {
            const strNums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
            const chars = str.split('')
            for(const char of chars) {
                if(strNums.includes(char)) {
                    return char
                }
            }
        }
    
    firstDigit('abc4def5')
        // => 4



// return the largest possible number with the number of digits provided

    // my solution

        function largestNumber(num) {
            let result = ''
            for (let i=0; i<num; i++){
            result = result + '9'
            }
            let int = parseInt(result)
            return int
        }

    // scrimba solution 1

        function largestNumber(num) {
            let placeholder = ''
            for(let i = 0; i < num; i++) {
                placeholder = placeholder.concat('9')
            }
            return parseInt(placeholder)
        }

    // scrimba solution 2

        function largestNumber(num) {
            const placeholder = '9'.repeat(num)
            return parseInt(placeholder)
        }

    largestNumber(3)
        // => 999



// find the maximum divisible number of the divisor within the boundary number

    function maxMultiple(divisor, bound) {
        let remainder = bound%divisor
        return bound - remainder
    }

    maxMultiple(3, 10)
        // => 9



// pangram check function

    // my solution (DOES NOT WORK)

        let isPangram = (str) => {
            let result = 0
            let lowercase = str.toLowerCase().split('')
            let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
            for (let i=0; i<alphabet.length; i++){
                for (let j=0; j<lowercase.length; j++){
                    if (alphabet[i] == lowercase[j]){
                        result = result + 1
                    }
                }
            }
            if (result >= 26) {
                return true
            } else {
                return false
            }
        }

        isPangram('The quick brown fox jumps over the lazy dog')


    // scrimba solution 1 

        const abc = 'abcdefghijklmnopqrstuvwxyz'
        
        const isPangram = (str) => {
            const newStr = str.toLowerCase().split(' ').join('')
            const newSet = [...new Set(newStr)].sort().join('')
            return abc === newSet
        }
        
        console.log(isPangram('The quick brown fox jumps over the lazy dog'))
            // => true

    // scrimba solution 2

        const isPangram = (str) => {

            const regexMatch = new Set(str.toLowerCase().match(/[a-z]/gi))
            return regexMatch.size === 26
        }

        console.log(isPangram('The quick brown fox jumps over the lazy dog'))
        // => true



// remove duplicate values with reduce

    // my solution

        let removeDuplicateValues = (array) => {
            let reduceArray = array.reduce((acc, current) => {
                if (acc.includes(current)){
                    return acc
                } else {
                    acc = [...acc, current]
                    return acc
                }
            }, [])
            return reduceArray
        }


    // scrimba solution

        const removeDuplicateValues = (array) => {
            return array.reduce((accumulator,value)=>{
                return accumulator.includes(value) ? accumulator : [...accumulator, value]
            },[])
        }
        
        console.log(removeDuplicateValues(['one', 'one', 'two', 'three', 'three', 'one']))
            // => ['one', 'two', 'three']
                
