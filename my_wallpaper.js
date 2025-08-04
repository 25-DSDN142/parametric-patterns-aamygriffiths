//your parameter variables go here!
let rect_width = 20;
let rect_height = 30;

let midX = 100;
let midY = 100;

function setup() {
  angleMode(DEGREES);
}

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(19, 13, 64);
  noLoop(); // Stops draw loop after one frame

}

function my_symbol() {// do not rename this function. Treat this similarly to a Draw function
 translate(width / 2, height / 2);
 fill(255, 204, 0);
 stroke(255);
 strokeWeight(2);
 drawStar(0, 0, 100, 40, 4);
}


function drawStar(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;

  beginShape();
  for (let a = 0; a < TWO_PI; a += angle){
    // outer point
    let sx = x + cos(a) * radius1;
    let sy = y + sin(a) * radius1;
    vertex(sx, sy);
    // inner point
    sx = x + cos(a + halfAngle) * radius2;
    sy + y + sin(a + halfAngle) * radius2;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function draw() {
  
}
