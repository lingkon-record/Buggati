"use client";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <>
      <div className="hero">
        <div className="flex-1 pt-36 padding-x ">
          <h1 className="hero__title text-green-500">
            What's the color of your Bugatti ?
          </h1>
          <p className="hero__subtitle">
            Hey, I'm Lingkon. Welcome to Bugatti & BMW Shop. Waiting for your
            expensive booking proccess.
          </p>
          <CustomButton
            title="Your Next Bugatti ?"
            containerStyles="bg-yellow-500 text-black font-bold rounded-full mt-10 hover:bg-red-400"
            handleClick={handleScroll}
          />
        </div>
        <div className="hero__image-container">
          <div className="hero__image">
            <Image src="/aac.jpg" alt="hero" fill className="object-contain" />
          </div>
          {/* <div className="hero__image-overlay"></div> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
