let btn = document.getElementsByClassName("play");
let fpage = document.getElementsByClassName("front-page");
let cpage = document.getElementsByClassName("cover-page");

btn[0].onclick = function(){

    fpage[0].style.opacity = "0";
    fpage[0].style.visibility = "hidden";
    cpage[0].style.opacity = "0.9";
    cpage[0].style.visibility = "visible";
    let user = document.getElementById("enter_name").value;
    document.getElementsByClassName("player")[0].innerHTML = user;

};
