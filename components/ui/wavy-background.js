"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}) => {
  const noise = createNoise3D();
  let w, h, nt, i, x, ctx, canvas;
  const canvasRef = useRef(null);

  const getSpeed = () => (speed === "fast" ? 0.002 : 0.001);

  const init = () => {
    canvas = canvasRef.current;
    ctx = canvas.getContext("2d");

    const hero = document.getElementById("hero"); // Get hero section
    if (!hero) return;

    w = ctx.canvas.width = hero.clientWidth;
    h = ctx.canvas.height = hero.clientHeight;
    ctx.filter = `blur(${blur}px)`;
    nt = 0;

    window.addEventListener("resize", () => {
      w = ctx.canvas.width = hero.clientWidth;
      h = ctx.canvas.height = hero.clientHeight;
      ctx.filter = `blur(${blur}px)`;
    });

    render();
  };

  const waveColors = colors ?? [
    "#6ECBF5",
    "#C252E1",
    "#586AE2",
    "#2A2356",
    "",
  ];

  const drawWave = (n) => {
    nt += getSpeed();
    for (i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (x = 0; x < w; x += 5) {
        var y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + h * 0.5);
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  let animationId;
  const render = () => {
    ctx.clearRect(0, 0, w, h); // Clears only the canvas, not the page background
    ctx.globalAlpha = waveOpacity;
    drawWave(5);
    animationId = requestAnimationFrame(render);
  };

  useEffect(() => {
    init();
    return () => cancelAnimationFrame(animationId);
  }, []);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div id="hero" className={cn("relative w-full h-screen", containerClassName)}>
      <canvas
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
        ref={canvasRef}
        id="canvas"
        style={isSafari ? { filter: `blur(${blur}px)` } : {}}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
