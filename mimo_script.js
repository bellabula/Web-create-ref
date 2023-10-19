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
    touchPad.classList.add("pink")
}

touchPad.addEventListener("touchstart", touchpadcolor);

const terms = document.querySelector(".scrolltext");

function checkReading () {
  const read = terms.scrollHeight - Math.round(terms.scrollTop) === terms.clientHeight;
  if(read){
   document.getElementsByTagName("p")[2].innerHTML = "Thank You";
  }
}

terms.addEventListener("scroll", checkReading);

const heart = document.querySelector("svg");

function clickheart() {
    heart_title = document.querySelector(".best")
    heart_path = document.querySelector("path")
    if (heart_title.innerHTML === "讚") {
        heart_title.innerHTML = "收回讚"
        heart.setAttribute("aria-label", "收回讚")
        heart.setAttribute("color", "rgb(255, 48, 64)")
        heart.setAttribute("fill", "rgb(255, 48, 64)")
        heart.setAttribute("viewBox", "0 0 48 48")
        heart_path.setAttribute('d', "M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z")
    }else {
        heart_title.innerHTML = "讚";
        heart.setAttribute("aria-label", "讚")
        heart.setAttribute("color", "rgb(38, 38, 38)")
        heart.setAttribute("fill", "rgb(38, 38, 38)")
        heart.setAttribute("viewBox", "0 0 24 24")
        heart_path.setAttribute('d', "M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z")
    }
}

function mouseinheart() {
    heart_title = document.querySelector(".best")
    if (heart_title.innerHTML === "讚") {
        heart.setAttribute("color", "rgb(176, 176, 176)")
        heart.setAttribute("fill", "rgb(176, 176, 176)")
    }
}

function mouseoutheart() {
    heart_title = document.querySelector(".best")
    if (heart_title.innerHTML === "讚") {
        heart.setAttribute("color", "rgb(38, 38, 38)")
        heart.setAttribute("fill", "rgb(38, 38, 38)")
    }
}

function clickscaleup() {
    heart.classList.add("svgscale")
}

function clickscaledown() {
    heart.classList.remove("svgscale")
}

heart.addEventListener("click", clickheart)
heart.addEventListener("mouseover", mouseinheart)
heart.addEventListener("mouseleave", mouseoutheart)
heart.addEventListener("mousedown", clickscaleup)
heart.addEventListener("mouseup", clickscaledown)