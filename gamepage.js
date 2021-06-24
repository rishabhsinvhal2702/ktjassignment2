if (screen.width < 500) {
    var side = 400;
}
else if (screen.width >= 500) {
    var side = 480;
}

// function clickBlock(ntile){

//     var ftile = document.getElementById(ntile);

//     if (document.getElementById(ntile+1).className == "col "+(m*n)){
//         ftile.style.opacity = "0";
//         ftile.style.visibility = "hidden";
//         document.getElementById(ntile+1).style.opacity = "1";
//         document.getElementById(ntile+1).style.visibility = "visible";
//         var myvar1 = ftile.className;
//         var myvar2 = document.getElementById(ntile+1).className;

//         swapBlock(myvar1,myvar2);
//     }

//     else if (document.getElementById(ntile-1).className == "col "+(m*n)){
//         ftile.style.opacity = "0";
//         ftile.style.visibility = "hidden";
//         document.getElementById(ntile-1).style.opacity = "1";
//         document.getElementById(ntile-1).style.visibility = "visible";
//         var myvar1 = ftile.className;
//         var myvar2 = document.getElementById(ntile-1).className;

//         swapBlock(myvar1, myvar2);
//     }

//     else if (document.getElementById(ntile-n).className == "col "+(m*n)){
//         ftile.style.opacity = "0";
//         ftile.style.visibility = "hidden";
//         document.getElementById(ntile-n).style.opacity = "1";
//         document.getElementById(ntile-n).style.visibility = "visible";
//         var myvar1 = ftile.className;
//         var myvar2 = document.getElementById(ntile-n).className;


//         swapBlock(myvar1, myvar2);
//     }

//     else if (document.getElementById(ntile+n).className == "col "+(m*n)){
//         ftile.style.opacity = "0";
//         ftile.style.visibility = "hidden";
//         document.getElementById(ntile+n).style.opacity = "1";
//         document.getElementById(ntile+n).style.visibility = "visible";
//         var myvar1 = ftile.className;
//         var myvar2 = document.getElementById(ntile+n).className;

//         swapBlock(myvar1, myvar2);
//     }

// }

// for (i=1; i<=9; i++){
//     var testb = document.getElementsByClassName(i)[0];
//     testb.setAttribute("onClick","clickBlock("+i+");");
// }
// testb = document.getElementById("6");
// testb.onclick = function(){
    // clickBlock(6);
// };

// hardtest = document.getElementsByClassName("9")[0];
// hardtest.innerHTML = "27";
