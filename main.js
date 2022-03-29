const submitBtn=document.querySelector('.submitForm')
let turns=0
const input=document.querySelector('#input')
let userInput=null
input.addEventListener('change',(e)=>{
  userInput=+e.target.value

})
submitBtn.addEventListener('submit',(e)=>{
    e.preventDefault()
    const computerNumber=Math.floor(Math.random()*100)
  
    console.log(computerNumber,userInput)
    if(computerNumber===userInput){
        console.log('exact predection')
    }else if(Math.abs(computerNumber+5-userInput)<=5||Math.abs(computerNumber-5)<=5){
       
        console.log('near predection')
    }else{
        console.log('far predection')
    }
    input.value=''
})