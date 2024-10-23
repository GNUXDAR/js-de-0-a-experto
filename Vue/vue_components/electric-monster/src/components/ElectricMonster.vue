<template>
    <div class="container">
      <canvas ref="canvas"></canvas>
    </div>
  </template>
  
  <script>
  export default {
    name: "ElectricMonster",
    data() {
      return {
        canvas: null,
        context: null,
        mouse: { x: false, y: false },
        last_mouse: {},
        tentacles: [],
        target: { x: 0, y: 0 },
        last_target: {},
        numt: 500,
        maxl: 300,
        minl: 50,
        n: 30,
        t: 0,
        q: 10,
        clicked: false,
        requestAnimFrame:
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function (callback) {
            window.setTimeout(callback);
          },
      };
    },
    mounted() {
      this.canvas = this.$refs.canvas;
      this.context = this.canvas.getContext("2d");
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
  
      this.initTentacles();
      this.addEventListeners();
      this.loop();
    },
    methods: {
      dist(p1x, p1y, p2x, p2y) {
        return Math.sqrt(Math.pow(p2x - p1x, 2) + Math.pow(p2y - p1y, 2));
      },
      initTentacles() {
        for (let i = 0; i < this.numt; i++) {
          this.tentacles.push(
            new this.Tentacle(
              Math.random() * this.canvas.width,
              Math.random() * this.canvas.height,
              Math.random() * (this.maxl - this.minl) + this.minl,
              this.n,
              Math.random() * 2 * Math.PI,
              this.context
            )
          );
        }
      },
      Tentacle(x, y, l, n, a, c) {
        return {
          x,
          y,
          l,
          n,
          rand: Math.random(),
          segments: [new this.Segment({ x, y }, l / n, 0, true)],
          c,
          angle: 0,
          move(last_target, target) {
            this.angle = Math.atan2(target.y - this.y, target.x - this.x);
            const dt = this.dist(last_target.x, last_target.y, target.x, target.y) + 5;
            const t = {
              x: target.x - 0.8 * dt * Math.cos(this.angle),
              y: target.y - 0.8 * dt * Math.sin(this.angle),
            };
  
            this.segments[this.n - 1].update(t);
  
            for (let i = this.n - 2; i >= 0; i--) {
              this.segments[i].update(this.segments[i + 1].pos);
            }
          },
          // eslint-disable-next-line no-unused-vars
          show(target) {
            this.c.globalCompositeOperation = "lighter";
            this.c.beginPath();
            this.c.lineTo(this.x, this.y);
  
            this.segments.forEach((seg) => seg.show());
  
            this.c.strokeStyle = `hsl(${this.rand * 60 + 180}, 100%, ${this.rand * 60 + 25}%)`;
            this.c.lineWidth = this.rand * 2;
            this.c.lineCap = "round";
            this.c.lineJoin = "round";
            this.c.stroke();
            this.c.globalCompositeOperation = "source-over";
          },
        };
      },
      Segment(parent, l, a, first) {
        const { x, y } = first ? parent : parent.nextPos;
        return {
          pos: { x, y },
          l,
          ang: a,
          nextPos: {
            x: x + l * Math.cos(a),
            y: y + l * Math.sin(a),
          },
          update(target) {
            this.ang = Math.atan2(target.y - this.pos.y, target.x - this.pos.x);
            this.pos.x = target.x + this.l * Math.cos(this.ang - Math.PI);
            this.pos.y = target.y + this.l * Math.sin(this.ang - Math.PI);
            this.nextPos.x = this.pos.x + this.l * Math.cos(this.ang);
            this.nextPos.y = this.pos.y + this.l * Math.sin(this.ang);
          },
          show() {
            this.c.lineTo(this.nextPos.x, this.nextPos.y);
          },
        };
      },
      addEventListeners() {
        this.canvas.addEventListener("mousemove", (e) => {
          this.last_mouse.x = this.mouse.x;
          this.last_mouse.y = this.mouse.y;
          this.mouse.x = e.pageX;
          this.mouse.y = e.pageY;
        });
  
        this.canvas.addEventListener("mouseleave", () => {
          this.mouse.x = false;
          this.mouse.y = false;
        });
  
        this.canvas.addEventListener("mousedown", () => {
          this.clicked = true;
        });
  
        this.canvas.addEventListener("mouseup", () => {
          this.clicked = false;
        });
  
        window.addEventListener("resize", () => {
          this.canvas.width = window.innerWidth;
          this.canvas.height = window.innerHeight;
          this.loop();
        });
      },
      draw() {
        if (this.mouse.x) {
          this.target.x += (this.mouse.x - this.target.x) / 10;
          this.target.y += (this.mouse.y - this.target.y) / 10;
        }
  
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  
        this.tentacles.forEach((tentacle) => {
          tentacle.move(this.last_target, this.target);
          tentacle.show(this.target);
        });
  
        this.last_target.x = this.target.x;
        this.last_target.y = this.target.y;
      },
      loop() {
        this.requestAnimFrame(this.loop);
        this.draw();
      },
    },
  };
  </script>
  
  <style scoped>
  body,
  html {
    margin: 0;
    padding: 0;
    background: rgb(28, 24, 24);
    overflow: hidden;
  }
  .container {
    margin: 1px;
    padding: 5.5px;
    background-color: #fff;
  }
  </style>
  