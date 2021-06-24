if (screen.width < 500) {
    var side = 350;
}
else if (screen.width >= 500) {
    var side = 480;
}
var m = 3;
var n = 3;
var i, j;

// window.onresize = function(){
//     alert("Please refresh while resizing on mobile mode i.e below 500px as doing this without refresing is beyond js.");
// }

mymoves = 0;

var helpc = document.getElementsByClassName("helping-container");

if (m > n) {
    var dside = side / m;
}
else if (n >= m) {
    var dside = side / n;
}

if (n > m) {
    var newh = 10.2 + (m * (dside + 2.4));
    helpc[0].style.height = newh + "px";
}
else if (m > n) {
    var neww = (n * (dside + 2.4));
    helpc[0].style.width = neww + "px";
}

let box = document.getElementsByClassName("container");

function creatediv(dside) {
    box[0].innerHTML = "";
    var num = 1;
    for (i = 0; i < m; i++) {
        b = document.createElement("div");
        b.className = "row row-cols-auto justify-content-md-center";
        b.style.backgroundColor = "black";
        if (m > n) {
            b.style.width = "fit-content";
        }
        box[0].appendChild(b);

        var fside = dside / 2;

        for (j = 0; j < n; j++) {
            a = document.createElement("div");
            a.className = "col " + num;
            a.id = (i + 1) + "r" + (j + 1);
            a.style.width = dside + "px";
            a.style.height = dside + "px";
            a.style.fontSize = fside + "px";
            // a.style.margin = "3px";
            a.style.borderRadius = "6px";
            a.innerHTML = num
            b.appendChild(a);
            num++;

        }
    }
    d = document.getElementById(m + "r" + n);
    d.style.opacity = "0";
    d.style.visibility = "hidden";
}

creatediv(dside);

var hgtValue = document.getElementsByClassName("h-value");
var wdtValue = document.getElementsByClassName("w-value");
var hgt = document.getElementsByClassName("height");
var wdt = document.getElementsByClassName("width");
var cncl = document.getElementsByClassName("cancel-popup");

mytime = document.getElementsByClassName("showtime")[0];
var t = 0;
var ptime = setInterval(timer, 1000);
function timer() {
    t++;
    var tsec, tmin;
    tsec = t % 60;
    tmin = (t - tsec) / 60;
    if (tsec < 10) {
        mytime.innerHTML = tmin + ":0" + tsec;
    }
    else {
        mytime.innerHTML = tmin + ":" + tsec;
    }
}

hgtValue[0].innerHTML = m;
wdtValue[0].innerHTML = n;

hgt[0].onclick = function () {

    if (m < 8) {
        m++;
    }
    else {
        m = 3;
    }

    hgtValue[0].innerHTML = m;
    creatediv(dside);

    moveTile();
    shuffle();

};

wdt[0].onclick = function () {

    if (n < 8) {
        n++;
    }
    else {
        n = 3;
    }

    wdtValue[0].innerHTML = n;
    creatediv(dside);

    moveTile();
    shuffle();

};

cncl[0].onclick = function () {
    if (m > n) {
        var dside = side / m;
    }
    else if (n >= m) {
        var dside = side / n;
    }

    if (n > m) {
        var newh = 10.2 + (m * (dside + 2.4));
        helpc[0].style.height = newh + "px";
    }
    else if (m > n) {
        var neww = (n * (dside + 2.4));
        helpc[0].style.width = neww + "px";
    }
    creatediv(dside);

    moveTile();
    clearInterval(ptime);
    mymoves = 0;
    movedisplay.innerHTML = mymoves;
    t = 0;
    ptime = setInterval(timer, 1000);

    document.getElementsByClassName("gtype")[0].innerHTML = m + "*" + n;
    shuffle();
    win();
};

function swapBlock(x, y) {
    var nerVar1 = document.getElementsByClassName(x)[0];
    var newVar2 = document.getElementsByClassName(y)[0];
    newVar3 = nerVar1.className;
    nerVar1.className = newVar2.className;
    newVar2.className = newVar3;

    var var1row = nerVar1.id[0];
    var var1col = nerVar1.id[2];
    var var2row = newVar2.id[0];
    var var2col = newVar2.id[2];
    nerVar1.setAttribute("onClick", "myclickbox(" + var1row + "," + var1col + ");");
    newVar2.setAttribute("onClick", "myclickbox(" + var2row + "," + var2col + ");");

    var newtext = document.getElementsByClassName(x)[0].innerHTML;
    document.getElementsByClassName(x)[0].innerHTML = document.getElementsByClassName(y)[0].innerHTML;
    document.getElementsByClassName(y)[0].innerHTML = newtext;
}


