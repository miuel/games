var images = {};

loadImage("brazo_izq");
loadImage("piernas");
loadImage("torso");
loadImage("brazo_der");
loadImage("cabeza");
loadImage("izq_jump");
loadImage("der_jump");
loadImage("torso_jump");
loadImage("piernas_jump");
loadImage("pollo");

function loadImage(name) {

  images[name] = new Image();
  images[name].onload = function() { 
      resourceLoaded();
  }
  images[name].src = "img/jumper/" + name + ".png";
}

var totalResources = 9;
var numResourcesLoaded = 0;
var fps = 30;

function resourceLoaded() {

  numResourcesLoaded += 1;
  if(numResourcesLoaded === totalResources) {
    setInterval(gameArea, 1000 / fps);
  }
}
   
var lienzo;
var contx;

function gameArea () {
    var lienzo = document.getElementById('jump');
    lienzo.width = 500;
    lienzo.height = 450;
    contx = lienzo.getContext("2d");
    // interval = setInterval(updateMove, 1000 / fps);
    contx.clearRect(0, 0, lienzo.width, lienzo.height);
    dibujar();
}


function dibujar () {
  var x = 100;
  var y = 185;
  // var jumpHeight = 45;

  if (jumping) {
    drawEllipse(x + 60, y + 235, 90 - breathAmt, 8);
    contx.drawImage(images["der_jump"], x + 45, y + 10 - breathAmt);
    contx.drawImage(images["izq_jump"], x - 44, y + 37 - breathAmt);
    contx.drawImage(images["cabeza"], x - 10, y - 125 - breathAmt);   
    contx.drawImage(images["piernas_jump"], x + 28, y + 105);
    contx.drawImage(images["torso_jump"], x + 23, y + 36);
  } else {
      contx.drawImage(images["cabeza"], x - 10, y - 125 - breathAmt);   
      drawEllipse(x + 60, y + 215, 160 - breathAmt , 10);
      contx.drawImage(images["brazo_der"], x + 33, y + 38 - breathAmt);
      contx.drawImage(images["brazo_izq"], x + 5, y + 40 - breathAmt);
      contx.drawImage(images["piernas"], x + 20, y + 120);
      contx.drawImage(images["torso"], x + 15, y + 36);
  }
      contx.drawImage(images["pollo"], x + 500 - moveAmt, y + 170);
  // console.log(pollo);
}

  // dibujo la sombra 
function drawEllipse(centerX, centerY, width, height) {
  
  contx.beginPath();
  
  contx.moveTo(centerX, centerY - height/2);
  
  contx.bezierCurveTo(
    centerX + width/2, centerY - height/2,
    centerX + width/2, centerY + height/2,
    centerX, centerY + height/2);

  contx.bezierCurveTo(
    centerX - width/2, centerY + height/2,
    centerX - width/2, centerY - height/2,
    centerX, centerY - height/2);
 
  contx.fillStyle = "black";
  contx.fill();
  contx.closePath();  
}

// saltando
var jumping = false;

function jump() {
                        
  if (!jumping) {
    jumping = true;
    setTimeout(land, 700);
  }
}

function land() {
  jumping = false;
}

  // respirando
var breathInc = 0.1;
var breathDir = 1;
var breathAmt = 0;
var breathMax = 2;
var breathInterval = setInterval(updateBreath, 1000 / fps);
function updateBreath() { 
  if (breathDir === 1) {  // breath in
    breathAmt -= breathInc;
    if (breathAmt < -breathMax) {
      breathDir = -1;
    }
  } else {  // breath out
    breathAmt += breathInc;
    if(breathAmt > breathMax) {
      breathDir = 1;
    }
  }
}

// moviendo
var moveInc = 0.9;
var moveDir = 1;
var moveAmt = 0;
var moveMax = 2;
var moveInterval = setInterval(updateMove, 200 / fps);

function updateMove() { 
    if (moveDir === 1) {
      moveAmt -= moveInc;
      if (moveAmt < -moveMax) {
        moveDir = -1;
      }
    } else {
      moveAmt += moveInc;
      if (moveAmt > moveMax) {
        moveDir = 2;
      }
    }
  }








