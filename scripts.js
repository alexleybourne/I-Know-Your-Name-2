function loaded() {
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


// Sounds
var typingSound = new Audio("./sfx/typing1.wav")
var beepSound = new Audio("./sfx/beep.wav")

function start() {
    consoleClear()
    browserCheck()
}

// Clears Text
function consoleClear() {
    consoleText.innerHTML = `<p id="textMain" ></p>`
}

function typer(text, speed, id, timeout, inputType) {

    var i = 0;
    var txt = text
    var newtxt = ""
    var element = document.getElementById(id)

    

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
            beepSound.play()
            element.innerHTML = txt
            lastID = id
            activeC++
        }
    
    }
    activeC = 1
}


// Test which Browser is being used

function browserCheck() { 

    var userBrowser = ""

    if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) 
   {
        userBrowser = 'Opera'
   }
   else if(navigator.userAgent.indexOf("Chrome") != -1 )
   {
        userBrowser = 'Chrome'
   }
   else if(navigator.userAgent.indexOf("Safari") != -1)
   {
        userBrowser = 'Safari'
   }
   else if(navigator.userAgent.indexOf("Firefox") != -1 ) 
   {
        userBrowser = 'Firefox'
   }
   else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
   {
        userBrowser ='IE'
   }  
   else 
   {
        userBrowser = 'unknown'
   }

   if (userBrowser != 'Chrome') {
    typer("For the best experience please use Google Chrome" , 150, "textMain", 500, "text")
   } else {
    typer("Chrome is the best hey?" , 150, "textMain", 500, "text")
   }

   }