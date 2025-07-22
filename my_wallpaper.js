//your parameter variables go here!
let eyeX = 24;
let eyeY = 45;
let eyeSize = 3
let beeSize = 59
let wingSize = 15

let size = 50;

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
  background(255, 255, 255); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
 let isYellow = true;

   fill(245, 190, 93) // brown
   
 if(beeSize < 60){
  fill(250,228,87); // yellow
 }

  ellipse(45, 50, beeSize, 45);
  fill(188,226,227);
  ellipse(43,20,wingSize,17);
  ellipse(50,20,wingSize,17);
  fill(0,0,0);
  triangle(75, 48, 85, 52, 75,55);

  beginShape();
  vertex(32, 30);
  vertex(42, 28.5);
  vertex(42,72);
  vertex(32,70);
  endShape(CLOSE);

  beginShape()
  vertex(53,29);
  vertex(62,31.5);
  vertex(62, 68);
  vertex(53,71)
  endShape(CLOSE);

  circle( eyeX , eyeY, eyeSize);
}
