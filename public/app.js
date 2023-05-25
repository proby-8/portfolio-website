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

// break if its only one line so they all format the same
const quotes = ["I am a <span>Computer Scientist</span> 💻.",
                "I am a <span>Software Developer</span> 🎨.",
                "Work with <span>Artificial Intelligence</span> 🤖.",
                "Work with <span>Data Analytics</span> 🔍."];
const numQuotes = quotes.length;
var currentQuote = 1;

function changeInitialText() {

    // document.getElementById("changingText").classList.toggle("false");
}

function changeInitialText2() {
    document.getElementById("changingText").style.opacity = 0;
    
    setTimeout(function(){ 
        document.getElementById("changingText").innerHTML = quotes[currentQuote];
        currentQuote++;
        if (currentQuote >= numQuotes) {
            currentQuote = 0;
        }
        document.getElementById("changingText").style.opacity = 1;
    },500);

}

function dayNight() {
    const toggleSwitch = document.querySelector(".toggle");
    toggleSwitch.addEventListener("click", function(){
        document.body.classList.toggle("switch");
        this.classList.toggle("night");
        this.classList.toggle("day");
    })
}

dayNight();
buttonChanger();

var intervalId = window.setInterval(function(){
    changeInitialText();
    console.log("class change");
}, 5000);

var intervalId = window.setInterval(function(){
    changeInitialText2();
    console.log("content change");
}, 5000);

function navBar(){
    document.getElementById("nav-btn").addEventListener("click", function() {
        document.getElementById("realMenu").classList.toggle("nowActive");
    })
}
function navBtns() {
    [...document.querySelectorAll(".option")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
            document.getElementById("realMenu").classList.toggle("nowActive");
        })
    });
};

navBtns();
navBar();