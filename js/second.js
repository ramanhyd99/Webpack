import myimage from '../images/myimage.jpeg'

/**
  This file shows us how we can import assets like images into 
  our JS since we have used the appropriate loader in the config 
  file. Also, we export our function which returns HTML code, it
  is very similar to what React does!

  Also, even if we do not use the image asset anywhere in the code,
  we still should import it in atleast 1 JS file like we did for the 
  CSS file in first.js so that Webpack can move it to the dist folder.
 */

export const second = () => {
    console.log("second")

    var head = document.createElement('main');
    var img = document.createElement('img');
    head.append(img);
    //note that the image imported is the path rather than the actual image
    img.src = myimage;

    return head;
}