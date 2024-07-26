/* The sw object constructed by the Stopwatch constructor-function has:
2 Properties:
    sec
    min
3 Methods:
    reset
    start
    stop    
*/ 

function Stopwatch() {
    //private variables
    let timer;
    let timeDisp = document.querySelector('#time');
    let start = document.querySelector('#start');    
    let stop = document.querySelector('#stop');
    let reset = document.querySelector('#reset');    
    let started = false;
  

    // object properties and methods
    this.sec = 0;
    this.min = 9;
    
    this.start = function() {
        if(!started) {
            timer = setInterval(() => {
                this.sec++
                
                if(this.sec % 60 == 0) {
                    this.min++
                    this.sec = 0
                }

                //display time in 00:00 format
                if(this.min < 10 && this.sec < 10) {
                    timeDisp.innerHTML = `0${this.min}:0${this.sec}`    
                } else if(this.min < 10 && this.sec >= 10) {
                    timeDisp.innerHTML = `0${this.min}:${this.sec}`    
                } else if(this.min >= 10 && this.sec < 10) {
                    timeDisp.innerHTML = `${this.min}:0${this.sec}`    
                } else if(this.min >= 10 && this.sec >= 10) {
                    timeDisp.innerHTML = `${this.min}:${this.sec}`
                }
            }, 1000);    
        } else {
            throw new Error('Already started.')
        }
        started = true;
    }

    this.stop = function() {
        if(started) {
            clearInterval(timer) 
            started = false
        } else {
            throw new Error('Already stopped.')
        }
    }

    this.reset = function() {
        started = false
        clearInterval(timer)
        this.sec = 0;
        this.min = 0;
        timeDisp.innerHTML = '00:00'
    }

    //connect sw methods to html buttons
    start.addEventListener('click', () => {this.start()})
    stop.addEventListener('click', () => {this.stop()})
    reset.addEventListener('click', () => {this.reset()})
}

let sw = new Stopwatch();