
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

navigationBaritems.style.transition = "all 0.5s ease-in-out";
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
        navigationBaritems.style.left = `${0}px`;  
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
        navigationBaritems.style.left = `${-985}px`;  
        buttonbarleft.style.display = "block";
    }
    else
    {
        buttonbarleft.style.display = "block";
    }
})

var arrayListdeals =document.querySelectorAll(".deal-qty")
arrayListdeals.forEach(element => {
    let random = Math.random() * (100 - 10)+ 10 ;
    element.children[0].children[0].style.width=`${random}%`
    if(random == 10)
    {
        element.children[0].children[1].innerHTML= "Vừa mở bán"
    }
    else
    {   
        if(random > 90)
        {
            element.children[0].children[1].innerHTML= "Sắp hết hàng"
        }
        else
        {
            element.children[0].children[1].innerHTML= "đã bán "+Math.floor(random)
        }
    }
    if(random >30)
    {
        let fire = document.createElement("img");
        fire.src = "https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg";
        fire.style.width = "28px";
        fire.style.height = "28px";
        fire.style.position = "absolute";
        fire.style.top = "-10px";
        fire.style.left = "5px";
        fire.style.zIndex = "5";
        element.appendChild(fire);
    }
}
)
var x = setInterval(function() {
  var now = new Date();
  var hours = 23- now.getHours();
  var minutes = 59- now.getMinutes();
  var seconds = 59- now.getSeconds();
  document.querySelector(".Hour").innerHTML =  hours < 10 ? "0" + hours : hours;
  document.querySelector(".Minute").innerHTML =  minutes <10? "0"+minutes : minutes
  document.querySelector(".Second").innerHTML =  seconds <10?`0${seconds}`:seconds  // If the count down is finished, write some text
}, 1000);
if(document.querySelectorAll(".deals__item")[0].getBoundingClientRect().x==340)
{
    document.querySelector(".prev").style.display = "none";
}
if(document.querySelectorAll(".deals__item")[11].getBoundingClientRect().x==1375)
{
    document.querySelector(".next").style.display = "none";
}
document.querySelector(".next").addEventListener('click',(e)=>{
            e.stopPropagation();
            document.querySelector(".body__container").style.marginLeft = `-1240px`;
            document.querySelector(".next").style.display = "none";
            document.querySelector(".prev").style.display = "block";

})
document.querySelector(".prev").addEventListener('click',(e)=>{
    e.stopPropagation();
    document.querySelector(".body__container").style.marginLeft = `0px`;
    document.querySelector(".next").style.display = "block";
    document.querySelector(".prev").style.display = "none";
   
})
