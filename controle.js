function on(){
document.getElementById("lamp").src ="on.jpeg";
}

function off(){
document.getElementById("lamp").src ="off.jpeg";
}

function blink(){
    var intervalo = 0;
    var contador = 0;
    while (contador < 10){
        intervalo += 300;
        setTimeout("document.getElementById('lamp').src = 'on.jpeg';" ,intervalo);
        intervalo += 300;
        setTimeout("document.getElementById('lamp').src = 'off.jpeg';" ,intervalo);
        contador ++;
    }
}