leftWristX = 0;
rightWristX = 0;
difference = 139;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#b6c0c2');

    document.getElementById("spanFont").innerHTML = "Size of the font is : " + difference + "px";

    fill('blue');
    stroke('#F90093');
    square(difference);
}

function modelLoaded() {
    console.log('Posenet model is initialized!');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("Left Wrist X = " + leftWristX + " Right Wrist X = " + rightWristX + " Difference = " + difference);
    }
}