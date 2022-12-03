// Coupen Code
setTimeout(loadCoupen,5000)
function loadCoupen(){
    document.getElementById('coupen-code').style.visibility='visible';
    document.getElementById('main').style.opacity='0.5';
}
function closeCoupen(){
    document.getElementById('coupen-code').style.visibility='hidden';
    document.getElementById('main').style.opacity='1';
}


//Added to cart 
let addBtn = document.getElementsByClassName("add-btn")
let showMsg = document.getElementsByClassName("add-cart")

for (const key in addBtn) {
    addBtn[key].onclick = ()=>{
        showMsg[key].style.visibility='visible'
        setTimeout(()=>{
            showMsg[key].style.visibility='hidden'
        },2000)
    }
}

// Location with Weather
let weathertag = document.getElementById("weather-details");

function getweather(){
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition)
}
else{
    console.error("Geolocation is not supported by this browser")
}
}

function showPosition(data){
    // console.log(data)
    let lat = data.coords.latitude;
    let long = data.coords.longitude;
    // console.log(lat, long)
    let url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
    
    fetch(url,{method:'GET'})
       .then(response => response.json())
       .then((data) => {
           let cityName = data.city.name;
           let cityTemp = data.list[0].temp.day;
           weathertag.innerHTML=`${cityName}  ${cityTemp}°C`
       })
}

// Dark and light mode
function darkMode() {
    document.body.classList.toggle("body-dark-mode");
    let dark = document.getElementById("dark-mode-icon");
    let darkText=document.getElementsByClassName("darkMode");
    let darkNav = document.getElementsByClassName("navbar");
    let darkSection = document.getElementsByClassName("section-div");
    let darkHeading=document.getElementsByTagName("h4");

    if (dark.style.color === "white") {
        dark.style.color = "yellow";
        darkText[0].innerHTML="Dark Mode";
        darkNav[0].style.backgroundColor = "darkblue";
        darkSection[0].style.backgroundColor = "midnightblue";
        for (const dhead of darkHeading) {
            dhead.style.color="black"
        }
    }
    else {
        dark.style.color = "white";
        darkText[0].innerHTML="Normal Mode";
        darkNav[0].style.backgroundColor = "black";
        darkSection[0].style.backgroundColor = "dimgray";
        for (const dhead of darkHeading) {
            dhead.style.color="white"
        }
    }
}

