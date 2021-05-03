Song1="";
Song2="";
leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;
scoreleftwrist=0;
Song1_status = "";
Song2_status = "";
function preload(){
    Song1=loadSound("tobu.mp3");
    Song2= loadSound("believer.mp3")
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNEt=ml5.poseNet(video,modelLoaded);
    poseNEt.on("pose", gotPoses);
}
function modelLoaded(){
    console.log("model is loaded");
}
function draw(){
    image(video,0,0,600,500);
    fill("#FFA500");
    stroke("#000000");
    Song1_status = Song1.isPlaying();
    Song2_status = Song2.isPlaying();
if (scoreleftwrist>0.2){
    circle (leftwristx,leftwristy,20);
Song2.stop();
if (Song1_status == false) {
    Song1.play();
    document.getElementById("song").innerHTML = "Playing- tobu candyland song";
}
}
}
function play(){
song.play();
song.setVolume(1);
song.rate(1);
}
function gotPoses(results){
    if (results.length>0) {
        console.log(results);
        leftwristx=results[0].pose.leftWrist.x;
        leftwristy=results[0].pose.leftWrist.y;
        rightwristx=results[0].pose.rightWrist.x;
        rightwristy=results[0].pose.rightWrist.y;
        console.log("left wrist's x is "+leftwristx+"Left wrist's Y is "+leftwristy);
        console.log("Right wrist x is "+rightwristx+"Right wrist's Y is "+rightwristy);
        scoreleftwrist=results[0].pose.keypoints[9].score;
        console.log("The score of left wrist is = "+scoreleftwrist);
    }
}