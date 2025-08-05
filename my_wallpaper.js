//your parameter variables go here!
let rect_width = 20;
let rect_height = 30;

let midX = 100;
let midY = 100;

//petal size
let petalLength = 60;
let petalWidth = 25;
let numPetals = 8;

//circle size
let centreX = 0;
let centreY = 0;
let centreDiameter = 35;

//square size
let squareSize = 65;

//corner positions
let corners = [
  [-100, -100], // top-left
  [100, -100], // top-right
  [100, 100], //bottom-right
  [-100, 100], // bottom-left
];

y = 12;

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
  background(242, 241, 211); // cream colour

}

function my_symbol() {// do not rename this function. Treat this similarly to a Draw function
  push();
    translate(midX, midY);

    noStroke();
      for (let i = 0; i < numPetals; i++) {
        push();
        let petalColour1 = color(180, 219, 219); // light blue
        let petalColour2 = color(255, 182, 193); // soft pink
        rotate((360 / numPetals) * i);
        if (y < 15) {
          fill(petalColour1);
        } else {
          fill(petalColour2);
        }
        ellipse(0, -petalLength / 2, petalWidth, petalLength); // draws the top petal
        pop();
      }

    // centre circle
    let centreColour = color(139, 179, 178); // hazy light blue
    fill(centreColour);
    circle(centreX, centreY, centreDiameter);

    // squares in corner
    fill(centreColour);
    noStroke();

    for (let[x, y] of corners) {
      push();
      translate(x, y); // move to corner
      rotate(45); // rotates 45 degrees
      rectMode(CENTER);
      rect(0, 0, squareSize, squareSize);
      pop();
    }

  pop();
}

