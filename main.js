const output=document.getElementById('input')
let inputNumber;
let resultDisplay=false;
let inputOperator;
let num1;

document.getElementById('clear').addEventListener('click',function(){
    output.innerText='';
    resultDisplay=false
})

const operators=document.getElementsByClassName('operators');
for(let operator of operators){
    operator.addEventListener('click',function(event){
        // console.log(event.target.innerText)
        num1=inputNumber;
        if(!inputNumber){
            output.innerText='enter number first'
            resultDisplay=true
        }else{
            inputOperator=event.target.innerText;
            output.innerText=inputNumber+event.target.innerText;
            
        }
        
    })
}
const numbers=document.getElementsByClassName('numbers')
for(let number of numbers){
    number.addEventListener('click',function(event){
        
        if(resultDisplay){
            output.innerText=''
            inputNumber=output.innerText+=event.target.innerText;
            resultDisplay=false
        }
        else if(event.target.innerText!='C'){
            inputNumber=output.innerText+=event.target.innerText;
        }
        else{
            output.innerText=''
           
            
        }
    })
}

//calculation
document.getElementById('result').addEventListener('click',function(){
    debugger;
    let num2=inputNumber.slice(num1.length+1)
    let convertNum1=parseFloat(num1)
    let convertNum2=parseFloat(num2)
   
    // × ÷ + -
 if(inputOperator=='+'){
     let result=(convertNum1+convertNum2);
     output.innerText=result
     resultDisplay=true
 }
 if(inputOperator=='-'){
     let result=convertNum1-convertNum2;
     output.innerText=result
     resultDisplay=true
 }
 if(inputOperator=='×'){
     let result=Math.round(convertNum1*convertNum2);
     output.innerText=result
     resultDisplay=true
 }
 if(inputOperator=='÷'){
     let result=convertNum1/convertNum2;
     output.innerText=result
     resultDisplay=true
 }
    
})

