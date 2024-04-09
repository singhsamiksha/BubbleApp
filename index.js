var ele = document.getElementById("mycanvas");
var c = ele.getContext("2d");
var arrowStart = 650;
var circleEnd = 140;

function draw(x,y,color){

    //Draw the circle
    c.beginPath();
    c.arc(x, y, 40, 0, 2 * Math.PI);
    c.fillStyle = color; 
    c.fill();
}

draw(60,60,"orange");
draw(60,160,"blue");
draw(60,260,"red");
draw(60,360,"yellow");

function arrow(){

    for(var i=60;i<=360;i+=100) {
        //Draw the line
        c.beginPath();
        c.moveTo(arrowStart, i); 
        c.lineTo(arrowStart+100, i); 
        c.lineWidth = 7; 
        c.strokeStyle = "black"; 
        c.stroke(); 

        // Draw the arrowhead
        c.beginPath();
        c.moveTo(arrowStart-20, i); 
        c.lineTo(arrowStart, i-10); 
        c.lineTo(arrowStart, i+10); 
        c.closePath(); 
        c.fillStyle = "black"; 
        c.fill();
    }
}

arrow();

function moveArrow(position){
    arrowStart = position;
    c.clearRect(0, 0, ele.width, ele.height);
    draw(60,60,"orange");
    draw(60,160,"blue");
    draw(60,260,"red");
    draw(60,360,"yellow");
    arrow();
}
ele.addEventListener("click",function arrowDistance(){
    if(arrowStart>circleEnd && arrowStart){
        moveArrow(arrowStart-50);
    }
});
