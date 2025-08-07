import kaboom from "./kaboom.js";

export const k = kaboom({                       // so we gonna call all the fxns we need from this k object, just for clean code, doing this so we don't have to import kaboom globally
    global: false,                              // this line helps us to implement the above comment.
    touchToMouse: true,                         // translate all touch events from the phone to mouse click events
    canvas: document.getElementById("game"),    // passing the html canvas we declared in the index.html to kaboom so that it can take control of it 
});
