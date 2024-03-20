var settingsMenu  = document.querySelector(".settingsmenu")
var darkBtn = document.getElementById("darkbtn");

function settingsmenutoggle(){
    settingsMenu.classList.toggle("settingsmenu-height");
}
darkBtn.onclick=function(){
    darkBtn.classList.toggle("darkbtn-on");
    document.body.classList.toggle("darktheme");

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    }
    else{
        localStorage.setItem("theme", "light");
    }
}

if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("darkbtn-on");
    document.body.classList.remove("darktheme");
}
else if (localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("darkbtn-on");
    document.body.classList.add("darktheme");
}
else {
    localStorage.setItem("theme", "light");
}