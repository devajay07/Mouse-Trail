let canvas = document.querySelector("canvas");
canvas.width = this.innerWidth;
canvas.height = innerHeight;
let c = canvas.getContext("2d");

let mouse = {
    x:undefined,
    y:undefined
}

addEventListener('mousemove',(event)=>{
    mouse.x = event.x;
    mouse.y = event.y;
})

function Particle(x,y,radius,color){
    this.x = x;
    this.y =y;
    this.radius = radius;
    this.color = color;
    this.radians = 0;
    this.velocity = 0.1;

    this.draw = function(){
        c.beginPath();
        c.lineWidth = 3;
        c.strokeStyle = "cyan";
       c.moveTo(lastPoint.x,lastPoint.y);
       c.lineTo(this.x,this.y);
       c.stroke();
        c.closePath();
    }
    this.update = function(){
         lastPoint = {
            x:this.x,
            y:this.y
        }
        this.radians += this.velocity;
       this.x = mouse.x + Math.sin(this.radians)*50;
       this.y = mouse.y + Math.cos(this.radians)*50;
    //    this.y += 1;
    this.draw(lastPoint);
    }
}
let particles = [];
function init(){
    for(let i=0;i<1;i++){
        particles.push(new Particle(window.innerWidth/2,window.innerHeight/2,5,"cyan"));

    }
}
init();

function animate(){
    requestAnimationFrame(animate);
c.fillStyle = "rgba(255,255,255,0.3)";
   c.fillRect(0,0,canvas.width,canvas.height);

    for(let i=0;i<particles.length;i++){
        particles[i].update();
        
    }
}
animate();