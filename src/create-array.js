let arr = [];
let heights = [];
const n = 10;
let speed = 300;
let gr = "rgb(134, 134, 134)";


function createBars() {
    let bars = document.getElementById('bars');
    bars.innerHTML="";
    heights = [];

    for(let i=0; i<n; ++i) {
        let num = Math.ceil((Math.random())*100);
        num*=4; 
        heights.push(num);
        num+="px";
        
        let bar = document.createElement('div');
        bar.className='bar';
        bar.style.height=num;
        
        bars.appendChild(bar);
    }

    arr = bars.childNodes;
}