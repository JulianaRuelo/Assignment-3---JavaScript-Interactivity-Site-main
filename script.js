console.log("connected!")

var score = 0;

var notes =["heart.svg", "star.svg", "drop.svg"] //<-- this is an array
var marimbaRandom = document.getElementById[("marimba1", "marimba2", "marimba3")]
var counter = 0;

// ---------------------START OF THE GAME CODE
//CREDITS
//base code from Mr. Kitty Codes' Rhythm Game Tutorial on YouTube
//function winCheck from poly_'s Bocchi the Rock inspired game
//raindrop falling code from https://editor.p5js.org/samchasan/sketches/SJfzWJviW


var yposition = 0;
var xposition = 50;

//bY and etc. is from mr kitty codes

var bY = 0; //moves the note across the Y axis
var score = 0;

//from https://editor.p5js.org/SayTheYoung/sketches/o8G-3Cm1I
myPosition = 0;

function tearDrop() {
  //===TEAR DROP: left
  push()
    fill('#ACF5FF')
    noStroke()
  
    translate(480, 350+myPosition)
    push();
	  triangle(xposition-20.5,yposition,xposition+20.5,yposition,xposition,yposition-80)
    ellipse(xposition,yposition,40,40);
    pop();
	var mySpeed = random(1, 10);
	myPosition += mySpeed;
	if (myPosition > 500){ 
		myPosition = 0; 
	}
  pop()
  
  
  //===TEAR DROP: right
  push()
    fill('#ACF5FF')
    noStroke()
  
    translate(1000, 350+myPosition)
    push();
	  triangle(xposition-20.5,yposition,xposition+20.5,yposition,xposition,yposition-80)
    ellipse(xposition,yposition,40,40);
    pop();
    //var mySpeed = 1;
	myPosition += mySpeed;
	if (myPosition > 500){ 
		myPosition = 0; 
	}
  pop()
  
}

function keyPressed()  {
  if(key == 'j' && myPosition > 300 && myPosition <= 450)  {
     score = score +10; 
  }
  if(key == 'f' && myPosition > 300 && myPosition <= 450)  {
     score = score +10; 
  }
} //end of function keyPressed()



function winCheck()  {
  if (score ==100)  {
    win = true
    text("YOU WIN!", 150, 300);
    myPosition = -100;
  } else  {
    win = false
  }
}

function judgeLine()  {
  push(); //pushMatrix();
  noStroke();
  fill(20, 100, 240, 80);
  rect(300, 850, 500, 10);
  rect(300, 850, 500, 600);
  pop(); //popMatrix();
  
}

function eyes() {

}

//------------------------------------------star bg ver 
//code I made for BG while adapting a tutorial https://editor.p5js.org/JulianaRuelo/sketches/-Ogi5SOhi

let stars = [];

function setup() {
  createCanvas(1440, 1000);
  angleMode(DEGREES);
  for(let i = 0; i < 100; i++)  {
    stars.push(new Star())
  }
}

function draw() {
  background(32, 10, 60);
  
  drawStars();

  text("Your Score", 1300, 50);
  text(score, 1300, 75);
  
  judgeLine();
  
  winCheck();

  tearDrop();

} //end of function draw 

function drawStars()  {
  for(let i = 0; i < stars.length; i++)  {
    stars[i].show();
    stars[i].update();
  }
}

//CLASS for Star
class Star {
  
  //CONSTRUCTOR for Star
  constructor()  {
    this.x = random(width);
    this.y = random(height);
    this.size = random(0.5, 4);
    this.speed = random(1, 2);
  }
  
  //lets the stars actually show up on the screen
  show()  {
    push();
    noStroke();
    fill(255, random(100, 255));
    ellipse(this.x, this.y, this.size);
    pop();
  }
  
  //moves them to a new position
  update()  {
    this.y -= this.speed;
    this.x -= this.speed;

  if(this.y < -this.size)  {
     this.y = height + this.size;
     }
  if(this.x < -this.size)  {
     this.x = width + this.size;
     }
}
} //end of Star class

// _____________________END OF THE GAME CODE

// _____________________START OF SOUND
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
// _____________________END OF SOUND