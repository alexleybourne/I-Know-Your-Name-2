function loaded() {
    typer("I KNOW YOUR NAME" , 50, "title")
    typer("Created by Alex Leybourne", 50, "subTitle")
}


// function type(text, speed) {

//     var i = 0
//     text = "I KNOW YOUR NAME"

//     if (i < text.length) {
//         document.getElementById("title").innerHTML += text.charAt(i)
//         i++;
//         setTimeout(type, speed)
//     }
// }


function typer(text, speed, id) {

    var i = 0;
    var txt = text
    var speed = speed
    type()

    function type() {
    if (i < txt.length) {
        document.getElementById(id).innerHTML += txt.charAt(i);
        i++;
        setTimeout(type, speed);
    } 
    }

}