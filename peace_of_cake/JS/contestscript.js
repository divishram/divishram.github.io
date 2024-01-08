var minutes = 0;
var seconds = 0;
var milisecs = 0;

var displayMinutes = 0;
var displaySeconds = 0;
var displayMilisecs = 0;


var interval = null;
var watchStatus = 0;

var cookieCounter = 0;

window.onload = pageLoaded;

function pageLoaded() {

    var startBtn = document.getElementById("startStop");
    startBtn.style.display = "none";

    var cookie1 = document.getElementById("Cookie10");
    cookie1.onclick = function () {
        var showBite = document.getElementById("absolute110");
        bite(showBite)
    };
    var cookie2 = document.getElementById("Cookie9");
    cookie2.onclick = function () {
        var showBite = document.getElementById("absolute109");
        bite(showBite)
    };

    var cookie3 = document.getElementById("Cookie8");
    cookie3.onclick = function () {
        var showBite = document.getElementById("absolute108");
        bite(showBite)
    };
    var cookie4 = document.getElementById("Cookie7");
    cookie4.onclick = function () {
        var showBite = document.getElementById("absolute107");
        bite(showBite)
    };

    var cookie5 = document.getElementById("Cookie6");
    cookie5.onclick = function () {
        var showBite = document.getElementById("absolute106");
        bite(showBite)
    };

    var cookie6 = document.getElementById("Cookie5");
    cookie6.onclick = function () {
        var showBite = document.getElementById("absolute105");
        bite(showBite)
    };

    var cookie7 = document.getElementById("Cookie4");
    cookie7.onclick = function () {
        var showBite = document.getElementById("absolute104");
        bite(showBite)
    };

    var cookie8 = document.getElementById("Cookie3");
    cookie8.onclick = function () {
        var showBite = document.getElementById("absolute103");
        bite(showBite)
    };

    var cookie9 = document.getElementById("Cookie2");
    cookie9.onclick = function () {
        var showBite = document.getElementById("absolute102");
        bite(showBite)
    };

    var cookie10 = document.getElementById("Cookie1");
    cookie10.onclick = function () {
        var showBite = document.getElementById("absolute101");
        bite(showBite)
    };
    var cookie11 = document.getElementById("Cookie20");
    cookie11.onclick = function () {
        var showBite = document.getElementById("absolute120");
        bite(showBite)
    };
    var cookie12 = document.getElementById("Cookie19");
    cookie12.onclick = function () {
        var showBite = document.getElementById("absolute119");
        bite(showBite)
    };

    var cookie13 = document.getElementById("Cookie18");
    cookie13.onclick = function () {
        var showBite = document.getElementById("absolute118");
        bite(showBite)
    };
    var cookie14 = document.getElementById("Cookie17");
    cookie14.onclick = function () {
        var showBite = document.getElementById("absolute117");
        bite(showBite)
    };

    var cookie15 = document.getElementById("Cookie16");
    cookie15.onclick = function () {
        var showBite = document.getElementById("absolute116");
        bite(showBite)
    };

    var cookie16 = document.getElementById("Cookie15");
    cookie16.onclick = function () {
        var showBite = document.getElementById("absolute115");
        bite(showBite)
    };

    var cookie17 = document.getElementById("Cookie14");
    cookie17.onclick = function () {
        var showBite = document.getElementById("absolute114");
        bite(showBite)
    };

    var cookie18 = document.getElementById("Cookie13");
    cookie18.onclick = function () {
        var showBite = document.getElementById("absolute113");
        bite(showBite)
    };

    var cookie19 = document.getElementById("Cookie12");
    cookie19.onclick = function () {
        var showBite = document.getElementById("absolute112");
        bite(showBite)
    };

    var cookie20 = document.getElementById("Cookie11");
    cookie20.onclick = function () {
        var showBite = document.getElementById("absolute111");
        bite(showBite)
    };
    function bite(i) {
        i.style.display = "block";
        cookieCounter++;
        console.log(cookieCounter);
        start();
        if (cookieCounter === 20) {
            alert("Congratulations! You've won a Family-size bag of COOOOOOOOKIES !!");
            cookieCounter = 0;
            reset();
            resetCookies();
        }
    }

}
function resetCookies() {
    var hideBite1 = document.getElementById("absolute101");
    hideBite1.style.display = "none";
    var hideBite2 = document.getElementById("absolute102");
    hideBite2.style.display = "none";
    var hideBite3 = document.getElementById("absolute103");
    hideBite3.style.display = "none";
    var hideBite4 = document.getElementById("absolute104");
    hideBite4.style.display = "none";
    var hideBite5 = document.getElementById("absolute105");
    hideBite5.style.display = "none";
    var hideBite6 = document.getElementById("absolute106");
    hideBite6.style.display = "none";
    var hideBite7 = document.getElementById("absolute107");
    hideBite7.style.display = "none";
    var hideBite8 = document.getElementById("absolute108");
    hideBite8.style.display = "none";
    var hideBite9 = document.getElementById("absolute109");
    hideBite9.style.display = "none";
    var hideBite10 = document.getElementById("absolute110");
    hideBite10.style.display = "none";
    var hideBite11 = document.getElementById("absolute111");
    hideBite11.style.display = "none";
    var hideBite12 = document.getElementById("absolute112");
    hideBite12.style.display = "none";
    var hideBite13 = document.getElementById("absolute113");
    hideBite13.style.display = "none";
    var hideBite14 = document.getElementById("absolute114");
    hideBite14.style.display = "none";
    var hideBite15 = document.getElementById("absolute115");
    hideBite15.style.display = "none";
    var hideBite16 = document.getElementById("absolute116");
    hideBite16.style.display = "none";
    var hideBite17 = document.getElementById("absolute117");
    hideBite17.style.display = "none";
    var hideBite18 = document.getElementById("absolute118");
    hideBite18.style.display = "none";
    var hideBite19 = document.getElementById("absolute119");
    hideBite19.style.display = "none";
    var hideBite20 = document.getElementById("absolute120");
    hideBite20.style.display = "none";


    /*for (let i = 0; i < 20; i++) {
        var cookieAbsolute = "absolute1" + i;
        var hideBite = document.getElementById(cookieAbsolute);
        hideBite.style.display = "none";
    }*/
}

