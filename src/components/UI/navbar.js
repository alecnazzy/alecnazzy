// import "./navbar.css";

function Navbar() {
  return (
    <div className="w-full top-0 mt-1 text-white text-lg text-gray-800">
      <ul className="flex justify-center justify-items-center">
        <li className="mr-5 ml-5">
          <a href="#projects">Projects</a>
        </li>
        <li className="mr-5 ml-5">Contact</li>
        <li className="mr-5 ml-5">Pics</li>
      </ul>
    </div>
  );
}

export default Navbar;
