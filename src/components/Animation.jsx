import React from 'react';

const GlowCircle = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black rounded-full mb-[2%]">
      <style>
        {`
          /* Keyframes for the glowing animation */
          @keyframes glow {
            0% {
              box-shadow: 0 0 10px var(--glow-color), 0 0 20px var(--glow-color);
            }
            50% {
              box-shadow: 0 0 20px var(--glow-color), 0 0 40px var(--glow-spread-color);
            }
            100% {
              box-shadow: 0 0 10px var(--glow-color), 0 0 20px var(--glow-color);
            }
          }

          /* Keyframes for the dot floating animation */
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-30px); }
          }
          
          /* Keyframes for the background light pulse */
          @keyframes backgroundPulse {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }

          /* CSS variables for colors */
          :root {
            --glow-color: rgb(100, 61, 136);
            --glow-spread-color: rgba(70, 40, 95, 0.781);
            --enhanced-glow-color: rgb(150, 90, 200);
            --btn-color: rgb(100, 61, 136);
          }

          .glow-container {
            position: relative;
            width: 400px;
            height: 400px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(30, 0, 50, 1) 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            animation: glow 3s ease-in-out infinite;
            }
            // border: 3px solid var(--glow-color);

          .glow-container::before {
            content: '';
            position: absolute;
            inset: -5px;
            background: linear-gradient(
              45deg,
              var(--glow-color),
              var(--glow-spread-color),
              var(--glow-color)
            );
            z-index: -1;
            filter: blur(25px);
            opacity: 0.7;
            animation: backgroundPulse 5s ease-in-out infinite;
            background-size: 200% 200%;
          }

          .glow-text {
            color: var(--enhanced-glow-color);
            font-size: 2.5rem;
            font-weight: bold;
            text-shadow: 0 0 5px var(--glow-color);
            z-index: 10;
            text-align: center;
            font-family: 'Dancing Script', cursive; /* Updated font-family for a cursive style */
          }

          .dot {
            position: absolute;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background: var(--enhanced-glow-color);
            box-shadow: 0 0 10px var(--enhanced-glow-color);
            animation: float 2s ease-in-out infinite;
          }

          .dot.dot-1 {
            top: 25%;
            left: 15%;
            animation-delay: 0s;
          }

          .dot.dot-2 {
            bottom: 25%;
            right: 15%;
            animation-delay: 1s;
          }
        `}
      </style>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap" rel="stylesheet" />
      <div className="glow-container">
        <span className="glow-text">NOVENTIA CONSULTING</span>
      </div>
    </div>
  );
};

export default GlowCircle;
