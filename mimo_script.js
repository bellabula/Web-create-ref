const el = document.querySelector("p");
const el_but = document.getElementsByTagName("button")

function toggleBold() {
    el.classList.toggle("bold");
    el_but[0].classList.toggle("pink");
}

function toggleItalic() {
    el.classList.toggle("italic");
    el_but[1].classList.toggle("pink");
}

function toggleUnderline() {
    el.classList.toggle("underline");
    el_but[2].classList.toggle("pink");
}

function toggleMonospace() {
    el.classList.toggle("mono");
    el_but[3].classList.toggle("pink");
}

function removeFormat() {
    el.classList.remove("bold", "italic", "underline", "mono");
    for(let i=0; i < el_but.length; i++){
        el_but[i].classList.remove("pink");
    }
}

const prompt = document.getElementById("prompt");
const el_pub = document.getElementById("pub");

function publish() {
    prompt.innerHTML = "Web Published"
}

el_pub.onclick = publish

const pad = document.querySelector(".clickpad");

function padcolorchange() {
    pad.classList.toggle("pink");
}

pad.addEventListener("click", padcolorchange);

const touchPad = document.querySelector(".touchpad");
function touchpadcolor() {
    touchPad.classList.toggle("pink")
}

pad.addEventListener("touchstart", touchpadcolor);