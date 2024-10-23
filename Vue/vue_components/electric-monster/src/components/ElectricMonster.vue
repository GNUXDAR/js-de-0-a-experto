<template>
    <canvas ref="canvas"></canvas>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  
  const canvas = ref(null);
  const w = ref(window.innerWidth);
  const h = ref(window.innerHeight);
  const mouse = ref({ x: false, y: false });
  const last_mouse = ref({});
  const tentacles = ref([]);
  const target = ref({ x: 0, y: 0 });
  const last_target = ref({});
//   const t = ref(0);
  const numTentacles = 500;
  
  class Segment {
    constructor(parent, l, a, first) {
      this.first = first;
      this.l = l;
      if (first) {
        this.pos = { x: parent.x, y: parent.y };
      } else {
        this.pos = { x: parent.nextPos.x, y: parent.nextPos.y };
      }
      this.ang = a;
      this.updateNextPos();
    }
  
    updateNextPos() {
      this.nextPos = {
        x: this.pos.x + this.l * Math.cos(this.ang),
        y: this.pos.y + this.l * Math.sin(this.ang),
      };
    }
  
    update(t) {
      this.ang = Math.atan2(t.y - this.pos.y, t.x - this.pos.x);
      this.pos.x = t.x + this.l * Math.cos(this.ang - Math.PI);
      this.pos.y = t.y + this.l * Math.sin(this.ang - Math.PI);
      this.updateNextPos();
    }
  
    fallback(t) {
      this.pos.x = t.x;
      this.pos.y = t.y;
      this.updateNextPos();
    }
  
    show(c) {
      c.lineTo(this.nextPos.x, this.nextPos.y);
    }
  }
  
  class Tentacle {
    constructor(x, y, l, n) {
      this.x = x;
      this.y = y;
      this.l = l;
      this.n = n;
      this.rand = Math.random();
      this.segments = [new Segment(this, this.l / this.n, 0, true)];
      
      for (let i = 1; i < n; i++) {
        this.segments.push(new Segment(this.segments[i - 1], this.l / this.n, 0, false));
      }
    }
  
    move(last_target, target) {
      const angle = Math.atan2(target.y - this.y, target.x - this.x);
      const dt = dist(last_target.x, last_target.y, target.x, target.y) + 5;
      
      const tPos = {
        x: target.x - 0.8 * dt * Math.cos(angle),
        y: target.y - 0.8 * dt * Math.sin(angle),
      };
  
      if (tPos.x) {
        this.segments[this.n - 1].update(tPos);
      } else {
        this.segments[this.n - 1].update(target);
      }
  
      for (let i = this.n - 2; i >= 0; i--) {
        this.segments[i].update(this.segments[i + 1].pos);
      }
  
      if (dist(this.x, this.y, target.x, target.y) <= 
          (this.l + dist(last_target.x, last_target.y, target.x, target.y))) {
        this.segments[0].fallback({ x: this.x, y: this.y });
        for (let i = 1; i < this.n; i++) {
          this.segments[i].fallback(this.segments[i - 1].nextPos);
        }
      }
    }
  
    show(c) {
      c.globalCompositeOperation = "lighter";
      c.beginPath();
      
      c.lineTo(this.x, this.y);
      
      for (let segment of this.segments) {
        segment.show(c);
      }
  
      c.strokeStyle = `hsl(${this.rand * 60 + 180},100%,${this.rand * 60 + 25}%)`;
      c.lineWidth = this.rand * 2;
      c.lineCap = "round";
      
      c.stroke();
      
      c.globalCompositeOperation = "source-over";
      
      // Draw the end point
      c.beginPath();
      
      if (dist(this.x, this.y, target.value.x, target.value.y) <= (this.l)) {
        c.arc(this.x, this.y, (2 * this.rand + 1), 0, Math.PI * 2);
        c.fillStyle = "white";
        
        c.fill();
        
        return true;
        
       } else {
         c.arc(this.x, this.y, (this.rand * 2), 0 , Math.PI *2 );
         c.fillStyle= "darkcyan";
         c.fill();
       }
     }
  }
  
  function dist(p1x, p1y, p2x, p2y) {
     return Math.sqrt(Math.pow(p2x - p1x, 2) + Math.pow(p2y - p1y, 2));
  }
  
  function initCanvas() {
     const ctx = canvas.value.getContext("2d");
     ctx.fillStyle = "rgba(30,30,30,1)";
     ctx.fillRect(0, 0, w.value, h.value);
  }
  
  function createTentacles() {
     const maxl = 300;
     const minl = 50;
     const nSegments = 30;
  
     for (let i = 0; i < numTentacles; i++) {
       const length = Math.random() * (maxl - minl) + minl;
       const xPosition = Math.random() * w.value;
       const yPosition = Math.random() * h.value;
  
       tentacles.value.push(new Tentacle(xPosition, yPosition,length,nSegments));
     }
  }
  
  function handleResize() {
     w.value = window.innerWidth;
     h.value = window.innerHeight;
     canvas.value.width = w.value;
     canvas.value.height= h.value;
  }
  
  function handleMouseMove(e) {
     const rect= canvas.value.getBoundingClientRect();
     last_mouse.value.x= mouse.value.x;
     last_mouse.value.y= mouse.value.y;
  
     mouse.value.x= e.clientX- rect.left;
     mouse.value.y= e.clientY- rect.top;
  }
  
  function handleMouseLeave() {
     mouse.value= { x: false,y:false };
  }
  
  function startAnimation() {
     const loop= () => {
       requestAnimationFrame(loop);
  
       const ctx= canvas.value.getContext("2d");
       ctx.clearRect(0 ,0 ,w.value ,h.value);
  
       if (mouse.value.x) {
         target.value.errx= mouse.value.x- target.value.x;
         target.value.erry= mouse.value.y- target.value.y;
  
       } else {
  
         // Animation logic when mouse is not present
         // Update the target position
       }
  
       for (let tentacle of tentacles.value) {
         tentacle.move(last_target.value,{...target.value});
         tentacle.show(ctx);
       }
  
       Object.assign(last_target.value,{...target.value});
     };
  
     loop();
  }
  
  onMounted(() => {
     initCanvas();
     createTentacles();
     startAnimation();
  
     window.addEventListener("resize", handleResize);
     canvas.value.addEventListener("mousemove", handleMouseMove);
     canvas.value.addEventListener("mouseleave", handleMouseLeave);
  });
  
  onBeforeUnmount(() => {
     window.removeEventListener("resize", handleResize);
  });
  
  </script>
  
  <style scoped>
  body,
  html {
     margin: 0px;
     padding:0px;
     position: fixed;
     background: rgb(28 ,24 ,24);
  }
  canvas{
     display:block;
  }
  </style>