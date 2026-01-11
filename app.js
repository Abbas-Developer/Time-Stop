const hourspan = document.querySelector("#hour");
const minutespan = document.querySelector("#minute");
const secondspan = document.querySelector("#second");

h = 0;
m = 0;
s = 0;
var com;

function timestart() {
    com = setInterval(function () {

        if (s < 10) {
            secondspan.textContent = "0" + s++;

        }
        else {
            secondspan.textContent = s++;
        }

        if (s === 60) {
            s = 0;
            minutespan.textContent = m++;
            if (m < 10) {
                minutespan.textContent = "0" + m;
                console.log(m);

            }
            else {
                minutespan.textContent = m;
                console.log(m);
            }
        }
        if (m === 60) {
            m = 0;
            hourspan.textContent = h++;
            
            
            if (h < 10) {
                hourspan.textContent = "0" + h;
                console.log(h);
            }
            else {
                hourspan.textContent = h;
                console.log(h);
            }
        }


    }, 1)
}


function timestop(){
     clearInterval(com)
}

function timereset(){
    h= 0;
    s=0;
    m=0;
    secondspan.textContent = "00";
    hourspan.textContent = "00";
    minutespan.textContent = "00";
    timestop()
}