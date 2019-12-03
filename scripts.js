function loaded() {
    typer("I KNOW YOUR NAME" , 150, "title", 500)
    typer("Created by Alex Leybourne", 100, "subTitle", 4000)
}


var tPosition = 0


function typer(text, speed, id, timeout) {

    var i = 0;
    var txt = text
    var speed = speed
    

    setTimeout(type, timeout)
    function type() {
    if (i < txt.length) {
        document.getElementById(id).innerHTML += txt.charAt(i);
        i++;
        setTimeout(type, speed);
    } 
    }

}