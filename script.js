let navtoogle = document.querySelector(".nav-toogle");
let ul = document.querySelector("ul");

navtoogle.addEventListener("click", ()=>{
    ul.classList.toggle("showData");
    console.log(ul);

    if(ul.className == "showData"){
        document.getElementById("bar").className = "fa-solid fa-xmark";
    }else{
        document.getElementById("bar").className = "fa-regular fa-bars";

    }
})