//....................................................................................................................................
//ye function isiliye comment mai se nhi hataya kyuki isme bohot mehnat lagi hai......................................................
//galat hi tha function lekin bohot mehnat lagi thi banane mai........................................................................
//so out of respect...................................................................................................................
// ...................................................................................................................................


// function clickBlock2(crow, ccoloumn, newcrow, newccoloumn) {
//     console.log("bhai");

//     var mycell = document.getElementById(crow + "r" + ccoloumn);
//     var blankcell = document.getElementsByClassName("col " + (m * n))[0];
//     var mytile = mycell.className;
//     if (mytile != "col " + (m * n)) {

//         if (ccoloumn < n) {
//             // var nearcell = document.getElementById(crow + "r" + (ccoloumn + 1));

//             if (document.getElementById(crow + "r" + (ccoloumn + 1)).className == "col " + (m * n)) {
//                 mycell.style.opacity = "0";
//                 mycell.style.visibility = "hidden";
//                 blankcell.style.opacity = "1";
//                 blankcell.style.visibility = "visible";
//                 // swapBlock(document.getElementById(crow + "r" + ccoloumn).className, document.getElementById(crow + "r" + (ccoloumn + 1)).className);
//                 swapBlock(document.getElementById(crow + "r" + ccoloumn).className, document.getElementsByClassName("col "+(m*n))[0].className);

//                 if(newccoloumn!=ccoloumn){
//                     clickBlock2(crow,(ccoloumn-1), newcrow, newccoloumn);
//                 }
//             }
//             else{
//                 clickBlock2(crow,(ccoloumn+1),newcrow, newccoloumn);
//             }
//         }

//         if (ccoloumn > 1) {
//             if (document.getElementById(crow + "r" + (ccoloumn - 1)).className == "col " + (m * n)) {
//                 mycell.style.opacity = "0";
//                 mycell.style.visibility = "hidden";
//                 blankcell.style.opacity = "1";
//                 blankcell.style.visibility = "visible";
//                 swapBlock(document.getElementById(crow + "r" + ccoloumn).className, document.getElementById(crow + "r" + (ccoloumn - 1)).className);
//             }
//         }
//         if (crow > 1) {
//             if (document.getElementById((crow - 1) + "r" + ccoloumn).className == "col " + (m * n)) {
//                 mycell.style.opacity = "0";
//                 mycell.style.visibility = "hidden";
//                 blankcell.style.opacity = "1";
//                 blankcell.style.visibility = "visible";
//                 swapBlock(document.getElementById(crow + "r" + ccoloumn).className, document.getElementById((crow - 1) + "r" + ccoloumn).className);
//             }
//         }
//         if (crow < m) {
//             if (document.getElementById((crow + 1) + "r" + ccoloumn).className == "col " + (m * n)) {
//                 mycell.style.opacity = "0";
//                 mycell.style.visibility = "hidden";
//                 blankcell.style.opacity = "1";
//                 blankcell.style.visibility = "visible";
//                 swapBlock(document.getElementById(crow + "r" + ccoloumn).className, document.getElementById((crow + 1) + "r" + ccoloumn).className);
//             }
//         }
//     }
// }

var movedisplay = document.getElementsByClassName("movecount")[0];

