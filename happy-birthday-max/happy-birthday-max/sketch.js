var angle = 0;
var ball;
var ball2;
var smile;

function preload() {
  ball = loadModel('/assets/ball.obj');
  ball2 = loadModel('/assets/ball.obj');
  smile = loadModel('/assets/smile.obj');
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight, WEBGL);
  mic = new p5.AudioIn()
  mic.start();
}

function draw() {
  background(0, 0, 255);

  strokeWeight(2);
  stroke(0);

  // rotateX(angle);
  var swivelX = map(mouseX, 0, width, 395, 400);
  var swivelY = map(mouseY, 0, width, 240, 241);
  var swivelZ = map(mouseY, 0, width, 240, 250);

  // rotateY(swivelY);
  // rotateX(swivelX);
  // rotateZ(swivelZ);
  // translate(mouseX - width / 2, mouseY - height / 2)
  // translate(0, 0, 0);
  // rotateZ(mouseX);
  // rect(0, 0, 250, 250);
  // var d = dist(width / 2, height / 2, mouseX, mouseY);



  // angle += 0.03;

  micLevel = mic.getLevel();



  directionalLight(210, 190, 30, 40, frameCount * 2, frameCount * .2);

  ambientLight(80);

  // eyes

  push();
  translate(-210, -270, 0);
  strokeWeight(0);
  stroke(0);
  translate(0, constrain(height/50-micLevel*height*.2, 0, height), 0);
  rotateX(frameCount * 0.002);
  rotateY(frameCount * 0.002);
  rotateZ(frameCount * 0.002);
  scale(1);
  model(ball);
  pop();

  push();
  translate(150, -270, 0);
  strokeWeight(0);
  stroke(0);
  translate(0, constrain(height/50-micLevel*height*.2, 0, height), 0);
  rotateX(frameCount * 0.002);
  rotateY(frameCount * 0.002);
  rotateZ(frameCount * 0.002);
  scale(1);
  model(ball);
  pop();

  // pupils

  ambientLight(30);

  push();
  translate(-200, -270, 0);
  strokeWeight(0.4);
  stroke(0);
  translate(0, constrain(height/50-micLevel*height*.25, 0, height), 70);
  rotateX(swivelX);
  rotateY(swivelY);
  rotateZ(swivelZ);
  scale(.5);
  model(ball2);
  pop();


  push();
  translate(140, -270, 0);
  strokeWeight(0.4);
  stroke(0);
  translate(0, constrain(height/50-micLevel*height*.25, 0, height), 70);
  rotateX(swivelX);
  rotateY(swivelY);
  rotateZ(swivelZ);
  scale(.5);
  model(ball2);
  pop();

  // head

  push();
  strokeWeight(0);
  translate(0, -70, -300);
  translate(0, constrain(height/50-micLevel*height*.05, 0, height), 70);
  rotateX(0);
  rotateY(1.5);
  rotateZ(2);
  scale(6, .5, 5);
  model(ball2);
  pop();

  smile

  push();
  strokeWeight(0);
  translate(0, 70, 0);
  translate(0, constrain(height/50-micLevel*height*.05, 0, height), 70);
  rotateX(-3);
  rotateY(0);
  rotateZ(0);
  scale(.6);
  model(smile);
  pop();

  // if (vol > 0.002) {
  //   text("pappa!", width/2, 20)
  // }

  // text("green", gSlider.x * 2 + gSlider.width, 65);
  // fill(20);
  if (keyIsPressed == true) {
    if (key == ' ') {
      background(240);
    }
  }
}

function keyPressed() {
  if (key == 's') {
    saveCanvas('test', 'png')
  }
}
