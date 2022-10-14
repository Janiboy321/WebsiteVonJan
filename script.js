//setInterval(rotateColor, 300);

function rotateColor(){
    const divs = [document.getElementById("erstes"), document.getElementById("zweites"), document.getElementById("drittes"), document.getElementById("viertes"), document.getElementById("fuenftes"), document.getElementById("sechstes")];
    for(let i = 0; i < divs.length; i++){
        //alert(divs[i].id + ": " + getComputedStyle(divs[i], null).getPropertyValue("background-color"));
        if(getComputedStyle(divs[i], null).getPropertyValue("background-color") == "rgb(255, 0, 0)"){
            divs[i].style.backgroundColor = "rgb(128, 0, 128)";
        }
        else if(getComputedStyle(divs[i], null).getPropertyValue("background-color") == "rgb(255, 165, 0)"){
            divs[i].style.backgroundColor = "rgb(255, 0, 0)";
        }
        else if(getComputedStyle(divs[i], null).getPropertyValue("background-color") == "rgb(255, 255, 0)"){
            divs[i].style.backgroundColor = "rgb(255, 165, 0)";
        }
        else if(getComputedStyle(divs[i], null).getPropertyValue("background-color") == "rgb(0, 128, 0)"){
            divs[i].style.backgroundColor = "rgb(255, 255, 0)";

        }
        else if(getComputedStyle(divs[i], null).getPropertyValue("background-color") == "rgb(0, 0, 255)"){
            divs[i].style.backgroundColor = "rgb(0, 128, 0)";
        }
        else if(getComputedStyle(divs[i], null).getPropertyValue("background-color") == "rgb(128, 0, 128)"){
            divs[i].style.backgroundColor = "rgb(0, 0, 255)";
        }
    }
}
function addCanvas(){
    var bod = document.body;
    var w = window.innerWidth;
    var h = window.innerHeight;
    var canv = document.createElement("canvas");
    canv.width = w;
    canv.height = h;
    bod.appendChild(canv);
    changeCanvas(canv);
}

async function changeCanvas(canv){
    const ctx = canv.getContext("2d");
    const amountperline = 50;
    var length = (window.innerWidth - 16)/ amountperline;
    var yy = 0;
    for(var i = 0; i < 100; i++){
        if(i % amountperline == 0 && i != 0){
            yy += length;
            i = 0;
        }
        if(yy + length > window.innerHeight){
            yy = 0;
        }
        ctx.fillStyle = getRandomColor();
        ctx.fillRect(length * i, yy, length, length);
        await timer(1);
    }
    alert("fertig");
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function timer(ms) { return new Promise(res => setTimeout(res, ms)); }