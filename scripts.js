function loaded() {
    typer("I KNOW YOUR NAME" , 150, "title", 500, "text")
    typer("Created by Alex Leybourne", 100, "subTitle", 4000, "text")
    typer(`<input id="startButton" class="btn pushforward" type="button" style="margin: 60px 0 0 0;" value="START" onclick="start();" />`, 1, "startButtonArea", 8000, "code")
}


var lastID = ""
var lastTXT = ""
var activeC = 1
var consoleText = document.getElementById("textArea")

function start(){
    console.log("Test")
    location.reload()
}



function typer(text, speed, id, timeout, inputType) {

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

        if(inputType === "text") {
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

        if(inputType === "code") {
            element.innerHTML = txt
            lastID = id
            activeC++
        }
    
    }

}