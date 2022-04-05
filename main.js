const submitBtn=document.querySelector('.submitForm')
const result=document.querySelector('.result')
const userval=document.querySelector('.uservalue')
const compval=document.querySelector('.compvalue')
// let turns=0
const input=document.querySelector('#input')
let userInput=null
input.addEventListener('change',(e)=>{
  userInput=+e.target.value

})
submitBtn.addEventListener('submit',(e)=>{
    e.preventDefault()
    const computerNumber=Math.floor(Math.random()*100)
    userval.innerText=userInput
    compval.innerText=computerNumber
    console.log(computerNumber,userInput)
    if(computerNumber===userInput){
           result.innerText='🥳 Oh ! Congratulations your predection is correct'
    }else if(Math.abs(computerNumber+5-userInput)<=5||Math.abs(computerNumber-5)<=5){
        result.innerText=' 😎 Oh ! predection is so near '
    }else{
        result.innerText=' 😔 Oh ! predection is so far '
    }
    input.value=''
})