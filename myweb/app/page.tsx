"use client";
import Head from "next/head";
import { useEffect, useState } from "react";

const Page = () => {
  const words = [
    // "Software Engineer",
    "Information Security Undergraduate",
    // "Digital Forensics",
    // "Hacker",
    "Certified Clown"
  ];

  const [text, setText] = useState(words[0]); // Set initial state
  const len = words.length;
  const speed = 20;
  const flickDelay = 5000; // 2 seconds between flicks

  const wordflick = () => {
    let i = 0;
    const animationDelay = 70;
    let offset = 0;
    let forwards = true;
    let skipCount = 0;

    const animate = () => {
      if (forwards) {
        if (offset >= words[i].length) {
          skipCount++;
          if (skipCount === len) {
            forwards = false;
            skipCount = 0;
          }
        }
      } else {
        if (offset === 0) {
          forwards = true;
          i = (i + 1) % len;
        }
      }

      if (skipCount === 0) {
        if (forwards) {
          offset++;
        } else {
          offset--;
        }
      }

      setText(words[i].substring(0, offset));
      setTimeout(animate, animationDelay);
    };

    animate();
  };

  useEffect(() => {
    // Start the "text flick" animation
    wordflick();
  }, []);

  const wordFlickStyle = {
    marginTop: "50px", // Adjust this value to change the distance from the top
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <Head>
        <title>Gaanesh's Resume</title>
        <meta name="description" content="Welcome to my resume website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="text-white p-4 text-center">
        <div className="animation-container">
          <p className="name text-[5rem]" >Gaanesh Theivasigamani </p>
          <div className="word-container">
            <p className="word text-[3rem]" style={{ ...wordFlickStyle}}>
              {text}
            </p>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Page;
