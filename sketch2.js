function setup() {
  var cnv = createCanvas(windowWidth, windowWidth*0.75, WEBGL);
  cnv.parent('myContainer2');
}

function windowResized(){
  resizeCanvas (windowWidth, windowWidth*0.75);
}



function draw() {

  background(0, 255, 0);


  ambientLight(50);
  directionalLight(255, 0, 0, 0.25, 0.25, 0);
  pointLight(0, 0, 255, 0, 0, 250);

  push();
  translate(-width / 4, 0, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  specularMaterial(250);
  box(100, 100, 100);
  pop();

  push();
  translate(width / 4, 0, 0);
  ambientMaterial(250);
  sphere(120, 64);
  pop();
}
