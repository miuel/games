var Mercury = 2.78;
var Venus = 8.87;
var Moon = 1.62;
var Mars = 3.72;
var Jupiter = 22.88;
var Saturn = 9.05;
var Uranus = 7.77;
var Neptune = 11;
var Pluto = 0.4;

var Earth = 9.78;

var planets = [ Mercury, Venus, Moon, Mars, Jupiter, Saturn, Uranus, Neptune, Pluto ];

var myWeight = 60;
var weightFinal;


function calculing () {
  var user = parseInt(prompt("What is your weight ?"));
  var optPlanet = parseInt(prompt("Now choose a Planet"));
  if (optPlanet === 0) {
    weightFinal =  user * planets[0] / Earth;
    var name = "Mercury"
  }
  else if (optPlanet === 1) {
    weightFinal =  user * planets[1] / Earth;
    var name = "Venus";
  }
  else if (optPlanet === 2) {
    weightFinal =  user * planets[2] / Earth;
    var name = "the Moon";
  }
  else if (optPlanet === 3) {
    weightFinal =  user * planets[3] / Earth;
    var name = "Mars";
  }
  else if (optPlanet === 4) {
    weightFinal =  user * planets[4] / Earth;
    var name = "Jupiter";
  }
  else if (optPlanet === 5) {
    weightFinal =  user * planets[5] / Earth;
    var name = "Saturn";
  }
  else if (optPlanet === 6) {
    weightFinal =  user * planets[6] / Earth;
    var name = "Uranus";
  }
  else if (optPlanet === 7) {
    weightFinal =  user * planets[7] / Earth;
    var name = "Neptune";
  }
  else if (optPlanet === 8) {
    weightFinal =  user * planets[8] / Earth;
    var name = "Pluto";
  }
  else
    {
      alert("🤔 WTF?");
  }

  var weightFinal = parseInt(weightFinal);
  alert("Your weight on " + name + " is " + weightFinal + " Kilograms");
}




