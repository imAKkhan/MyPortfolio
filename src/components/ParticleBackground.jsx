import { useEffect, useRef } from "react"; // ✅ Correct import (no need for framer-motion)

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    const particleCount = 50;
    const colors = ["rgba(255,255,255,0.7)"];

    // ✅ Particle constructor
    function Particle() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.radius = Math.random() * 2 + 1;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.speedx = (Math.random() - 0.5) * 0.5;
      this.speedy = (Math.random() - 0.5) * 0.5;
    }

    // ✅ Draw method
    Particle.prototype.draw = function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.shadowBlur = 10;
      ctx.shadowColor = this.color;
      ctx.fillStyle = this.color;
      ctx.fill();
    };

    // ✅ Update method
    Particle.prototype.update = function () {
      this.x += this.speedx;
      this.y += this.speedy;

      if (this.x < 0) this.x = canvas.width;
      if (this.x > canvas.width) this.x = 0;

      if (this.y < 0) this.y = canvas.height;
      if (this.y > canvas.height) this.y = 0;

      this.draw();
    };

    // ✅ Create particles
    function createParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    // ✅ Handle resize
    function handleResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    }

    window.addEventListener("resize", handleResize);

    let animateId;

    // ✅ Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => p.update());
      animateId = requestAnimationFrame(animate);
    }

    // ✅ Initialize
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createParticles();
    animate();

    // ✅ Cleanup
    return () => {
      cancelAnimationFrame(animateId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    ></canvas>
  );
}