var blankblock, blankblockrow, blankblockcoloumn, myblock;
function myclickbox(crow, ccoloumn) {
    myblock = document.getElementById(crow + "r" + ccoloumn);
    blankblock = document.getElementsByClassName("col " + (m * n))[0];
    blankblockrow = parseInt(blankblock.id[0]);
    blankblockcoloumn = parseInt(blankblock.id[2]);

    // window.addEventListener("keydown", function(event){
    //     if(event.defaultPrevented){
    //         return;
    //     }
    //     if(event.code === "ArrowLeft"){
    //         if (crow == blankblockrow && ccoloumn == (blankblockcoloumn + 1)) {
    //             var nearblankblock = document.getElementById(blankblockrow + "r" + (blankblockcoloumn + 1));
    //             blankblock.style.opacity = "1";
    //             blankblock.style.visibility = "visible";
    //             nearblankblock.style.opacity = "0";
    //             nearblankblock.style.visibility = "hidden";
    //             swapBlock(blankblock.className, nearblankblock.className);
    //             mymoves++;
    //             movedisplay.innerHTML = mymoves;
    //         }
    //     }
    //     event.preventDefault();
    // }, true)

    if (crow == blankblockrow && ccoloumn == (blankblockcoloumn + 1)) {
        var nearblankblock = document.getElementById(blankblockrow + "r" + (blankblockcoloumn + 1));
        blankblock.style.opacity = "1";
        blankblock.style.visibility = "visible";
        nearblankblock.style.opacity = "0";
        nearblankblock.style.visibility = "hidden";
        swapBlock(blankblock.className, nearblankblock.className);
        mymoves++;
        movedisplay.innerHTML = mymoves;
    }

    else if (crow == blankblockrow && ccoloumn == (blankblockcoloumn - 1)) {
        var nearblankblock = document.getElementById(blankblockrow + "r" + (blankblockcoloumn - 1));
        blankblock.style.opacity = "1";
        blankblock.style.visibility = "visible";
        nearblankblock.style.opacity = "0";
        nearblankblock.style.visibility = "hidden";
        swapBlock(blankblock.className, nearblankblock.className);
        mymoves++;
        movedisplay.innerHTML = mymoves;
    }

    else if (crow == (blankblockrow + 1) && ccoloumn == blankblockcoloumn) {
        var nearblankblock = document.getElementById((blankblockrow + 1) + "r" + blankblockcoloumn);
        blankblock.style.opacity = "1";
        blankblock.style.visibility = "visible";
        nearblankblock.style.opacity = "0";
        nearblankblock.style.visibility = "hidden";
        swapBlock(blankblock.className, nearblankblock.className);
        mymoves++;
        movedisplay.innerHTML = mymoves;
    }

    else if (crow == (blankblockrow - 1) && ccoloumn == blankblockcoloumn) {
        var nearblankblock = document.getElementById((blankblockrow - 1) + "r" + blankblockcoloumn);
        blankblock.style.opacity = "1";
        blankblock.style.visibility = "visible";
        nearblankblock.style.opacity = "0";
        nearblankblock.style.visibility = "hidden";
        swapBlock(blankblock.className, nearblankblock.className);
        mymoves++;
        movedisplay.innerHTML = mymoves;
    }

    else if (crow == blankblockrow && ccoloumn < blankblockcoloumn) {
        var nearblankblock = document.getElementById(blankblockrow + "r" + (blankblockcoloumn - 1));
        blankblock.style.opacity = "1";
        blankblock.style.visibility = "visible";
        nearblankblock.style.opacity = "0";
        nearblankblock.style.visibility = "hidden";
        swapBlock(blankblock.className, nearblankblock.className);
        mymoves++;
        movedisplay.innerHTML = mymoves;
        myclickbox(crow, ccoloumn);
    }

    else if (crow == blankblockrow && ccoloumn > blankblockcoloumn) {
        var nearblankblock = document.getElementById(blankblockrow + "r" + (blankblockcoloumn + 1));
        blankblock.style.opacity = "1";
        blankblock.style.visibility = "visible";
        nearblankblock.style.opacity = "0";
        nearblankblock.style.visibility = "hidden";
        swapBlock(blankblock.className, nearblankblock.className);
        mymoves++;
        movedisplay.innerHTML = mymoves;
        myclickbox(crow, ccoloumn);
    }

    else if (crow < blankblockrow && ccoloumn == blankblockcoloumn) {
        var nearblankblock = document.getElementById((blankblockrow - 1) + "r" + blankblockcoloumn);
        blankblock.style.opacity = "1";
        blankblock.style.visibility = "visible";
        nearblankblock.style.opacity = "0";
        nearblankblock.style.visibility = "hidden";
        swapBlock(blankblock.className, nearblankblock.className);
        mymoves++;
        movedisplay.innerHTML = mymoves;
        myclickbox(crow, ccoloumn);
    }

    else if (crow > blankblockrow && ccoloumn == blankblockcoloumn) {
        var nearblankblock = document.getElementById((blankblockrow + 1) + "r" + blankblockcoloumn);
        blankblock.style.opacity = "1";
        blankblock.style.visibility = "visible";
        nearblankblock.style.opacity = "0";
        nearblankblock.style.visibility = "hidden";
        swapBlock(blankblock.className, nearblankblock.className);
        mymoves++;
        movedisplay.innerHTML = mymoves;
        myclickbox(crow, ccoloumn);
    }

    win();

}

