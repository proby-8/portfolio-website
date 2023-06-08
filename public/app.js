// variables for quotes
const quotes = ["I am a <span>Computer Scientist</span> 💻.",
                "I am a <span>Software Developer</span> 🎨.",
                "Work with <span>Artificial Intelligence</span> 🤖.",
                "Work with <span>Data Analytics</span> 🔍."];
var currentQuote = 1;


// function for main buttons
function buttonChanger() {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
};
buttonChanger();


// text changer on home page
function changeText() {
    document.getElementById("changingText").style.opacity = 0;
    
    setTimeout(function(){ 
        document.getElementById("changingText").innerHTML = quotes[currentQuote];
        currentQuote++;
        if (currentQuote >= quotes.length) {
            currentQuote = 0;
        }
        document.getElementById("changingText").style.opacity = 1;
    },500);
}

var intervalId = window.setInterval(function(){
    changeText();
}, 5000);


// light/dark mode
function dayNight() {
    const toggleSwitch = document.querySelector(".toggle");
    toggleSwitch.addEventListener("click", function(){
        document.body.classList.toggle("switch");
        this.classList.toggle("night");
        this.classList.toggle("day");
    })
}
dayNight();


// functions for mobile navigation bar
function navBar(){
    document.getElementById("nav-btn").addEventListener("click", function() {
        document.querySelector(".active").classList.toggle("navOpen");
        document.getElementById("realMenu").classList.toggle("nowActive");
    })
}
navBar();

function navBtns() {
    [...document.querySelectorAll(".option")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active").classList.toggle("navOpen");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
            document.getElementById("realMenu").classList.toggle("nowActive");
        })
    });
};
navBtns();