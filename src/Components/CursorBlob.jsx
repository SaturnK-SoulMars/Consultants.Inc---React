import { useEffect, useRef } from "react";

const CursorBlob = () => {
  const blobRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", onMouseMove);

    let raf;
    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.08;
      pos.current.y += (target.current.y - pos.current.y) * 0.08;

      if (blobRef.current) {
        blobRef.current.style.transform = `translate(${pos.current.x - 100}px, ${pos.current.y - 100}px)`;
      }

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={blobRef}
      className="pointer-events-none absolute top-0 left-0 z-50 w-50 h-50 rounded-full mix-blend-screen"
      style={{
        background:
          "radial-gradient(circle, hsl(235 85% 55% / 0.6) 0%, hsl(235 85% 55% / 0.2) 40%, transparent 70%)",
        filter: "blur(20px)",
      }}
    />
  );
};

export default CursorBlob;