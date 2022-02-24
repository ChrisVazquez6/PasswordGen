let hasLower
let hasUpper
let hasNumbers
let hasSpecChars
let passlength


const passPromt = () => {
  passlength = parseInt(prompt('how long do you want your password'))
  hasLower = confirm('do you want to lowercase character')
  hasUpper =confirm('do you want to uppercase character')
  hasNumbers=confirm('do you want to Number character')
  hasSpecChars=confirm('do you want special Character')
  console.log(passlength,hasLower,hasUpper,hasNumbers,hasSpecChars)
  if(isNaN(passlength)==true||passlength<8||passlength>128){
    alert('your password needs to be a # between 8 and 128')
    passPromt()
  }
}

const passGenerate = ()=> {
  let lowerString = 'abcdefghijklmnopqrstuvwxyz'
  let upperString = 'abcdefghijklmnopqrstuvwxyz'
  let numString = '0123456789'
  let specString = '!@#$%^&*()'
  let chosenString = ''
  let password = ''

  if (hasLower === true) {
    chosenString += lowerString
  }
  if (hasUpper === true) {
    chosenString += upperString
  }
  if (hasNumbers === true) {
    chosenString += numString
  }
  if (hasSpecChars === true) {
    chosenString += specString
  }
  console.log(chosenString)

  for (let i = 0; i < passlength; i++) {
    let randomIndex = Math.floor(Math.random() * chosenString.length)
    let randomChar = chosenString[randomIndex]
    // console.log(randomChar);
    password = password + randomChar
  }
  console.log(password);
  return password
}



document.getElementById('generate').addEventListener('click', () => {
  passPromt()
  // passGenerate()
  let newpassword = passGenerate()
  console.log(newpassword);
  document.getElementById('password').innerHTML=newpassword


})
