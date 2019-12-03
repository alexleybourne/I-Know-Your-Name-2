function loaded() {
    typer("I KNOW YOUR NAME" , 50, "title", 0)
    typer("Created by Alex Leybourne", 50, "subTitle", 1000)
}



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