export default function TextReveal({ text, img }) {
  return (
    <div className="group w-fit flex flex-row justify-center items-center align-center text-center space-x-2 space-y-2 ml-4 cursor-pointer">
      <img src={img} alt="icon" className="h-10 w-10" />
      <h1 className="overflow-hidden text-2xl font-mono font-bold leading-6 text-white">
        {text.split("").map((char, index) => (
          <span
            className="group-hover:animate-text-animate inline-block"
            key={`${char}-${index}`}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
    </div>
  );
}
