function loaded() {
    typer("I KNOW YOUR NAME" , 150, "title", 500)
    typer("Created by Alex Leybourne", 100, "subTitle", 4000)
}



function typer(text, speed, id, timeout) {

    

    var i = 0;
    var txt = text
    var newtxt = ""
    var lastID = ""
    var lastTXT = ""

    var element = document.getElementById(id)
    
    if(lastID != ""){
            document.getElementById(lastID).innerHTML = lastTXT
    }

    setTimeout(type, timeout)
    function type() {
    if (i < txt.length) {
        element.innerHTML = newtxt
        element.innerHTML += txt.charAt(i)
        newtxt = element.innerHTML
        element.innerHTML += `<p class="cursor">█</p>`
        i++
        setTimeout(type, speed)
    } else {
        element.innerHTML = newtxt
        element.innerHTML += `<p class="cursor"> █</p>`
        lastID = id
        lastTXT = "POOP"
    }
    }

}