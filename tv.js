function setup(){
    canvas=createCanvas(650,420);
    canvas.position(500,220);
    objectdetection=ml5.objectDetector("cocossd" , modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects.";
}
img="";
status="";
objects= [];
function preload(){
    img=loadImage("TV-under-an-air-conditioner.jpeg");
}
function modelLoaded(){
    console.log("Model is Loaded");
    status=true;
    objectdetection.detect(img,gotResults);
}
function gotResults(error,results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results);
        objects= results;
    }
}

function draw(){
    image(img,0,0,650,420);
    if(status=="true"){
for(i=0; i<objects.length; i++){
    document.getElementById("status").innerHTML="Status: Object Detected";
    document.getElementById("detection").innerHTML="No of objects detected are  "+objects.length;
    fill("red");
    percent=floor(objects[i].confidence * 100);
    text(objects[i].label + " "+percent+"%", objects[i].x, objects[i].y);
    noFill();
    stroke("red");
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
}
    }
   
}