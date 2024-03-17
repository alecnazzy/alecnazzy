export default function TextAnimate({ text, img }) {
  return (
    <div className="group w-fit flex flex-row justify-center items-center align-center text-center space-x-2 space-y-2 ml-4 mb-3 cursor-pointer">
      <img
        src={img}
        alt="icon"
        className="h-10 w-10 grayscale group-hover:grayscale-0"
      />
      <h1 className="text-2xl font-mono font-bold leading-6 text-white hover:text-orange-200">
        {text}
      </h1>
    </div>
  );
}
