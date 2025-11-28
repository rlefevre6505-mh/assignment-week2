//TODO: createthumbnail images to be clicked on and then see them in fullscreen

//1. store image data:
const imageData = [
  {
    imageName: "dolphins",
    imageSRC: "images/dolphins.jpg",
    imageAlt: "Dolphins swimming in the ocean",
  },
  {
    imageName: "humpback",
    imageSRC: "images/humpback.jpg",
    imageAlt: "A whale breaching the ocean surface",
  },
  {
    imageName: "heron",
    imageSRC: "images/heron.jpg",
    imageAlt: "A heron flying over water",
  },
  {
    imageName: "deer",
    imageSRC: "images/deer.jpg",
    imageAlt: "a prancihg deer in an open field",
  },
  {
    imageName: "finch",
    imageSRC: "images/finch.jpg",
    imageAlt: "a brown finch perched on a branch",
  },
  {
    imageName: "hares",
    imageSRC: "images/hares.jpg",
    imageAlt: "3 hares in the snow",
  },
];

//2. create thumbnail images:
//select DOM element (thumbnail container) to contain thumbnails
let thumbnailContainer = document.getElementById("thumbnail-container");
let fullscreenContainer = document.getElementById("fullscreen-container");
//this is repetative, so a for loop (for of/each?) can be used
//the loop task is to create an img elemt and to update the src and alt propertiers, to match those in the array (parameters)
//give each img a class name

function createThumbnails(i) {
  for (let i = 0; i < imageData.length; i++) {
    const thumb = document.createElement("img");
    thumb.src = imageData[i].imageSRC;
    thumb.alt = imageData[i].imageAlt;
    thumb.classList.add("thumbnail");
    thumb.id = [i];
    thumbnailContainer.appendChild(thumb);
    thumb.addEventListener("click", createFullscreenImage);
  }
}

//add event listener to each img. the event handler is the function I write to create the fullscreen images

//3. create fullscreen images:
//this is the event handler
//select the fullscreen container
//delete current fullscreen image (fullscreenConatiner.innerHTML="" or null)
//create image, update values (properties)
//add classname so it can be styled to be fullscreen
//appent to container
function createFullscreenImage(i) {
  console.log("thumb clicked!");
  const fullscreenImage = document.createElement("img");
  fullscreenContainer.innerHTML = null;
  fullscreenImage.src = imageData[this.id].imageSRC;
  fullscreenImage.alt = imageData[this.id].imageAlt;
  fullscreenContainer.classList.add("fullscreenImage");
  fullscreenContainer.appendChild(fullscreenImage);
}

//add the createFullscreenImage function as the event handler of the above event
//call createThumbnails function

createThumbnails();
