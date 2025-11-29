const imageData = [
  {
    imageName: "dolphins",
    imageSRC: "./images/dolphins.webp",
    imageAlt: "Dolphins swimming in the ocean",
  },
  {
    imageName: "humming bord",
    imageSRC: "./images/humming_bird.webp",
    imageAlt: "a green and purple humming bird",
  },
  {
    imageName: "fox",
    imageSRC: "./images/fox.jpg",
    imageAlt: "A small fox surrounded by bluebells",
  },
  {
    imageName: "humpback",
    imageSRC: "./images/humpback.jpg",
    imageAlt: "A whale breaching the ocean surface",
  },
  {
    imageName: "red squirrel",
    imageSRC: "./images/red_squirrel.webp",
    imageAlt: "A red squirrel, lit brightly in front of a dark background",
  },
  {
    imageName: "penguins",
    imageSRC: "./images/penguins.webp",
    imageAlt: "penguins swimming and leaping from the sea",
  },
  {
    imageName: "heron",
    imageSRC: "./images/heron.jpg",
    imageAlt: "A heron flying over water",
  },
  {
    imageName: "deer",
    imageSRC: "./images/deer.jpg",
    imageAlt: "a prancihg deer in an open field",
  },
  {
    imageName: "elephant",
    imageSRC: "./images/elephant.webp",
    imageAlt: "A bull elephant in Africa",
  },
  {
    imageName: "elk",
    imageSRC: "./images/elk.webp",
    imageAlt: "a large male elk, stood on a road",
  },
  {
    imageName: "turtle",
    imageSRC: "./images/turtle.webp",
    imageAlt: "A turtle in the sea",
  },
  {
    imageName: "finch",
    imageSRC: "./images/finch.webp",
    imageAlt: "a brown finch perched on a branch",
  },
  {
    imageName: "hares",
    imageSRC: "./images/hares.jpg",
    imageAlt: "3 hares in the snow",
  },
  {
    imageName: "lizard",
    imageSRC: "./images/lizard.webp",
    imageAlt: "A small green lizard, sat on a fence",
  },
  {
    imageName: "Zebra",
    imageSRC: "./images/zebra.webp",
    imageAlt: "A heard if zebra in long grass",
  },
  {
    imageName: "racoon",
    imageSRC: "./images/racoon.webp",
    imageAlt: "A baby racoon walking on grass",
  },
  {
    imageName: "horses",
    imageSRC: "./images/horses.webp",
    imageAlt: "horses galloping infront of a sunset",
  },
  {
    imageName: "arctic fox",
    imageSRC: "./images/arctic_fox.jpg",
    imageAlt: "A small fox surrounded by bluebells",
  },
  {
    imageName: "kingfisher_and_wagtail",
    imageSRC: "./images/kingfisher_and_wagtail.jpg",
    imageAlt: "a kingfisher perched on a branch and a pied wagtail in flight",
  },
];

const thumbnailContainer = document.getElementById("thumbnail-container");
const fullscreenContainer = document.getElementById("fullscreen-container");

function createThumbnails(i) {
  for (let i = 0; i < imageData.length; i++) {
    const thumb = document.createElement("img");
    thumb.src = imageData[i].imageSRC;
    thumb.alt = imageData[i].imageAlt;
    thumb.classList.add = imageData[i].class;
    thumb.id = [i];
    thumbnailContainer.appendChild(thumb);
    thumb.addEventListener("click", createFullscreenImage);
  }
}

createThumbnails();

function initialFullscreenImage(i) {
  const fullscreenImage = document.createElement("img");
  fullscreenContainer.innerHTML = null;
  fullscreenImage.src = imageData[0].imageSRC;
  fullscreenImage.alt = imageData[0].imageAlt;
  fullscreenImage.id = 0;
  fullscreenImage.classList.add("fullscreenImage");
  fullscreenContainer.appendChild(fullscreenImage);
}

initialFullscreenImage();

function createFullscreenImage(i) {
  const fullscreenImage = document.createElement("img");
  fullscreenContainer.innerHTML = null;
  fullscreenImage.src = imageData[this.id].imageSRC;
  fullscreenImage.alt = imageData[this.id].imageAlt;
  fullscreenImage.id = this.id;
  fullscreenImage.classList.add("fullscreenImage");
  fullscreenContainer.appendChild(fullscreenImage);
}

window.addEventListener("keydown", function (event) {
  const currentPhoto = document.querySelector(".fullscreenImage");
  const currentIndexString = currentPhoto.id;
  const currentIndexInt = parseInt(currentIndexString);
  if (event.key === "ArrowRight") {
    if (currentIndexInt === imageData.length - 1) {
    } else {
      fullscreenContainer.innerHTML = null;
      const fullscreenImage = document.createElement("img");
      fullscreenImage.src = imageData[currentIndexInt + 1].imageSRC;
      fullscreenImage.alt = imageData[currentIndexInt + 1].imageAlt;
      fullscreenImage.id = currentIndexInt + 1;
      fullscreenImage.classList.add("fullscreenImage");
      fullscreenContainer.appendChild(fullscreenImage);
    }
  } else if (event.key === "ArrowLeft")
    if (currentIndexInt === 0) {
    } else {
      fullscreenContainer.innerHTML = null;
      const fullscreenImage = document.createElement("img");
      fullscreenImage.src = imageData[currentIndexInt - 1].imageSRC;
      fullscreenImage.alt = imageData[currentIndexInt - 1].imageAlt;
      fullscreenImage.id = currentIndexInt - 1;
      fullscreenImage.classList.add("fullscreenImage");
      fullscreenContainer.appendChild(fullscreenImage);
    }
  else {
  }
});
