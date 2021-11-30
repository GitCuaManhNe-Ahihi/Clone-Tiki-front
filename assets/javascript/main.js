
    async function  load()
    {     var body = document.querySelector("body");
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
         await setTimeout(function(){
          body.removeChild(loadpage);
          },5000);     
    }
      
   window.addEventListener("load",load);