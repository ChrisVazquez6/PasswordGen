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
// let tentativePassword
// const passVerify = ()=>{
//  tentativePassword = passGenerate()
//  if(hasLower===true){
//    let verifiedLower = false
//    for (let i = 0; i< passlength; i++) {
//      let possibleLower = tentativePassword[i]
//      console.log(possibleLower)
//      if (possibleLower==='a'||possibleLower==='b'||possibleLower==='c'||possibleLower==='d'||possibleLower==='e'||possibleLower==='f'||possibleLower==='g'||possibleLower==='h'||possibleLower==='i'||possibleLower==='j'||possibleLower==='k'||possibleLower==='l'||possibleLower==='m'||possibleLower==='n'||possibleLower==='o'||possibleLower==='p'||possibleLower==='q'||possibleLower==='r'||possibleLower==='s'||possibleLower==='t'||
//      possibleLower==='u'||possibleLower==='v'||possibleLower==='w'||possibleLower==='x'||possibleLower==='y'||possibleLower==='z') {
//        verifiedLower=true
//      }
//     }
//      if (verifiedLower === false) {
//        console.log('no lowercase characters');
//        passVerify()
//      }

       
     
    








document.getElementById('generate').addEventListener('click', () => {
  passPromt()
  // passGenerate()
  let newpassword = passGenerate()
  console.log(newpassword);
  document.getElementById('password').innerHTML=newpassword


})
