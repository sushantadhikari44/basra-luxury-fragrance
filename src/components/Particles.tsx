export function Particles({ color = "#ffffff", count = 24 }: { color?: string; count?: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => {
        const size = 2 + Math.random() * 4;
        const left = Math.random() * 100;
        const delay = Math.random() * 18;
        const dur = 16 + Math.random() * 16;
        const op = 0.25 + Math.random() * 0.5;
        return (
          <span
            key={i}
            className="particle absolute rounded-full"
            style={{
              left: `${left}%`,
              bottom: `-10px`,
              width: size,
              height: size,
              background: color,
              boxShadow: `0 0 ${size * 4}px ${color}`,
              animationDelay: `-${delay}s`,
              ["--p-dur" as never]: `${dur}s`,
              ["--p-op" as never]: op,
            }}
          />
        );
      })}
    </div>
  );
}