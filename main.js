song = "" ;

function preload() {
    song = loadSound("music.mp3") ;
}

function setup() {
    canvas = createCanvas(425,300) ;
    canvas.position(500,200) ;
    video = createCapture(VIDEO) ;
    video.size(400,300) ;
    video.hide() ;
}

function draw() {
    background('white') ;
    image(video , 0 , 0 , 425 , 300) ;
}

function play() {
    song.play() ;
}