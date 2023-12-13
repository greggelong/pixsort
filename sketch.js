let img;
let cvn;
let inst;

function preload() {
  img = loadImage("mld.jpg");
}

function setup() {
  cvn = createCanvas(800, 800);
  let cx = windowWidth/2-cvn.width/2
  let cy = windowHeight/2-cvn.height/2
  cvn.position(cx,cy)
  inst = createP("Click and hold the mouse button to sort!")
  inst.position(windowWidth/2,windowHeight-50)
  pixelDensity(1);

  // Resize the image 
  // at this level each pixel is two by two to screen
  img.resize(400,400);
  


  noSmooth(); // keeps it crisp
  image(img, 0, 0, width, height);
}

function draw() {
  if(mouseIsPressed){
  img.loadPixels();

  // Loop 100 many times
  for (let i = 0; i < 56000; i++) {
    //sortPixelsPaTB();
    //you can sort different ways 
    //sortPixelsPaLR();  // left right
    sortPixelsPaLRB();  //  check right neighbor and switch with with one below
  }

  img.updatePixels();
}

  image(img, 0, 0, width, height);
}


function sortPixelsPaLR() {
  
  
  // Get a random pixel.
  const x = floor(random(img.width-1)); // so not out of range
  const y = floor(random(img.height));

  // Get the position of target and neighbor in the pixel array
  let pos =4*( y*img.width+x);
  let nei = 4*(y*img.width+(x+1));
  //let pos2 = 4*((y+1)*img.width+(x))
  

  

  // Get the total R+G+B of both colors.
  let totalOne = img.pixels[pos]+ img.pixels[pos+1] + img.pixels[pos+2];
  let totalTwo = img.pixels[nei]+ img.pixels[nei+1] + img.pixels[nei+2];
  let temp = [];  // a temp for switing

  temp[0] = img.pixels[pos];
  temp[1] = img.pixels[pos+1]
  temp[2] = img.pixels[pos+2]


  // If the first total is less than the second total, swap the pixels.
  // 
  // dark to the the right
  if (totalOne < totalTwo) {
  
    img.pixels[pos] = img.pixels[nei]
    img.pixels[pos+1] = img.pixels[nei+1]
    img.pixels[pos+2] = img.pixels[nei+2]
    //img.set(x, y + 1, colorOne);
    img.pixels[nei] = temp[0]
    img.pixels[nei+1] = temp[1]
    img.pixels[nei+2] = temp[2]
  }
  
}

function sortPixelsPaTB() {
  
  
  // Get a random pixel.
  const x = floor(random(img.width)); // so not out of range
  const y = floor(random(img.height-1));

  // Get the position in the pixel array
  let pos =4*( y*img.width+x);
  let nei = 4*((y+1)*img.width+(x));
  //let pos2 = 4*((y+1)*img.width+(x))
  

  // Get the position of target and neighbor in the pixel array

  // Get the total R+G+B of both colors.
  let totalOne = img.pixels[pos]+ img.pixels[pos+1] + img.pixels[pos+2];
  let totalTwo = img.pixels[nei]+ img.pixels[nei+1] + img.pixels[nei+2];
  let temp = [];

  temp[0] = img.pixels[pos];
  temp[1] = img.pixels[pos+1]
  temp[2] = img.pixels[pos+2]


  // If the first total is less than the second total, swap the pixels.
  // This causes darker colors to fall to the bottom,
  // and light pixels to rise to the top.
  if (totalOne < totalTwo) {
  
    img.pixels[pos] = img.pixels[nei]
    img.pixels[pos+1] = img.pixels[nei+1]
    img.pixels[pos+2] = img.pixels[nei+2]
    //img.set(x, y + 1, colorOne);
    img.pixels[nei] = temp[0]
    img.pixels[nei+1] = temp[1]
    img.pixels[nei+2] = temp[2]
  }
  
}



function sortPixelsPaLRB() {
  
  
  // Get a random pixel.
  const x = floor(random(img.width-1)); // so not out of range
  const y = floor(random(img.height));

  // Get the position in the pixel array
  let pos =4*( y*img.width+x);
  let nei = 4*(y*img.width+(x+1));
  let pos2 = 4*((y+1)*img.width+(x))
  

  

  // Get the total R+G+B of both colors.
  let totalOne = img.pixels[pos]+ img.pixels[pos+1] + img.pixels[pos+2];
  let totalTwo = img.pixels[nei]+ img.pixels[nei+1] + img.pixels[nei+2];
  let temp = [];

  temp[0] = img.pixels[pos];
  temp[1] = img.pixels[pos+1]
  temp[2] = img.pixels[pos+2]


  // If the first total is less than the second total, the first one with pos2.
  // This causes a wind like effect that that seems to blow to the left
  // and down
  if (totalOne < totalTwo) {
  
    img.pixels[pos] = img.pixels[nei]
    img.pixels[pos+1] = img.pixels[nei+1]
    img.pixels[pos+2] = img.pixels[nei+2]
    //img.set(x, y + 1, colorOne);
    img.pixels[pos2] = temp[0]
    img.pixels[pos2+1] = temp[1]
    img.pixels[pos2+2] = temp[2]
  }
  
}
 