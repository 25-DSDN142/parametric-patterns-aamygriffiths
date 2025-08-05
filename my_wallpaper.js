//your parameter variables go here!
let rect_width = 20;
let rect_height = 30;

let midX = 100;
let midY = 100;

//petal size
let petalLength = 60;
let petalWidth = 30;
let numPetals = 6;

//circle size
let centreX = 0;
let centreY = 0;
let centreDiameter = 40;

//square size
let squareSize = 50;

//corner positions
let corners = [
  [-100, -100], // top-left
  [100, -100], // top-right
  [100, 100], //bottom-right
  [-100, 100], // bottom-left
];

let myOption = 3;

y = 15;

z = 12;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(A3);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  if (myOption === 1) {
    background(242, 236, 184); // cream
  } else if (myOption === 2) {
    background(205, 242, 184); // mint green
  } else if (myOption === 3) {
    background(219, 134, 147); // rose
  }
  else {
      background(212, 186, 232); // lilac
  }
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
    let centreColour1 = color(139, 179, 178); // hazy light blue
    let centreColour2 = color(227, 143, 202);
    if (z < 10) {
      fill(centreColour1);
    } else {
      fill(centreColour2);
    }
    circle(centreX, centreY, centreDiameter);

    // squares in corner
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

