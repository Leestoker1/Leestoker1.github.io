  // Where my image is stored
  var pics = document.getElementById('pics');
  
  fetch("js/thecamppics.json")
  //After fetching the image do this
  .then(function(res) {
    //Get the JSON representation of the response object then
    res.json().then(function(json) {
      //Run through the array
      json.forEach(function(el) {
        //Makes a new item container for the images
        var picsItem = document.createElement('a');
        //Set a class name for the div
        picsItem.setAttribute('class', 'pics-item');
        //Add href to the anchor
        picsItem.setAttribute('href', el.url);
        //Makes the images open in a new tab when clicked
        picsItem.setAttribute('target', '_blank');
        //Makes an image element
        var image = document.createElement('img');
        //Add attributes to the image
        image.setAttribute('src', el.url);        // The url of the image
        image.setAttribute('alt', el.caption);    // The alternative text
        image.setAttribute('title', el.caption);  // The tooltip
        //Makes a caption element
        var caption = document.createElement('caption');
        //Adds text content to caption
        caption.innerText = el.caption;
        //Appends the image and caption to our pics item container
        picsItem.appendChild(image);
        picsItem.appendChild(caption);
        //Append the pics item to our pics element
        pics.appendChild(picsItem);
      });
    });
  });