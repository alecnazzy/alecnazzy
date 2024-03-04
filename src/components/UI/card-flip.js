export default function CardFlip({ title, description, stack }) {
  return (
    <div className="relative w-96 h-60 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 card">
      <CardFront title={title} description={description} />
      <CardBack stack={stack} />
    </div>
  );
}

function CardFront({ title, description }) {
  return (
    <div
      className="absolute inset-0 w-full h-full flex justify-center items-center text-center bg-gray-800 text-sky-300 transition-all duration-100 delay-200 z-20 hover:opacity-0"
      mx-auto
      w-80
      h-64
      mt-5
      p-7
      rounded-2xl
    >
      <div className="text-center">
        <h2 className="text-2xl">{title}</h2>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}

function CardBack({ stack = [] }) {
  return (
    <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-gray-800 text-sky-300 transition-all z-10 card-back">
      {/* array of tools used */}
      <ul>
        {stack.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
