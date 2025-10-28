const button=document.getElementById("btn");
const colorText=document.getElementById("color_text");
button.addEventListener("click",()=>{
    const letters="0123456789ABCDEF";
    let color="#";
    for(let i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*16)];
    }
    
    document.body.style.backgroundColor=color;
    colorText.innerText=color;
   
   
});