import React, { useEffect, useRef, useState } from "react";

const FloatingOrbs: React.FC = () => {
  type Orb = {
    id: number;
    x: number;
    y: number;
    baseDx: number;
    baseDy: number;
    size: number;
    phase: number; // for oscillation phase
  };
  
  const [orbs, setOrbs] = useState<Orb[]>([
    { id: 0, x: 10, y: 200, baseDx: 0.4, baseDy: 0.01, size: 300, phase: 0 },
    { id: 1, x: 1300, y: 750, baseDx: -0.3, baseDy: 0.01, size: 400, phase: Math.PI },
  ]);

  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const amplitude = 1;
    const frequency = 0.02;

    const moveOrbs = () => {
      setOrbs((prevOrbs) =>
        prevOrbs.map((orb) => {
          const newPhase = orb.phase + frequency;

          const offsetX = amplitude * Math.sin(newPhase);
          const offsetY = amplitude * Math.cos(newPhase);

          let newX = orb.x + orb.baseDx + offsetX;
          let newY = orb.y + orb.baseDy + offsetY;

          const maxX = window.innerWidth;
          const maxY = window.innerHeight;

          let newBaseDx = orb.baseDx;
          let newBaseDy = orb.baseDy;

          // Bounce off edges horizontally (check center only)
          if (newX < 0) {
            newX = 0;
            newBaseDx = -newBaseDx;
          } else if (newX > maxX) {
            newX = maxX;
            newBaseDx = -newBaseDx;
          }

          // Bounce off edges vertically (check center only)
          if (newY < 0) {
            newY = 0;
            newBaseDy = -newBaseDy;
          } else if (newY > maxY) {
            newY = maxY;
            newBaseDy = -newBaseDy;
          }

          return {
            ...orb,
            x: newX,
            y: newY,
            baseDx: newBaseDx,
            baseDy: newBaseDy,
            phase: newPhase,
          };
        })
      );
      animationFrameId.current = requestAnimationFrame(moveOrbs);
    };
    animationFrameId.current = requestAnimationFrame(moveOrbs);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <section id="hero">
      {orbs.map(({ id, x, y, size }) => (
        <div
          key={id}
          className={`absolute rounded-full pointer-events-none ${id === 0 ? "orb-one" : "orb-two"}`}
          style={{
            width: size,
            height: size,
            transform: "translate(-50%, -50%)",
            opacity: 0.12,
            filter: "blur(50px)",
            backgroundSize: "350% 350%",
            left: x,
            top: y,
            zIndex: 0,
            position: "absolute",
          }}
        />
      ))}

      <style>{`
        .orb-one {
            background: linear-gradient(270deg, #16bdde, #7725c9, #e82389);
            animation: shiftColors 10s ease-in-out infinite;
        }
        .orb-two {
            background: linear-gradient(270deg, #e82389, #16bdde, #7725c9);
            animation: shiftColors 10s ease-in-out infinite;
        }
        @keyframes shiftColors {
            0% {
              background-position: 0% 50%; /* blue */
            }
            50% {
              background-position: 100% 50%; /* purple */
            }
            100% {
              background-position: 0% 50%; /* pink */
            }
        }
      `}</style>
    </section>
  );
};

export default FloatingOrbs;
