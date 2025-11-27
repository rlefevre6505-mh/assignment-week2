//TODO:cretethumbnainimages to be lcicked on and then see them in fullscrreen

//1. store image data:
const imageData = [
  {
    imageName: "#",
    imageSRC: "#",
    imageAlt: "#",
  },
  {
    imageName: "#",
    imageSRC: "#",
    imageAlt: "#",
  },
  {
    imageName: "#",
    imageSRC: "#",
    imageAlt: "#",
  },
];

//2. create thumbnail images:
function createThumbnails() {
  //select DOM element (thumb container) to contain thumbnails
  //this is repetative, so a for loop (for of/each?) can be used
  //the loop task is to create an img elemt and to update the src and alt propertiers, to match those in the array (parameters)
  //give each img a class name
  //add event listener to each image
  //add event listener to each img. the event handler is the function I write to create the fullscreen images
  //append created images to the thumbnail container
}

//3. create fullscreen images:
function createFullscreenImage() {
  //this is the event handler
  //select the fullscreen container
  //delete current fullscreen image
  //fullscreenConatiner.innerHTML="" or null
  //create image, update values (properties)
  //add classname so it can be styled to be fullscreen
  //appent to container
}

//add the createFullscreenImage function as the event handler of the above event
//call createThumbnails function
