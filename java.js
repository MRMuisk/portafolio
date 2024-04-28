function openTab(tabName) {
    var tabs = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active-tab");
    }
    var links = document.getElementsByClassName("tab-links");
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active-link");
    }
    document.getElementById(tabName).classList.add("active-tab");
    event.currentTarget.classList.add("active-link");
}

var menu=document.getElementById("sidemenu");

function openmenu(){
    menu.style.right="0";
}

function closemenu(){
    menu.style.right="-200px";
}