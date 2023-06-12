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
    fetch("lib/possible_wordle_answers.txt").then((res) => res.text()).then((text) => {
        var words = text.split(/\r\n|\n|\r/);

        var randInt = Math.floor(Math.random() * words.length);
        var realWord = words[randInt];
        console.log(realWord);

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
                var ogid = id;

                if (this.value == "" && ((id%10)>1) && (e.key == "Backspace" || e.key == "Delete")){
                    id--;
                    document.getElementById(id).focus();
                }
                else if (e.key == "Enter") {
                    // check if word is in file of all possible words
                    // return false if not, else continue
                    while ((id%5) != 0) {
                        id++;
                    }

                    var attempt = "";
                    id=id-4;
                    for (var i=0; i<5; i++) {
                        attempt += document.getElementById(id++).value;
                    }
                    console.log("Attempted answer = " + attempt);
                    alert("Attempted answer = " + attempt);

                    if (attempt.length > 4 && words.includes(attempt)) {
                        // real word
                        console.log("Accepted input");
                        for (var i=0; i<5; i++) {
                            var curId = (parseInt(ogid) + parseInt(i) - 4);

                            if (attempt[i] == realWord[i]) {
                                console.log("green");
                                document.getElementById(curId).classList.add("green");
                            }
                            else if (realWord.includes(attempt[i])) {
                                console.log("yellow");
                                document.getElementById(curId).classList.add("yellow");
                            }
                            else {
                                console.log("grey");
                                document.getElementById(curId).classList.add("grey");
                            }
                        }

                        // set row disabled, enable next row
                        var newId = parseInt(ogid) + 6;
                        var oldId = parseInt(ogid) - 4;
                        for (var i=0; i<5; i++) {
                            document.getElementById(oldId++).disabled = true;
                        }
                        if (newId > 51) {
                            console.log("Game Over");
                        }
                        if (attempt == realWord) {
                            console.log("Game over");
                        }
                        else{
                            for (var i=0; i<5; i++) {
                                document.getElementById(newId++).disabled = false;
                            }
                            newId=newId-5;
                            document.getElementById(newId).focus();
                        }

                    }
                    else {
                        // fake word
                        document.getElementById(ogid).focus();

                        // flash all box borders red
                        id--;
                        for (var i=0; i<5; i++) {
                            document.getElementById(id--).classList.toggle("wrong");
                        }

                        // triggeres after animation ends (1s)
                        id++;
                        setTimeout(function(){
                            for (var i=0; i<5; i++) {
                                document.getElementById(id++).classList.toggle("wrong");
                            }
                        },1000);
                    }
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

    })
};
input();