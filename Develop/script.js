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
  if(isNaN(passlength)=true||passlength<8||passlength>128){
    alert('your password needs to be a # between 8 and 128')
    passPromt()
  }
}








document.getElementById('generate').addEventListener('click', () => {
  passPromt()

})
