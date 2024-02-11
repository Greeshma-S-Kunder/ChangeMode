let but=document.querySelector("button");
let bod=document.querySelector("body");
let mode="light";
but.addEventListener("click",() =>{
    if(mode==="light"){
        mode="dark";
        bod.classList.add("dark");
        bod.classList.remove("light");
    }
    else{
        mode="light";
        bod.classList.add("light");
        bod.classList.remove("dark");
    }

});
let mod=document.querySelector(".mode");
but.classList.add("anothermode");

