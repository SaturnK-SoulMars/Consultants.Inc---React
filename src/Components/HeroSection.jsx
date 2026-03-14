import heroBg from "../assets/hero-bg.jpg";
import CursorBlob from "./CursorBlob";

const HeroSection = () => {
  return (
    <section className="hero bg-background text-[#FFFFFF] relative w-full h-screen overflow-hidden">
      {/* <CursorBlob/> */}
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Abstract blue architectural curves"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/30" />
      </div>

      {/* Grid lines overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[50%] top-0 bottom-0 w-px bg-foreground/10" />
        <div className="absolute left-[75%] top-0 bottom-0 w-px bg-foreground/10" />
      </div>

      {/* Subtitle */}
      <div className="absolute right-12 top-[45%] max-w-60">
        <p className="hero-subtitle">
          Answering all of your building codes needs.
        </p>
      </div>

      {/* Main title */}
      <div className="absolute bottom-12 left-8 right-8">
        <h1 className="hero-title text-[clamp(3rem,10vw,10rem)] leading-12 sm:leading-24 md:leading-30">
          Outsource<br />
          Consultants, Inc.
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
