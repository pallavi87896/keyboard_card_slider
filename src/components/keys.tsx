type KeyboardProps = {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

export default function Keys({ onMouseEnter, onMouseLeave }: KeyboardProps) {
  const row1 = ["`","1","2","3","4","5","6","7","8","9","0","-","=","backspace"];
  const row2 = ["Q","W","E","R","T","Y","U","I","O","P","[","]","\\"];
  const row3 = ["A","S","D","F","G","H","J","K","L",";","'"];
  const row4 = ["Z","X","C","V","B","N","M",",",".","/"];
  const row5 = ["ctrl","fn","win","alt","","alt","ctrl","←"," ","→"];

  const glowClass = "translate-x-1 shadow-[0_0_8px_2px_rgba(0,153,255,1)]";

  const addGlow = (el: HTMLElement) => {
    el.classList.add(...glowClass.split(" "));
  };

  const removeGlow = (el: HTMLElement) => {
    el.classList.remove(...glowClass.split(" "));
  };

  const handleTouchStart = (e: any) => {
    e.preventDefault();
    addGlow(e.currentTarget);
    onMouseEnter();
  };

  const handleTouchEnd = (e: any) => {
    removeGlow(e.currentTarget);
    onMouseLeave();
  };

  const handleEnter = (e: any) => {
    addGlow(e.currentTarget);
    onMouseEnter();
  };

  const handleLeave = (e: any) => {
    removeGlow(e.currentTarget);
    onMouseLeave();
  };

  const events = {
    onMouseEnter: handleEnter,
    onMouseLeave: handleLeave,
    onTouchStart: handleTouchStart,
    onTouchEnd: handleTouchEnd,
  };

  return (
    <div className="flex flex-col items-center gap-2">

      <div className="flex gap-2 ">
        {row1.map(key => (
          <button key={key} {...events}
            className="px-4 py-2.5 rounded-lg text-gray-500 bg-zinc-900 
            relative overflow-hidden rounded-lg transition-all duration-300 
            cursor-pointer shadow-[0_0_6px_rgba(255,255,255,0.85)] 
            text-white font-semibold text-[12px]"
          >
            {key}
          </button>
        ))}
      </div>

      <div className="flex gap-2">
        <button {...events} 
          className="px-8 py-2.5 rounded-lg relative overflow-hidden 
          transition-all duration-300 cursor-pointer text-gray-500 bg-zinc-900
          shadow-[0_0_6px_rgba(255,255,255,0.85)] text-white font-semibold text-[12px]"
        >
          tab
        </button>

        {row2.map(key => (
          <button key={key} {...events}
            className="px-4 py-2.5 rounded-lg text-gray-500 bg-zinc-900 
            shadow-[0_0_6px_rgba(255,255,255,0.85)]
            transition-all duration-300 cursor-pointer
            text-white font-semibold text-[12px]"
          >
            {key}
          </button>
        ))}
      </div>

      <div className="flex gap-2">
        <button {...events}
          className="px-5 py-2.5 rounded-lg text-gray-500 bg-zinc-900 
          shadow-[0_0_6px_rgba(255,255,255,0.85)]
          transition-all duration-300 cursor-pointer
          text-white font-semibold text-[12px]"
        >
          caps lock
        </button>

        {row3.map(key => (
          <button key={key} {...events}
            className="px-4 py-2.5 rounded-lg text-gray-500 bg-zinc-900 
            shadow-[0_0_6px_rgba(255,255,255,0.85)]
            transition-all duration-300 cursor-pointer
            text-white font-semibold text-[12px]"
          >
            {key}
          </button>
        ))}

        <button {...events}
          className="px-7 py-2.5 rounded-lg text-gray-500 text-white font-semibold text-[12px]  
          bg-zinc-900 cursor-pointer shadow-[0_0_6px_rgba(255,255,255,0.85)]
          transition-all duration-300"
        >
          enter
        </button>
      </div>

      <div className="flex gap-2">
        <button {...events}
          className="px-10 py-2.5 rounded-lg bg-zinc-900 text-white font-semibold text-[12px]
          shadow-[0_0_6px_rgba(255,255,255,0.85)] cursor-pointer
          transition-all duration-300"
        >
          shift
        </button>

        {row4.map(key => (
          <button key={key} {...events}
            className="px-4 py-2.5 rounded-lg bg-zinc-900 text-white font-semibold text-[12px]
            shadow-[0_0_6px_rgba(255,255,255,0.85)] cursor-pointer
            transition-all duration-300"
          >
            {key}
          </button>
        ))}

        <button {...events}
          className="px-11 py-2.5 rounded-lg bg-zinc-900 text-white font-semibold text-[12px]
          shadow-[0_0_6px_rgba(255,255,255,0.85)] cursor-pointer
          transition-all duration-300"
        >
          shift
        </button>
      </div>

<div className="flex gap-2">
  {row5.map((key, index) => (
    index === 8 ? (
        <div className="">
      <div
        key={key}
        className="flex flex-col rounded-lg text-white font-semibold text-[12px] text-gray-500 px-4 mb-0.5  text-gray-500 bg-zinc-900 relative overflow-hidden rounded-lg transition-all duration-300 hover:translate-x-1 hover:shadow-[0_0_8px_2px_rgba(0,153,255,1)]
cursor-pointer
             shadow-[0_0_6px_rgba(255,255,255,0.85)] text-[12px]"
      >
        <button {...events} className="">↑</button>
        </div>
        <div key={key}
        className="flex flex-col rounded-lg text-white font-semibold text-[12px] text-gray-500 px-4 mt-0.5  text-gray-500 bg-zinc-900 relative overflow-hidden rounded-lg transition-all duration-300 hover:translate-x-1 hover:shadow-[0_0_8px_2px_rgba(0,153,255,1)]
cursor-pointer
             shadow-[0_0_6px_rgba(255,255,255,0.85)]  text-[12px]">
        <button {...events} className="">↓</button>
      </div>
      </div>
    ) : (
      <button {...events}
        key={key}
        className={` px-4 py-2.5 rounded-lg text-gray-500 relative overflow-hidden rounded-lg transition-all duration-300 hover:translate-x-1 hover:shadow-[0_0_8px_2px_rgba(0,153,255,1)]
cursor-pointer font-semibold text-white text-gray-500 bg-zinc-900
             shadow-[0_0_6px_rgba(255,255,255,0.85)]  text-[12px]  ${index === 4 ? "px-26 py-2.5 rounded-lg " : ""}`}
      >
        {key}
      </button>
    )
  ))}
</div>
    </div>
  );
}
