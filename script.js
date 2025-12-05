console.log("connected!")

var score = 0;

// //DROP J
// var jY = 0;

// function jDrop()    {
//     loadImage("drop.svg");
//     jY = jY +random(1, 5);

//     if(aY > 1000)  { //400 is the bottom of the canvas
//     aY = 0;
//     }
// }

// //drop random marimba
// var dropSound =["marimba1.mp3", "marimba2.mp3", "marimba3.mp3"] //<-- this is an array
// var counter = 0;
// //unamed function
// $("#dropSound").on("keydown", function(){
//     // // counter = counter + 1; <-- longform ver. like in processing
//     // counter++; //<-- increment operator, to add a limit smth to do w/ a link, length and percent?? which goes into the logos[counter]
//     var randomNum = Math.floor(Math.random()*dropSound.length)
//     console.log(randomNum)
//     $(this).attr("src", "assets/" + dropSound[randomNum]);
//     if(counter == dropSound.length -1)  {
//         counter = -1; //longform ver. like in processing
//     }
// })

var notes =["heart.svg", "star.svg", "drop.svg"] //<-- this is an array
var counter = 0;

$("#leftNote").on("click", function(leftNotePressed){
    var randomNum = Math.floor(Math.random()*notes.length)
    console.log(randomNum)
    $(this).attr("src", "assets/" + notes[randomNum]);
    if(counter == notes.length -1)  {
        counter = -1;
    }
})
$("#rightNote").on("click", function(rightNotePressed){
    var randomNum = Math.floor(Math.random()*notes.length)
    console.log(randomNum)
    $(this).attr("src", "assets/" + notes[randomNum]);
    if(counter == notes.length -1)  {
        counter = -1;
    }
})