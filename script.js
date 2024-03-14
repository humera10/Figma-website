// let navtoogle = document.querySelector(".nav-toogle");
// let ul = document.querySelector("ul");

// navtoogle.addEventListener("click", ()=>{
//     ul.classList.toggle("showData");
//     console.log(ul);

//     if(ul.className == "showData"){
//         document.getElementById("bar").className = "fa-solid fa-xmark";
//     }else{
//         document.getElementById("bar").className = "fa-regular fa-bars";

//     }
// })




// navbar Toggle

let openHam = document.querySelector('#openHam'); 
let closeHam = document.querySelector('#closeHam'); 
let navigationItems = document.querySelector('#navigation-items'); 
const hamburgerEvent = (navigation, close, open) => { 
    navigationItems.style.display = navigation; 
    closeHam.style.display = close; 
    openHam.style.display = open; }; 
    openHam.addEventListener('click', () => hamburgerEvent("flex", "block", "none"));
    closeHam.addEventListener('click', () => hamburgerEvent("none", "none", "block"));



// scroll Function

let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");


window.onscroll = () =>{
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset && top <offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector("header nav a[href'=' + id +']").classList.add('active');
            })
        }
    })
}

