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