const box = document.querySelector(".slide-items");
const leftBtn = document.querySelector(".left-arrow");
const rightBtn = document.querySelector(".right-arrow");

let menuSlide = Array.from(document.querySelectorAll(".slide-items > li"));
let menuIndex =  menuSlide.length;
let menuList = 0;
let backMenu = 5;

console.log(menuIndex);


function move (){
    menuList++;
    menuList %= menuIndex;
    box.style.marginLeft = -35 * menuList + "%";
    console.log(menuList);
}

function backmove(){
    if(menuList == 0){
       return
    }else{
        menuList--;
        menuList %= menuIndex;
        box.style.marginLeft = -35 * menuList + "%";
    }
}


leftBtn.addEventListener("click", backmove);
rightBtn.addEventListener("click", move);