shuffle();
moveTile();



function moveTile() {
    var p, q;
    for (p = 0; p < m; p++) {
        for (q = 0; q < n; q++) {
            var ocell = document.getElementById((p + 1) + "r" + (q + 1));
            ocell.setAttribute("onClick", "myclickbox(" + (p + 1) + "," + (q + 1) + ");");
            // win();
        }
    }
}
var pausetime = document.getElementsByClassName("pause")[0];
pausetime.onclick = function () {
    if (pausetime.innerHTML == "Pause") {
        pausetime.innerHTML = "Play";
        clearInterval(ptime);
    }
    else if (pausetime.innerHTML == "Play") {
        pausetime.innerHTML = "Pause"
        ptime = setInterval(timer, 1000);
    }
}

document.getElementsByClassName("new-game")[0].onclick = function () {
    clearInterval(ptime);
    mymoves = 0;
    movedisplay.innerHTML = mymoves;
    t = 0;
    ptime = setInterval(timer, 1000);
    shuffle();
    win();
};

var myrow, mycolumn;
function shuffle() {
    for (myrow = 1; myrow <= m; myrow++) {
        for (mycolumn = 1; mycolumn <= n; mycolumn++) {

            var myrow2 = Math.floor(Math.random() * (m) + 1);
            var mycolumn2 = Math.floor(Math.random() * (n) + 1);

            if (document.getElementById(myrow + "r" + mycolumn).className != "col " + (m * n) && document.getElementById(myrow2 + "r" + mycolumn2).className != "col " + (m * n)) {
                swapBlock(document.getElementById(myrow + "r" + mycolumn).className, document.getElementById(myrow2 + "r" + mycolumn2).className);
            }
        }
    }
    moveTile();
}

function win() {
    var mycount = 1;
    var localvar = 1;
    var k, l;
    for (k = 1; k <= m; k++) {
        for (l = 1; l <= n; l++) {
            if (parseInt(document.getElementById(k + "r" + l).innerHTML) == mycount) {
                localvar++;
                document.getElementById(k + "r" + l).style.backgroundColor = "lightcoral";
            }
            else{
                document.getElementById(k + "r" + l).style.backgroundColor = "red";
            }
            mycount++;
        }
    }
    if (localvar == ((m * n) + 1)) {
        document.getElementsByClassName("win-popup")[0].style.opacity = "1";
        document.getElementsByClassName("win-popup")[0].style.visibility = "visible";
        document.getElementsByClassName("movecount")[1].innerHTML = mymoves;
        document.getElementsByClassName("showtime")[1].innerHTML = t;
        leaderboardupdate();
        showleaderboard();
    }
}

// function idchange(irow, icoloumn){
//     document.getElementById(irow+"r"+icoloumn).style.backgroundColor = "green";
//     document.getElementById(irow+"r"+icoloumn).id = "freezed";
// }

// function idrechange(rerow, recoloumn){
//     document.getElementById("freezed").style.backgroundColor = "red";
//     document.getElementById("freeze").id = rerow+"r"+recoloumn;
// }

// function freeze(frrow,frcoloumn){
//     setTimeout(idchange(frrow,frcoloumn), 2000);
//     setTimeout(idrechange(frrow, frcoloumn), 10000);
// }

// function callfreeze(){
//     frrow = Math.floor(Math.random()*m+1);
//     frcoloumn = Math.floor(Math.random()*n+1);
//     setInterval(freeze(frrow,frcoloumn), 15000);
// }

// callfreeze();

document.getElementsByClassName("win-new-game")[0].onclick = function () {
    document.getElementsByClassName("win-popup")[0].style.opacity = "0";
    document.getElementsByClassName("win-popup")[0].style.visibility = "hidden";
    clearInterval(ptime);
    mymoves = 0;
    movedisplay.innerHTML = mymoves;
    t = 0;
    ptime = setInterval(timer, 1000);
    shuffle();
    win();
}

var leadmoves=[70,75,78];
var leadtime=[70,80,85];

