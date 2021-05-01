song="";

function preload() 
{
    song= loadSound("music.mp3")
}

function setup() {
    canvas=createCanvas(540, 400);
    canvas.center();

    video= createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 0, 0, 540, 400);
}
function play()
{
    song.play();
}