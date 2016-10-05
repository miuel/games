//Genera un número aleatorio entre un rango de enteros
function opts(minimo, maximo)
{
    var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
    return numero;
}

var rock = 0;
var paper = 1;
var scissor = 2;
//array:
var opciones = ["Rock ✊", "Paper ✋", "Scissors ✌🏽"];

var opcionUsuario;
var opcionMaquina = opts(0,2);

function play() {

opcionUsuario = prompt("¿What is your choice ?\nRock: 0 ✊\nPaper: 1 ✋\nScissors: 2 ✌🏽", 0);
alert("You choose " + opciones[opcionUsuario]);
alert("I 🤖 choose " + opciones[opcionMaquina]);


if(opcionUsuario == rock)
{
    if(opcionMaquina == rock)
    {
        alert("Draw!");
    }
    else if(opcionMaquina == paper)
    {
        alert("You Lose :( ");
    }
    else if(opcionMaquina == scissor)
    {
        alert("You Win!");
    }
}
else if(opcionUsuario == paper)
{
    if(opcionMaquina == rock)
    {
        alert("You Win!");
    }
    else if(opcionMaquina == paper)
    {
        alert("Draw!");
    }
    else if(opcionMaquina == scissor)
    {
        alert("You Lose!");
    }
}
else if(opcionUsuario == scissor)
{
    if(opcionMaquina == rock)
    {
        alert("You Lose!");
    }
    else if(opcionMaquina == paper)
    {
        alert("You Win!");
    }
    else if(opcionMaquina == scissor)
    {
        alert("Draw!");
    }
}
else
{
    alert("🤔 WTF?");
}
}