import {second} from "./second.js";

/**
   Even though mycss.css isn't used in this JS file,
   we should import it (same for images as well), 
   so that it can be used by the webpack 
   CSS loader and then injected into the HTML file by 
   Style loader.
 */

import '../css/mycss.css';


console.log("first")

document.body.append(second());

