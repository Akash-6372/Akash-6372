const form=document.querySelector('form');
form.addEventListener('submit',function(e){
  e.preventDefault();
  const height= parseInt(document.querySelector('#height').value);
 const weight=parseInt(document.querySelector('#weight').value);
 const result=document.querySelector('#results')
 if(height==='' || height <0  || isNaN(height)){
  result.innerHTML=`Enter a valid height${height}`
 }
 else if(weight=== ''|| weight <0 ||isNaN(weight)){
  result.innerHTML=`Enter a valid weight ${weight}`
 }
 else{
  const bmi=weight/((height*height)/10000).toFixed(2)
  result.innerHTML=`${bmi}`
  if(bmi<18.5){
  result.style.backgroundColor="red"
  }
  else if(bmi>18.5 && bmi<25){
    result.style.backgroundColor="green";
  }
  else if(bmi>25&&bmi<30){
    result.style.backgroundColor="orange"

  }
  else{
    result.style.backgroundColor="blue"
  }
  
 }

})