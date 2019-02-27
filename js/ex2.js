// Photo citations
// https://pixabay.com/photos/puppy-dog-pet-animal-cute-white-1903313/
// https://pixabay.com/photos/pug-puppy-dog-animal-cute-690566/
// https://pixabay.com/photos/dog-young-dog-small-dog-maltese-1123016/
// https://pixabay.com/photos/australian-shepherd-dog-animal-3237735/
// https://pixabay.com/photos/dog-canine-samoyed-white-beach-699620/
let images = [
    "img/dog1.jpg",
    "img/dog2.jpg",
    "img/dog3.jpg",
    "img/dog4.jpg",
    "img/dog5.jpg" 
];

let currentIndex = 0;

function next() {
  currentIndex++;

  if (currentIndex == 5) {
    currentIndex = 0;
  }

  document.getElementById("slideshow").src = images[currentIndex];

  updateImage(images[currentIndex]);
}

function previous() {
  currentIndex--;

  if (currentIndex == -1) {
    currentIndex = 4;
  }

  document.getElementById("slideshow").src = images[currentIndex];

  updateImage(images[currentIndex]);
}

function updateImage(name) {
  let img = document.getElementById("slideshow");
  img.src = name;
  img.width = 960;
  img.height = 540;
}


updateImage(images[0]);
