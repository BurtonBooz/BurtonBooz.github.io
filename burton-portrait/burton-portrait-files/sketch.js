var canvas;

function setup() {
  // put setup code here
  var canvas = createCanvas( 800, 800 );

  canvas.parent('portrait-container');
}

function draw() {

  background(255)

  strokeWeight(6);
  fill(255);
  stroke(0);

  // Ears

  arc(200, 400, 250, 200, PI/2, 4.7);
  arc(600, 400, 250, 200, -PI/2, -4.7);

  arc(220, 400, 200, 130, PI/2, 4.7);
  arc(580, 400, 200, 130, -PI/2, -4.7);

  // Head

  ellipse(400,400, 500, 700);

  // Eyes

  ellipse(480, 300, 100, 100);

  ellipse(320, 300, 100, 100);

  // Irises

  fill(255);
  stroke(0);

  var pupilX = map(mouseX, 0, width, 315, 325);
  var pupilY = map(mouseY, 0, height, 295, 305);
  var pupilA = map(mouseX, 0, width, 475, 485);

  // L Iris

  ellipse(pupilX, pupilY, 60, 60);

  // R Iris

  ellipse(pupilA, pupilY, 60, 60);

  // PUPILS

  fill(0);
  stroke(0);

  var pupilX = map(mouseX, 0, width, 310, 330);
  var pupilY = map(mouseY, 0, height, 290, 310);
  var pupilA = map(mouseX, 0, width, 470, 490);

  // L Pupil

  ellipse(pupilX, pupilY, 40, 40);

  // R Pupil

  ellipse(pupilA, pupilY, 40, 40);

  // Eyebrows

  strokeWeight(6);
  fill(0);
  stroke(0);

  rect(mouseX/50 + 230, mouseY/44 + 200, 150, 50, 50);
  rect(mouseX/50 + 410, mouseY/25 + 200, 150, 50, 50);

  strokeWeight(6);
  fill(255, 100);
  stroke(0);
  // noStroke();

  // Nose

  beginShape();
  vertex(400, 280);
  bezierVertex(400, 300, 400, 370, 350, 380); // first point
  bezierVertex(270, 410, 270, 450, 390, 460);
  endShape();

  strokeWeight(6);
  fill(255, 1);
  stroke(0);
  ellipse(400, 440, 40, 15);

  beginShape();
  curve(160, 380, 420, 460, 420, 390, 160, 410);

  // Nose Ring

  strokeWeight(6);
  fill(255, 1);
  stroke(220);

  beginShape();
  curve(mouseY/3, 410, 400, 438, 400, 400, 200, 410);

  // Earring

  beginShape();
  curve(500, mouseY/3, 665, 490, 665, 450, 600, 410);

  // Teeth

  fill(255);
  strokeWeight(6);
  stroke(0);

  var teethDownx = map(mouseX, 0, width, 280, 290);
  var teethDowny = map(mouseY, 0, width, 530, 560);

  x = teethDownx;

  y = teethDowny;

  x += 30;
  y = y;

  rect(x, y, 30, 50, 50);

  x += 30;
  y = y;

  rect(x, y, 30, 50, 50);

  x += 30;
  y = y;

  rect(x, y, 30, 50, 50);

  x += 30;
  y = y;

  rect(x, y, 30, 50, 50);

  x += 30;
  y = y;

  rect(x, y, 30, 50, 50);

  x += 30;
  y = y;

  rect(x, y, 30, 50, 50);

  var teethUpx = map(mouseX, 0, width, 280, 290);
  var teethUpy = map(mouseY, 0, width, 500, 510);

  x = teethUpx;

  y = teethUpy;

  x += 30;
  y = y;
  rect(x, y, 30, 50, 50);

  x += 30;
  y = y;
  rect(x, y, 30, 50, 50);

  x += 30;
  y = y;
  rect(x, y, 30, 50, 50);

  x += 30;
  y = y;
  rect(x, y, 30, 50, 50);

  x += 30;
  y = y;
  rect(x, y, 30, 50, 50);

  x += 30;
  y = y;
  rect(x, y, 30, 50, 50);

  // Mouth

  var mouthX = map(mouseX, 0, width, 230, 250);
  var mouthY = map(mouseY, 0, height, 90, 130);

  strokeWeight(46);
  fill(255, 0);
  stroke(255);
  rect(280, 490, mouthX, mouthY, 60);

  var mouthX = map(mouseX, 0, width, 190, 210);
  var mouthY = map(mouseY, 0, height, 50, 90);

  strokeWeight(6);
  fill(255, 0);
  stroke(0);
  rect(300, 510, mouthX, mouthY, 50);

}
