
const button=document.querySelectorAll('.buttons');
const body=document.querySelector('body');
button.forEach(function(name){
    name.addEventListener('click',function(e){
        if (e.target.id==="orange"){
            body.style.backgroundColor="orange";
        }
        else if(e.target.id==="white"){
            body.style.backgroundColor="white"
        }
        else{
            body.style.backgroundColor="green"
            
        }

    })
})


