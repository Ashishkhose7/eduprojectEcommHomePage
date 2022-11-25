
function darkMode() {
    document.body.classList.toggle("body-dark-mode");
    let dark = document.getElementById("dark-mode-icon");
    let darkText=document.getElementsByClassName("darkMode");
    let darkNav = document.getElementsByClassName("navbar");
    let darkSection = document.getElementsByClassName("section-div");
    let darkHeading=document.getElementsByTagName("h4");

    if (dark.style.color === "white") {
        dark.style.color = "yellow";
        darkText[0].innerHTML="Normal Mode";
        darkNav[0].style.backgroundColor = "darkblue";
        darkSection[0].style.backgroundColor = "midnightblue";
        for (const dhead of darkHeading) {
            dhead.style.color="black"
        }
    }
    else {
        dark.style.color = "white";
        darkText[0].innerHTML="Dark Mode";
        darkNav[0].style.backgroundColor = "black";
        darkSection[0].style.backgroundColor = "dimgray";
        for (const dhead of darkHeading) {
            dhead.style.color="white"
        }
    }
}
