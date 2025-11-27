//TODO:cretethumbnainimages to be lcicked on and then see them in fullscrreen

//1. store image data:
const imageData = [
  {
    imageName: "dolphins",
    imageSRC: "images/dolphins.jpg",
    imageAlt: "Dolphins swimming",
  },
  {
    imageName: "humpback",
    imageSRC: "images/humpback.jpg",
    imageAlt: "A whale breaching",
  },
  {
    imageName: "heron",
    imageSRC: "images/heron.jpg",
    imageAlt: "A heron flying over water",
  },
];

let thumbnailContainer = document.getElementById("thumbnail-container");

//2. create thumbnail images:
//select DOM element (thumbnail container) to contain thumbnails
//this is repetative, so a for loop (for of/each?) can be used
//the loop task is to create an img elemt and to update the src and alt propertiers, to match those in the array (parameters)
//give each img a class name

function createThumbnails() {
  for (let i = 0; i < imageData.length; i++) {
    const thumb = document.createElement("img");
    thumb.src = imageData[i].imageSRC;
    thumb.classList.add("thumbnail");
    thumbnailContainer.appendChild(thumb);
  }
}

//add event listener to each img. the event handler is the function I write to create the fullscreen images
thumb.addEventListener("click", createFullscreenImage());

//3. create fullscreen images:
//this is the event handler
//select the fullscreen container
//delete current fullscreen image
//fullscreenConatiner.innerHTML="" or null
//create image, update values (properties)
//add classname so it can be styled to be fullscreen
//appent to container
function createFullscreenImage() {}

//add the createFullscreenImage function as the event handler of the above event
//call createThumbnails function

createThumbnails();
