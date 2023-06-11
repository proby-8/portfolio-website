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

// wordle stuff
function input() {
    document.getElementById(1).focus();

    [...document.querySelectorAll(".element")].forEach(input => {
        input.addEventListener("input", function(e) {
            var id = this.id;

            if ((id%10)<5){
                if (this.value != ""){
                    id++;
                    document.getElementById(id).focus();
                }
            }
        })
    });

    [...document.querySelectorAll(".element")].forEach(input => {
        input.addEventListener("keydown", function(e) {
            var id = this.id;

            if (this.value == "" && ((id%10)>1) && (e.key == "Backspace" || e.key == "Delete")){
                id--;
                document.getElementById(id).focus();
            }
            else if (e.key == "ArrowLeft" && ((id%10)>1)) {
                document.getElementById(--id).focus();
            }
            else if (e.key == "ArrowRight" && ((id%10)<5)) {
                document.getElementById(++id).focus();
            }
            else if (this.value != "" && (e.keyCode >= 65 && e.keyCode <= 90)) {
                this.value="";
            }
        })
    });
};
input();