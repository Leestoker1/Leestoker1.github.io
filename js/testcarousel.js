   //Images container
  var images = document.getElementById('carouselImages');
  //Image caption
  var caption = document.getElementById('carouselCaption');
  //Button to go back
  var prev = document.getElementById('carouselPrev');
  //Button to go forward
  var next = document.getElementById('carouselNext');
  //Fetches our json image
  fetch("js/theparty.json")
  
  //After fetching the image do this
  .then(function(res) {
    // Get the JSON representation of the response object then...
    res.json().then(function(json) {
      //Run through the array
      json.forEach(function(el, i) {
        //Make a new image element
        var image = document.createElement('img');
        //Set attributes to image
        image.setAttribute('src', el.url);        
        image.setAttribute('alt', el.caption);   
        image.setAttribute('title', el.caption); 
        //Append the image to our carouselImages element
        images.appendChild(image);
      });
      //Pass the array to this function when the images are loaded in
      setupCarousel(json);
    });
  });
  
 //The carousel setup function that we use above
  function setupCarousel(json) {
    
 
  
    // Number of children in your carouselImages element
    var imageCount = images.childElementCount;
    var currentImage = 1
    var imageWidth = 500;
  
    //Left button//
    //If the button is clicked will call a function
    prev.addEventListener('click', function() {
      //If condition to check that it is not the first image    If the image in view is not the first image...
      if(currentImage != 1) {
        //Decrement the current image reference
        --currentImage;
        //Uses marginRight to move to the image before. Move the previous image into view using the marginLeft property
        images.style.left = imageWidth - (currentImage * imageWidth) + 'px';
      }
      //Updates our caption
      caption.innerText = json[currentImage - 1].caption;
    });
  
    //Right button//
    //If the button is clicked will call a function
    next.addEventListener('click', function() {
      //If condition to make sure the image in view is not the last image
      if(currentImage != imageCount) {
        //Increment the current image reference
        ++currentImage;
        //Uses marginLeft to move to the next image. Move the next image into view using the marginLeft property
        images.style.left = imageWidth - (currentImage * imageWidth) + 'px';
      }
      //Updates the caption
      caption.innerText = json[currentImage - 1].caption;
    });
    //Updates the caption
    caption.innerText = json[currentImage - 1].caption;
  }