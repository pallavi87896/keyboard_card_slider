import { useEffect, useState } from "react";

type CardsProps = {
  isHover: boolean;
};

export default function Cards({ isHover }: CardsProps) {
  const [index, setIndex] = useState(0);

  const cards = [
    {
      title: "When you don't feel like, that's when you must Study",
      writer: "Ishan Tiwari",
    },
    {
      title: "Sher tips",
      writer: "Roshan Singh",
    },
    {
      title: "The Melody still fresh, the lyrics engraved",
      writer: "Ritusree",
    },
    {
      title:
        "It is our choices that show what we truly are, far more than our abilities",
      writer: "Albus Dumbledore",
    },
  ];

  useEffect(() => {
    if (!isHover) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % cards.length);
    }, 1500);

    return () => clearInterval(timer);
  }, [isHover]);

  return (
    <div className="relative h-[200px] w-[250px] mx-auto mt-2 -left-6">
      {cards.map((card, idx) => {
        const position = (idx - index + cards.length) % cards.length;

        const positions = [
          "top-0 z-10  opacity-40 left-6",
          "top-2 z-20  opacity-60 left-4",
          "top-4 z-30  opacity-70 left-2",
          "top-6 z-40 opacity-100 left-0",
        ];

        return (
          <div
            key={card.title}
            className={`absolute h-full w-[300px] bg-gray-100 text-gray-500 text-2xl rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.15)]  flex flex-col items-center justify-center transition-all duration-500 ${positions[position]}
          `}
          >
            <p className="text-[20px] sm:text-[16px] text-gray-500 font-medium leading-tight text-center px-2">
              “{card.title}”
            </p>

            <p className="text-[20px] sm:text-[15px] font-semibold text-blue-600 mt-2 italic">
              — {card.writer}
            </p>
          </div>
        );
      })}
    </div>
  );
}
