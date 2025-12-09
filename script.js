console.log("connected!")

// ---------------------START OF THE GAME CODE
//CREDITS
//base code from Mr. Kitty Codes' Rhythm Game Tutorial on YouTube
//function winCheck from poly_'s Bocchi the Rock inspired game
//raindrop falling code from https://editor.p5js.org/samchasan/sketches/SJfzWJviW


var yposition = 0;
var xposition = 50;
var score = 0;

//from https://editor.p5js.org/SayTheYoung/sketches/o8G-3Cm1I
myPosition = 0;

function tearDrop() {
  //===TEAR DROP: left
  push()
    fill('#ACF5FF')
    noStroke()
  
    translate(480, 80+myPosition)
    push();
	  triangle(xposition-20.5,yposition,xposition+20.5,yposition,xposition,yposition-80)
    ellipse(xposition,yposition,40,40);
    pop();
	var mySpeed = 2;
	myPosition += mySpeed;
	if (myPosition > 400){ 
		myPosition = 0; 
	}
  pop()
  
  
  //===TEAR DROP: right
  push()
    fill('#ACF5FF')
    noStroke()
  
    translate(1000, 80+myPosition)
    push();
	  triangle(xposition-20.5,yposition,xposition+20.5,yposition,xposition,yposition-80)
    ellipse(xposition,yposition,40,40);
    pop();
    var mySpeed = 2;
	myPosition += mySpeed;
	if (myPosition > 400){ 
		myPosition = 0; 
	}
  pop()
  
}

function keyPressed()  {
  if(key == 'j' && myPosition > 300 && myPosition <= 350)  {
     score = score +10; 
  }
  if(key == 'f' && myPosition > 300 && myPosition <= 350)  {
     score = score +10; 
  }
} //end of function keyPressed()


function winCheck()  {
  if (score ==100)  {
    win = true
    fill(255);
    text("YOU WIN!", 750, 200);
    myPosition = 0;
  } else  {
    win = false
  }
}

function judgeLine()  {
  push(); //pushMatrix();
  noStroke();
  fill(172, 245, 255, 150);
  rect(0, 450, 1920, 600);
  pop(); //popMatrix();
  
}

function eyes() {

}

//------------------------------------------star bg ver 
//code I made for BG while adapting a tutorial https://editor.p5js.org/JulianaRuelo/sketches/-Ogi5SOhi

let stars = [];

function setup() {
  createCanvas(1920, 600);
  angleMode(DEGREES);
  for(let i = 0; i < 300; i++)  {
    stars.push(new Star())
  }
}

function draw() {
  background(32, 10, 60);
  
  drawStars(); //this is the animated starry background

  push();
  fill(255);
  text("SCORE:", 1200, 75);
  text(score, 1200, 100);
  pop();
  
  judgeLine();
  
  tearDrop();
  keyPressed();
  winCheck();

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



//MODAL CODE FROM W3SCHOOLS
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}