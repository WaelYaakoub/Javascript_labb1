
// modifiera sum() tills testet blir godkänt!
function sum(a, b) {
    return a + b
}

function myOwnMultiplyFunction(x, y) {
    return x * y
    console.log("test")
}

// denna måste exporteras längst ned i denna fil! annars kan labb.test.js inte importera den.
function isBelowZero(number) {
    if (number < 0) return true
    else return false
}

function roundNumber(number) {
    return Math.round(number)
}

// fortsätt skapa alla lösningar som beskrivs i labb.test.js och exportera dem!
function addNumbers(insertNumber) {
    let count = 0
    for (let i = 0; i <= insertNumber; i++) {
        count += i

    }
    return count
}


function findMinMaxvalue(numArray) {
    let min = Math.min(...numArray)
    let max = Math.max(...numArray)
    return { min, max }
}

function CheckXmas(date) {
    if (date >= '2020-12-24') return true

    else return false
}

function sortByLength(stringArray) {

    let checkString = stringArray.sort((longest, shortest) => longest.length - shortest.length)
    return checkString
}

function findChar(letter, text) {

    let count = 0

    for (let i = 0; i < text.length; i++) {

        if (text.charAt(i).toLowerCase() == letter) {
            count += 1
        }

    }
    return count


}

function filterOutNumber(array) {

    let numbersOnly = (val) => {
        if (Number.isFinite(val)) {
            return true
        } else return false
    }
    let numbers = array.filter(numbersOnly)

    return numbers

}

function sortNumbers(numberArray, number) {

    if (number === 1) {

        return numberArray.sort(function (a, b) { return a - b })
    }

    if (number === -1) {

        return numberArray.sort(function (a, b) { return b - a })
    }
}


function personFactory(firstname, lastname) {

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)

    }

    firstname = capitalizeFirstLetter(firstname)
    lastname = capitalizeFirstLetter(lastname)

    const person = {
        firstname: firstname,
        lastname: lastname,
        fullname: `${firstname} ${lastname}`,
        initials: `${firstname.charAt(0)}.${lastname.charAt(0)}`
    }
    return person
}

function doublePrice(array) {
    array.forEach(element => {

        element.price = element.price * 2

    });
    return array

}

function checkAnd(a, b) {
    if (a === true)
        if (b === true)
            return true
        else return false
}

function removeLeadingTrailing(string) {
    return parseFloat(string) //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat

}

function getKeysAndValues(array) {
    const keysAndValues = {
        keys: Object.keys(array),
        values: Object.values(array)
    }
    return keysAndValues
}

//etc...


// https://eloquentjavascript.net/10_modules.html#h_N33QHgUxbG how require and modules work in JavaScript
module.exports.sum = sum
module.exports.multiply = myOwnMultiplyFunction
module.exports.isBelowZero = isBelowZero
module.exports.round = roundNumber
module.exports.addingUp = addNumbers
module.exports.findMinMax = findMinMaxvalue
module.exports.afterXmasEve2020 = CheckXmas
module.exports.sortByStringLength = sortByLength
module.exports.charCounter = findChar
module.exports.numbersOnly = filterOutNumber
module.exports.sortNumbers = sortNumbers
module.exports.personFactory = personFactory
module.exports.doublePrice = doublePrice
module.exports.and = checkAnd
module.exports.removeLeadingTrailing = removeLeadingTrailing
module.exports.getKeysAndValues = getKeysAndValues
