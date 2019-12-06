function loaded() {
    // typer("EPSTEIN DIDN'T KILL HIMSELF" , 150, "title", 500, "text")
    typer("I KNOW YOUR NAME" , 150, "title", 500, "text")
    typer("Created by Alex Leybourne", 100, "subTitle", 4000, "text")
    typer(`<input id="startButton" class="btn pushforward" type="button" style="margin: 60px 0 0 0;" value="START" onclick="start();" />`, 1, "startButtonArea", 8000, "code")
} 
// Starting Messages and Button Code 
//(text to push, what speeed to type, id of where to put the content, how long to wait and if its code or text)


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

    var typingSound = new Audio("./sfx/typing1.wav")

    setTimeout(type, timeout)
    function type() {

        // function to remove / move cursor
        if (activeC === 2){
            document.getElementById(lastID).innerHTML = `${lastTXT}&nbsp;`
            console.log(lastTXT)
            console.log(lastID)
            activeC = 1
        }

        // Runs if text. prints text letter by letter and adds cursor to end
        if(inputType === "text") {
            if (i < txt.length) {
                typingSound.currentTime = 0
                typingSound.play()
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

        // inputs the code quick with no cursor
        if(inputType === "code") {
            typingSound.currentTime = 0
            typingSound.play()
            element.innerHTML = txt
            lastID = id
            activeC++
        }
    
    }

}