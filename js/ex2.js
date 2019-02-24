let images = [

];

let currentIndex = 0;

function next() {
  currentIndex++;

  if (currentIndex == 5) {
    currentIndex = 0;
  }

  document.getElementById("slideshow").src = images[currentIndex];
}

function previous() {
  currentIndex--;

  if (currentIndex == -1) {
    currentIndex = 4;
  }

  document.getElementById("slideshow").src = images[currentIndex];
}

function updateImage(name) {
  let img = document.getElementById("slideshow");
  img.src = name;
  img.width = 0;
  img.height = 0;
}
