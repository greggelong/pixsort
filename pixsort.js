let img;

function preload() {
  img = loadImage('your_image.jpg'); // Replace with your image path
}

function setup() {
  createCanvas(img.width, img.height);
  image(img, 0, 0);
  noLoop();
}

function draw() {
  pixelSort(img);
}

function pixelSort(img) {
  img.loadPixels();
  for (let i = 0; i < img.width; i++) {
    for (let j = 0; j < img.height; j++) {
      let index = (i + j * img.width) * 4;
      let brightnessValue = brightness(img.pixels[index], img.pixels[index + 1], img.pixels[index + 2]);

      // Customize the sorting condition based on your desired effect
      if (brightnessValue > 100) {
        let temp = img.pixels[index];
        img.pixels[index] = img.pixels[index + 2];
        img.pixels[index + 2] = temp;
      }
    }
  }
  img.updatePixels();
  image(img, 0, 0);
}