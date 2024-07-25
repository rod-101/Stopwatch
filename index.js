/* The sw object that is constructed by the Stopwatch constructor function has:
1 Property:
    duration
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
    this.duration = 0;
    
    this.start = function() {
        if(!started) {
            timer = setInterval(() => {
                this.duration++
                timeDisp.innerHTML = `${this.duration}`
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
        this.duration = 0;
        timeDisp.innerHTML = `${this.duration}`
    }

    //connect sw methods to html buttons
    start.addEventListener('click', () => {this.start()})
    stop.addEventListener('click', () => {this.stop()})
    reset.addEventListener('click', () => {this.reset()})
}

let sw = new Stopwatch();