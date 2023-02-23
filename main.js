const button =document.querySelector(".main__button");
const hiddenBox = document.querySelector(".wrap__box");
const x = document.getElementsByTagName("i")[0];
const boxBtn = document.querySelector(".box__button");
const body = document.getElementsByTagName("body");
button.addEventListener("click",() =>{
    hiddenBox.style.display = "block"
    button.style.display="none";
    
})
x.addEventListener("click",()=>{
    hiddenBox.style.display="none";
    button.style.display = "block"

    
})
boxBtn.addEventListener("click",()=>{
    hiddenBox.style.display="none";
    button.style.display = "block"
})

body.addEventListener("click",()=>{
    hiddenBox.style.display="none";
    button.style.display = "block"
})
