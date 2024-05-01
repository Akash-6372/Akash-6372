document.getElementById("roll").onclick=function(){
    const numberOfDice=document.getElementById("numberOfDice").value;
    const showDice=document.getElementById("showDice")
    const showImage=document.getElementById("showImage")
    let values=[];
    let images=[];
    for(let i=1;i<= numberOfDice;i++){
        let value=Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="${value}.png"`)
    }
    showDice.innerHTML=values
    showImage.innerHTML=images

}