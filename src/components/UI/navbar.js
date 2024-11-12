export default function Navbar() {
  return (
    <div className="w-full top-0 mt-0 text-lg  font-mono bg-white text-black">
      <ul className="flex justify-center justify-items-center">
        <li className="mr-5 mr-96 ">Alec Nazworth</li>

        <li className="mr-5 ml-5">
          <p className="text-lg  w-fit group">
            <a href="mailto:nazworthalec@outlook.com">
              nazworthalec@outlook.com
            </a>
            <img
              src="icons/icons8-paper-plane.gif"
              alt="email icon"
              className="h-5 w-5 ml-2 inline-block "
            />
          </p>
        </li>

        <li className="mr-5 ml-5">
          <p className="text-lg w-fit group">
            <a
              href="https://github.com/alecnazzy"
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>
            <img
              src="icons/icons8-github.gif"
              alt="github icon"
              className="h-5 w-5 ml-2 inline-block "
            />
          </p>
        </li>
      </ul>
    </div>
  );
}
