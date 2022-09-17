let screenEl = document.getElementById("screen");
buttonEl = document.querySelectorAll("button");
let screenValue = ""
for (items of buttonEl){
    items.addEventListener("click", (e)=>{
        buttonText = e.target.innerText;
        console.log("button text is", buttonText)
         if (buttonText === "C"){
            screenValue += buttonText;
            screenEl.value = "";
        }
        else if (buttonText === "="){
            screenEl.value = eval(screenValue)
        }
        else if (buttonText === "*"){
            screenValue += "*";
            screenEl.value = screenValue;
        }
        else {
            screenValue += buttonText
            screenEl.value = screenValue;
        }
    })
}