

// js challenges


function arrayReplace(array, elemToReplace, substitutionElem) {
    for (let i=0; i<array.length; i++) {
        if (array[i] === elemToReplace) {
            array[i] = substitutionElem
        }
    }
    return array
}

arrayReplace([1,2,1], 1, 3)




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

function caseInsensitivePalindrome(str) {
    const caselessStr = str.toLowerCase();
    const reversedCaselessStr = caselessStr.split('').reverse().join(''); 
    
    return caselessStr === reversedCaselessStr;
}

function caseInsensitivePalindrome(str) {
    const caselessStr = str.toLowerCase();
    let reversedCaselessStr = ''

    for(let i = caselessStr.length - 1; i >= 0; i--) {
        reversedCaselessStr += caselessStr[i]
    }
    return caselessStr === reversedCaselessStr
}

caseInsensitivePalindrome('aaaBaaa')




function encloseInBrackets(str) {
    let array = str.split('')
    array.unshift('(')
    array.push(')')
    let newStr = array.join('')
    return newStr
}

function encloseInBrackets(str) {
    const solution1 = '(' + str + ')'
    const solution2 = `(${str})`
    const solution3 = '('.concat(str, ')')
    
    return solution3
}

encloseInBrackets('abc')



function factorialNumber(num) {
    let result = 1
    for (let i=1; i<=num; i++){
        result = result * i
    }
    return result
}

factorialNumber(21)



function firstDigit(str) {
    let array = str.split('')
    for (let i=0; i<array.length; i++){
        if (array[i] >= 0){
            return array[i]
        }
    }
}

function firstDigit(str) {
    const strNums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    const chars = str.split('')
    for(const char of chars) {
        if(strNums.includes(char)) {
            return char
        }
    }
}




function largestNumber(num) {
    let result = ''
    for (let i=0; i<num; i++){
       result = result + '9'
    }
    let int = parseInt(result)
    return int
}

function largestNumber(num) {
    let placeholder = ''
    for(let i = 0; i < num; i++) {
        placeholder = placeholder.concat('9')
    }
    return parseInt(placeholder)
}

function largestNumber(num) {
    const placeholder = '9'.repeat(num)
    return parseInt(placeholder)
}





function maxMultiple(divisor, bound) {
    let remainder = bound%divisor
    return bound - remainder
}