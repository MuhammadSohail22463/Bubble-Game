//making bubble
function makeBubble() {
    var clutter = "";
for (var i = 1; i <= 175; i++){
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;
}

//running timer
let timer = 60;
function runtimer() {
    
    setInterval(function () {
        if (timer >= 0) {
            document.querySelector("#time").textContent = timer--
        } else {
            clearInterval();
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over!!!</h1>`;
        }
        
    },1000)
}

//changing hit value
let hitvalue = 0;
function changehitval() {
    hitvalue = Math.floor(Math.random() * 10);
    document.querySelector('#hitval').textContent = hitvalue;
}

//increasing score 
var score = 0;
function increasescore() {
    
    score += 10;
    document.querySelector('#scoreval').textContent = score;
}


//making game run

document.querySelector("#pbtm").addEventListener("click", function (dets) {
    if (Number(dets.target.textContent) == hitvalue) {
        increasescore();
        makeBubble();
        changehitval();
   }
})

runtimer();
makeBubble();
changehitval();

