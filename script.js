console.log("connected!")

var score = 0;

var notes =["heart.svg", "star.svg", "drop.svg"] //<-- this is an array
var marimbaRandom = document.getElementById[("marimba1", "marimba2", "marimba3")]
var counter = 0;

$("#leftNote").on("click", function(leftNotePressed){
    var randomNum = Math.floor(Math.random()*notes.length)
    console.log('left note tapped')
    $(this).attr("src", "assets/" + notes[randomNum]);
    if(counter == notes.length -1)  {
        counter = -1;
    }
    marimbaRandom.play();
})
$("#rightNote").on("click", function(rightNotePressed){
    var randomNum = Math.floor(Math.random()*notes.length)
    console.log(randomNum)
    $(this).attr("src", "assets/" + notes[randomNum]);
    if(counter == notes.length -1)  {
        counter = -1;
    }
})

const dropNote = document.getElementById("dropNote");
        dropNote.addEventListener("keydown", (dropNotePressed) => {
            if(dropNotePressed.key === 'j')  {
                console.log('j pressed');
            const Marimba = [
            "assets/marimba1.mp3",
            "assets/marimba2.mp3",
            "assets/marimba3.mp3",
            ];
            const randomIndex = Math.floor(Math.random() * Marimba.length);
            const randomMarimba = Marimba[randomIndex];
            const audio = new Audio(randomMarimba);
            audio.play();
            }
        });

// //dropSound random marimba
// var dropSound =["marimba1.mp3", "marimba2.mp3", "marimba3.mp3"] //<-- this is an array
// var counter = 0;
// //unamed function
// $("#dropSound").on("keydown", function(randomMarimba){
//     // // counter = counter + 1; <-- longform ver. like in processing
//     // counter++; //<-- increment operator, to add a limit smth to do w/ a link, length and percent?? which goes into the logos[counter]
//     var randomNum = Math.floor(Math.random()*dropSound.length)
//     console.log(randomNum)
//     $(this).attr("src", "assets/" + dropSound[randomNum]);
//     if(counter == dropSound.length -1)  {
//         counter = -1; //longform ver. like in processing
//     }
// })