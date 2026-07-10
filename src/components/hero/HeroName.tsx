import { siteConfig } from "@/lib/site-config";

export function HeroName() {
  const words = siteConfig.name.split(" ");

  return (
    <h1 className="font-display font-black uppercase leading-[0.85] text-[18vw] sm:text-[13vw] lg:text-[9.5vw] tracking-[-0.03em]">
      <span className="sr-only">{siteConfig.name}</span>
      <span aria-hidden="true">
        {words.map((word, wordIndex) => {
          const priorLetters = words.slice(0, wordIndex).reduce((sum, w) => sum + w.length, 0);
          return (
            <span key={wordIndex} className="block">
              {word.split("").map((letter, letterIndex) => {
                const delay = (priorLetters + letterIndex) * 35;
                return (
                  <span
                    key={letterIndex}
                    className="hero-letter hero-letter-in"
                    style={{ "--letter-delay": `${delay}ms` } as React.CSSProperties}
                  >
                    {letter}
                  </span>
                );
              })}
            </span>
          );
        })}
      </span>
    </h1>
  );
}
