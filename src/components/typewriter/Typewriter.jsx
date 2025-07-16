import { Typewriter } from "react-simple-typewriter";

const TypingEffect = () => (
  <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 text-center">
    <h1 className="text-black text-3xl sm:text-5xl font-mono font-semibold">
      <Typewriter
        words={['Gapsera', 'Tech Consulting', 'One Step Solution']}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1500}
      />
    </h1>
  </div>
);

export default TypingEffect;
