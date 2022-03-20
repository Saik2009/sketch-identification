nosex=0;
nosey=0;
function preload(){
clownnose=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    video.size(300,300);
    posenet=ml5.poseNet(video,modelLoaded);

   posenet.on('pose',gotPoses) 
}
function gotPoses(results){
    if(results.length>0){
        nosex =results[0].pose.nose.x-15;
        nosey =results[0].pose.nose.y-15;
        //console.log(results);
        //console.log("nosex ="+results[0].pose.nose.x);
        //console.log("nosey ="+results[0].pose.nose.y);

    }
}
function draw(){
  image(video,0,0,300,300);
   
  image(clownnose,nosex,nosey,25,25);
}
function modelLoaded(){
    console.log("Model Loaded");
}
function take_snapshot(){
    save("Filter_Clown_Nose.png");

}