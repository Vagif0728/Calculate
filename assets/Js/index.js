const output=document.getElementById('ans')


function Sum(a,b){
    var a=parseInt(document.getElementById("frstnum").value);
    var b=parseInt(document.getElementById("scndnum").value);
    return a+b
}

function Multi(a,b){
    var a=parseInt(document.getElementById("frstnum").value);
    var b=parseInt(document.getElementById("scndnum").value);
    return a*b
}


function Divi(a,b){
    var a=parseInt(document.getElementById("frstnum").value);
    var b=parseInt(document.getElementById("scndnum").value);
    return a/b
}

function Sub(a,b){
    var a=parseInt(document.getElementById("frstnum").value);
    var b=parseInt(document.getElementById("scndnum").value);
    return a-b
}

const buttonSumElement=document.getElementById("sum")
buttonSumElement.addEventListener('click',function(){
    output.innerHTML=Sum();
  
})

const buttonMultiElement=document.getElementById("multi")
buttonMultiElement.addEventListener('click',function(){
    output.innerHTML=Multi();
})

const buttonDiviElement=document.getElementById("divi")
buttonDiviElement.addEventListener('click',function(){
   output.innerHTML= Divi();
})

const buttonSubElement=document.getElementById("sub")
buttonSubElement.addEventListener('click',function(){
    output.innerHTML= Sub();
})