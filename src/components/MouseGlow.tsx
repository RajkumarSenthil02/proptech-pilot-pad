import { useMouseGlow } from "@/hooks/useMouseGlow";

const MouseGlow = () => {
  const { x, y } = useMouseGlow();

  return (
    <div
      className="pointer-events-none fixed inset-0 z-40 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at ${x}px ${y}px, hsl(var(--primary) / 0.06), transparent 60%)`,
      }}
    />
  );
};

export default MouseGlow;