function leaderboardupdate()
{
    if(t<leadtime[0])
    {
        leadtime[2]=leadtime[1];
        leadtime[1]=leadtime[0];
        leadtime[0]=t;
    }
    else if(t<leadtime[1])
    {
        leadtime[2]=leadtime[1];
        leadtime[1]=t;
    }
    else if(t<leadtime[2])
    {
        leadtime[2]=t;
    }
    if(mymoves<leadmoves[0])
    {
        leadmoves[2]=leadmoves[1];
        leadmoves[1]=leadmoves[0];
        leadmoves[0]=mymoves;
    }
    else if(mymoves<leadmoves[1])
    {
        leadmoves[2]=leadmoves[1];
        leadmoves[1]=mymoves;
    }
    else if(mymoves<leadmoves[2])
    {
        leadmoves[2]=mymoves;
    }
}
function showleaderboard()
{
    leaderboardcont=document.getElementsByClassName("mycontent")[0];
    leaderboardcont.className="container-sm shower mycontent";
    leaderboardcont.innerHTML="";
    leaderboardrow=document.createElement("div");
        leaderboardcont.appendChild(leaderboardrow);
        leaderboardrow.className="row";
        leaderboardcoloum=document.createElement("div");
        leaderboardcoloum.className="col-2 cell";
        leaderboardcoloum.innerHTML="Rank";
        leaderboardrow.appendChild(leaderboardcoloum);
        leaderboardcoloum=document.createElement("div");
        leaderboardcoloum.className="col-4 cell";
        leaderboardcoloum.innerHTML="Moves";
        leaderboardrow.appendChild(leaderboardcoloum);
        leaderboardcoloum=document.createElement("div");
        leaderboardcoloum.className="col-4 cell";
        leaderboardcoloum.innerHTML="Timing";
        leaderboardrow.appendChild(leaderboardcoloum);
    for(i=0;i<3;i++)
    {
        
        leaderboardrow=document.createElement("div");
        leaderboardcont.appendChild(leaderboardrow);
        leaderboardrow.className="row";
        leaderboardcoloum=document.createElement("div");
        leaderboardcoloum.className="col-2 cell";
        leaderboardcoloum.innerHTML=i+1;
        leaderboardrow.appendChild(leaderboardcoloum);
        leaderboardcoloum=document.createElement("div");
        leaderboardcoloum.className="col-4 cell";
        leaderboardcoloum.innerHTML=leadmoves[i];
        leaderboardrow.appendChild(leaderboardcoloum);
        leaderboardcoloum=document.createElement("div");
        leaderboardcoloum.className="col-4 cell";
        leadsec=leadtime[i]%60;
        leadmin=(leadtime[i]-leadsec)/60;
        if(leadsec<10)
            leaderboardcoloum.innerHTML=leadmin+":0"+leadsec;
        else
            leaderboardcoloum.innerHTML=leadmin+":"+leadsec;
        leaderboardrow.appendChild(leaderboardcoloum);
        
    }
}
showleaderboard();

window.addEventListener("keydown", usingarrow, false);
function usingarrow(ev){
    var bblock = document.getElementsByClassName("col "+(m*n))[0];
    if(ev.keyCode==40||ev.keyCode==83){
        if(parseInt(bblock.id[0])!=1){
            var iTriedSoHard = document.getElementById((parseInt(bblock.id[0])-1)+bblock.id[1]+bblock.id[2]);
            myclickbox(iTriedSoHard.id[0],iTriedSoHard.id[2]);
        }
    }
    if(ev.keyCode==38||ev.keyCode==87){
        if(parseInt(bblock.id[0])!=m){
            var iTriedSoHard = document.getElementById((parseInt(bblock.id[0])+1)+bblock.id[1]+bblock.id[2]);
            myclickbox(iTriedSoHard.id[0],iTriedSoHard.id[2]);
        }
    }
    if(ev.keyCode==39||ev.keyCode==68){
        if(parseInt(bblock.id[2])!=1){
            var iTriedSoHard = document.getElementById(bblock.id[0]+bblock.id[1]+(parseInt(bblock.id[2])-1));
            myclickbox(iTriedSoHard.id[0],iTriedSoHard.id[2]);
        }
    }
    if(ev.keyCode==37||ev.keyCode==65){
        if(parseInt(bblock.id[2])!=n){
            var iTriedSoHard = document.getElementById(bblock.id[0]+bblock.id[1]+(parseInt(bblock.id[2])+1));
            myclickbox(iTriedSoHard.id[0],iTriedSoHard.id[2]);
        }
    }
}