/*window.addEventListener('click', function (event) {
console.log(event.target);
});
 
/*function biteFirstCookie() {
biteCookie();
start();
}
 
function biteCookie() {
var showBite = document.getElementById("absolute110");
showBite.style.display = "block";
}*/

function stopwatch() {
    milisecs++;

    if (milisecs / 60 === 1) {
        milisecs = 0;
        seconds++;
        if (seconds / 60 === 1) {
            seconds = 0;
            minutes++;
        }
    }

    if (milisecs < 10) {
        displayMilisecs = "0" + milisecs.toString();

    }
    else {
        displayMilisecs = milisecs;
    }
    if (seconds < 10) {
        displaySeconds = "0" + seconds.toString();

    }
    else {
        displaySeconds = seconds;
    }
    if (minutes < 10) {
        displayMinutes = "0" + minutes.toString();

    }
    else {
        displayMinutes = minutes;
    }

    document.getElementById("display").innerHTML = displayMinutes + ":" + displaySeconds + ":" + displayMilisecs;
    if (seconds === 10) {
        alert("You're went over ten seconds, Please try again! ");
        startStop();
        reset();
    }


}


function startStop() {
    if (watchStatus === 0) {
        interval = window.setInterval(stopwatch, 15);
        document.getElementById("startStop").innerHTML = "Stop";
        watchStatus = 1;
    }
    else {
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        watchStatus = 0;
    }

}
function start() {
    if (watchStatus === 0) {
        interval = window.setInterval(stopwatch, 15);
        document.getElementById("startStop").innerHTML = "Stop";
        watchStatus = 1;
    }
}
function stop() {
    if (watchStatus === 1) {
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        watchStatus = 0;
    }
}
function reset() {
    resetCookies();

    window.clearInterval(interval);
    milisecs = 0;
    minutes = 0;
    seconds = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startStop").innerHTML = "Start";
    watchStatus = 0;
    cookieCounter = 0;


    for (var i = 1, radiobtn; radiobtn = document.getElementById("sample" + i); ++i) {
        radiobtn.checked = false;
    }
}