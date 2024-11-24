export default function Navbar() {
  return (
    <div className="w-full top-0 mt-0 text-lg  font-mono">
      <ul className="flex justify-center justify-items-center">
        <li className="mr-5 mr-96 ">Alec Nazworth</li>

        <li className="mr-5 ml-5">
          <p className="text-lg  w-fit group hover:underline">
            <a href="mailto:nazworthalec@outlook.com">
              nazworthalec@outlook.com
            </a>
          </p>
        </li>

        <li className="mr-5 ml-5">
          <p className="text-lg w-fit group hover:underline">
            <a
              href="https://github.com/alecnazzy"
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>
          </p>
        </li>
      </ul>
    </div>
  );
}
