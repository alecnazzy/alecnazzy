export default function Navbar() {
  return (
    <div className="w-full top-0 mt-1 text-lg text-gray-800 font-mono">
      <ul className="flex justify-center justify-items-center">
        <li className="mr-5 mr-96 ">Alec Nazworth</li>

        <li className="mr-5 ml-48">
          <p className="text-lg text-gray-800 w-fit group">
            <a
              href="https://www.instagram.com/alecnazzy/"
              rel="noreferrer"
              target="_blank"
            >
              @alecnazzy
            </a>
            <img
              src="icons/instagram-icon.png"
              alt="instagram icon"
              className="h-5 w-5 ml-2 inline-block invisible group-hover:visible"
            />
          </p>
        </li>

        <li className="mr-5 ml-5">
          <p className="text-lg text-gray-800 w-fit group">
            <a href="mailto:nazworthalec@outlook.com">
              nazworthalec@outlook.com
            </a>
            <img
              src="icons/outlook-icon.png"
              alt="email icon"
              className="h-5 w-5 ml-2 inline-block invisible group-hover:visible"
            />
          </p>
        </li>

        <li className="mr-5 ml-5">
          <p className="text-lg text-gray-800 w-fit group">
            <a
              href="https://github.com/alecnazzy"
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>
            <img
              src="icons/github-icon.png"
              alt="github icon"
              className="h-5 w-5 ml-2 inline-block invisible group-hover:visible"
            />
          </p>
        </li>
      </ul>
    </div>
  );
}
