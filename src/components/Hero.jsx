import React, { useState, useEffect } from "react";
import "../components/css/hero.css";

function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const skills = ["Web Developer", "C++"," Machine Learning" , "Data Science Enthusiast"];
  const introText = "Hi, I'm Atharva Dandgawhal";

  useEffect(() => {
    const handleType = () => {
      const currentSkill = skills[loopNum % skills.length];
      setText(
        isDeleting
          ? currentSkill.substring(0, text.length - 1)
          : currentSkill.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === currentSkill) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, skills, typingSpeed]);

  return (
    <section className="hero-background text-white flex items-center justify-center">
      <div className="conte text-center">
        <h1 className="text-5xl font-bold">{introText}</h1>
        <p className="text-xl mt-4">
          Bachelor of Engineering |{" "}
          <span className="text-blue-500">
            {text}
            <span className="cursor">|</span>
          </span>
        </p>
        <a
          href="https://shorturl.at/Cjwg8"
          className="mt-6 inline-block bg-blue-500 px-6 py-3 rounded-full text-white hover:bg-blue-600"
        >
          <bold>Get in Touch</bold>
        </a>
      </div>
    </section>
  );
}

export default Hero;
