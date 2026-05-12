const a = 29
const name = 'John Doe'
const dob = '01/01/1990'
function sayName() { 
    console.log(`My name is ${name}`)
}
function isabove18() {  
    if (a > 18) {
        console.log('You are above 18')
    } else {
        console.log('You are below 18')
    }
}
function calculateAge() {
    const currentYear = new Date().getFullYear()
    const birthYear = parseInt(dob.split('/')[2])
    const age = currentYear - birthYear
    console.log(`You are ${age} years old`)
}