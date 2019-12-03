function loaded() {
}


var lastID = ""
var lastTXT = ""
var activeC = 1
var consoleText = document.getElementById("textArea")

function start(){
    consoleText.innerHTML = `<p id="title" ></p>
    <p class="small" id="subTitle"></p>

    <p class="small" id="playText" style="padding: 50px 0 0 0;"></p>`

    typer("I KNOW YOUR NAME" , 150, "title", 500)
    typer("Created by Alex Leybourne", 100, "subTitle", 4000)
    typer("Press any Key to begin...", 100, "playText", 8000)
}



function typer(text, speed, id, timeout) {

    var i = 0;
    var txt = text
    var newtxt = ""
    var element = document.getElementById(id)

    

    


    setTimeout(type, timeout)
    function type() {

        if (activeC === 2){
            document.getElementById(lastID).innerHTML = lastTXT
            console.log(lastTXT)
            console.log(lastID)
            activeC = 1
        }

        if (i < txt.length) {
            element.innerHTML = newtxt
            element.innerHTML += txt.charAt(i)
            newtxt = element.innerHTML
            element.innerHTML += `<p class="cursor">█</p>`
            i++
            setTimeout(type, speed)
        } else {
            element.innerHTML = newtxt
            element.innerHTML += `<p class="cursor">█</p>`
            lastID = id
            lastTXT = newtxt
            activeC++
        }
    
    }

}