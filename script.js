const colorArray= ["red", "blue", "purple", "white", "black", "pink", "green", "brown", "lightgreen", "lightblue","yellow","#f45f23"];
const btn = document.querySelector("button");
const span= document.querySelector("span");


btn.addEventListener("click", function(event){
    const randomNumber = Math.floor(Math.random()*colorArray.length);
    document.body.style.backgroundColor=colorArray[randomNumber]; 
    span.innerHTML=colorArray[randomNumber];
    
});