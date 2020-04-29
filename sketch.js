
  let value = 255;
  let value1 = 1;

  function setup() {
    var cnv = createCanvas(windowWidth, windowHeight/3);
    cnv.parent('myContainer');
  }

  function windowResized(){
    resizeCanvas (windowWidth, windowHeight/3);
  }

  function draw() {
    clear();

    //1 left
    push();
    translate(width * 0.2, height * 0.5);
    rotate(frameCount / 200.0);
    stroke(255);
    star(0, 0, 5, 70, 90);
    pop();

    //2-1 middle Big
    push();
    strokeWeight(4);
    stroke(value,255,0);
    translate(width * 0.5, height * 0.5);
    rotate(frameCount / 50.0);
    star(0, 0, 80, 100, 40);
    pop();

    //2-2 middle small
    push();
    strokeWeight(4);
    stroke(0,0,255);
    translate(width * 0.5, height * 0.5);
    rotate(frameCount / 50.0);
    star(0, 0, 40, 50, 30);
    pop();

    //3 right
    push();
    strokeWeight(value1);
    translate(width * 0.8, height * 0.5);
    rotate(frameCount / -100.0);
    star(0, 0, 27.5, 70, 5);
    pop();
  }

  function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }


  /*star(0, 0, width * 0.02, height * 0.32, 90);
  star(0, 0, width * 0.12, height * 0.325, 40);
  star(0, 0, width * 0.045, height * 0.2, 30);*/


  function mousePressed(){
    if (value === 255 && value1 === 1 && mouseX > width * 0.5 - 100 && mouseX < width * 0.5 + 100 && mouseY > height * 0.5 - 100 && mouseY< height * 0.5 + 100){
      value = 0;
      value1 = 0;
      fill(255, 0, 0);
    } else if(value === 0 && value1 === 0 && mouseX > width * 0.5 - 100 && mouseX < width * 0.5 + 100 && mouseY > height * 0.5 - 100 && mouseY< height * 0.5 + 100){
      value = 255;
      value1 = 1;
      fill(255);
    }
  }
