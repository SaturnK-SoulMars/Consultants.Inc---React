import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const textRef = useRef(null);
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);

  useEffect(() => {

    const split = new SplitType(textRef.current, {
      types: "lines",
      tagName: "div"
    });

    gsap.set(split.lines, {
      yPercent: 100,
      opacity: 0
    });

    gsap.to(split.lines, {
      yPercent: 0,
      opacity: 1,
      stagger: 0.08,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 50%",
      }
    });

    // BOX SCROLL ANIMATION
    gsap.to(box1.current, {
      x: "90%",
      scrollTrigger: {
        trigger: box1.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.to(box2.current, {
      x: "60%",
      scrollTrigger: {
        trigger: box2.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.to(box3.current, {
      x: "30%",
      scrollTrigger: {
        trigger: box3.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    return () => split.revert();

  }, []);
  return (
    <div className='relative min-h-screen w-full bg-[#1925AA] overflow-hidden text-white'>
      <div className='h-[60vh] w-[85%] text-5xl px-5 flex items-end'>
        <p ref={textRef}>Our team of over 50 in-house
          consultants in New York City
          helps clients navigate even the
          toughest building code and
          zoning challenges. With 33 years
          of experience across construction
          regulations our team supports
          feasibility reviews CCD1s
          amendments fire safety land use
          matters landmark coordination
          violation resolution and all the
          permits approvals and sign-offs
          your project needs</p>
      </div>

      {/* <div ref={box1} className="absolute bottom-0 -left-full bg-white h-30 w-full">

      </div>

      <div ref={box2} className="absolute bottom-30 -left-full bg-white h-30 w-full">

      </div>

      <div ref={box3} className="absolute bottom-60 -left-full bg-white h-30 w-full">

      </div> */}
    </div>
  )
}

export default AboutSection
