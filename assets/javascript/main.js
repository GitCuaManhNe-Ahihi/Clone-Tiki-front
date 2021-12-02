
async function load() {
    var body = document.querySelector("body");
    var loadpage = document.createElement("DIV");
    loadpage.classList.toggle("loadpage");
    loadpage.style.height = "100vh";
    loadpage.style.width = "100vw";
    loadpage.style.backgroundColor = "black";
    loadpage.style.position = "fixed";
    loadpage.style.top = "0";
    loadpage.style.left = "0";
    var cube = document.createElement("DIV");
    cube.classList.toggle("cube");
    cube.style.height = "100px";
    cube.style.width = "100px";
    cube.style.backgroundColor = "#fff";
    cube.style.position = "absolute";
    cube.style.top = "50%";
    cube.style.left = "50%";
    cube.style.transform = "translate(-50%,-50%)";
    cube.style.backgroundImage = "url('./assets/images/load.gif')";
    cube.style.backgroundSize = "cover";
    loadpage.appendChild(cube);
    body.appendChild(loadpage);
    await setTimeout(function () {
        body.removeChild(loadpage);
    }, 1000);
}

//   window.addEventListener("load",load);
let inputsearch = document.querySelector("#inputsearch");
let searchCompleteAuto = document.querySelector(".searchCompleteAuto");
let StyleSuggetstion = document.querySelector(".StyleSuggetstion");
let historyKeywordItem = document.querySelector(".history-keyword-item");
let showmoresuggestion = document.querySelector(".show-more-suggest");
let BottomWidgets = document.querySelector(".BottomWidgets");
let itempromo = document.querySelector(".item-promo");
let overlay
let buttonbarleft = document.querySelector(".fa-chevron-left");
let buttonbarright = document.querySelector(".fa-chevron-right");
let navigationBaritems = document.querySelector(".navigationBar__items");


inputsearch.addEventListener('focus', () => {
    searchCompleteAuto.style.display = "block";
    overlay = document.createElement("DIV");
    overlay.style.height = "100vh";
    overlay.style.width = "100vw";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.zIndex = "1";
    overlay.position = "absolute";
    document.body.appendChild(overlay);
    overlay.addEventListener('click', () => {
        searchCompleteAuto.style.display = "none";
        overlay.remove();
    })


})
let flag1 = true
inputsearch.addEventListener('input', () => {
    searchCompleteAuto.style.minHeight = "100px";
    console.log(inputsearch.value)
    if (flag1) {
        historyKeywordItem.style.display = "none";
        StyleSuggetstion.removeChild(showmoresuggestion);
        searchCompleteAuto.removeChild(BottomWidgets);
        itempromo.style.display = "none";
        flag1 = false;
    }
    if (inputsearch.value.length == 0) {
        historyKeywordItem.style.display = "flex";
        StyleSuggetstion.appendChild(showmoresuggestion);
        searchCompleteAuto.appendChild(BottomWidgets);
        itempromo.style.display = "flex";
        flag1 = true;
        searchCompleteAuto.style.minHeight = "610px";

    }
    overlay.addEventListener('click', () => {
        searchCompleteAuto.style.display = "none";
        overlay.remove();
    })
})
let Item = document.querySelectorAll(".navigationBar__items .item");
if(Item[0].getBoundingClientRect().x >0){
    buttonbarleft.style.display = "none";
}

buttonbarleft.addEventListener('click',async (e) => {
    e.stopPropagation();
    if(Item[0].getBoundingClientRect().x<0){
        buttonbarleft.style.display = "none";
        let i=-970
        let settime2 =  await setInterval(() => {
            i+=50
            navigationBaritems.style.left = `${i}px`;
            if(i>0)
            {
                navigationBaritems.style.left = `${0}px`;
                clearInterval(settime2);
            }
        }, 40);
        buttonbarright.style.display = "block";
    }
    else
    {
        buttonbarleft.style.display = "block";
        
    }
   
   
})
 buttonbarright.addEventListener('click',async (e) => {
    e.stopPropagation();
    if(Item[Item.length-1].getBoundingClientRect().x >980){
        buttonbarright.style.display = "none";
        let i=47
        let settime =  await setInterval(() => {
            i-=50
            navigationBaritems.style.left = `${i}px`;
            if(i<=-985)
            {
                navigationBaritems.style.left = `${-985}px`;
                clearInterval(settime);
            }
        }, 40);
        buttonbarleft.style.display = "block";
    }
    else
    {
        buttonbarleft.style.display = "block";
    }
})
