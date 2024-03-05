export default function Contact() {
  return (
    <div
      className="mt-32 mb-32 flex flex-col justify-center align-center items-center"
      id="contact"
    >
      <h1 className="text-5xl text-gray-800">Connect with me</h1>
      <p className="text-2xl text-gray-800 mt-5 w-fit group">
        <a
          href="https://www.instagram.com/alecnazzy/"
          rel="noreferrer"
          target="_blank"
        >
          Instagram
        </a>
        <img
          src="icons/instagram-icon.png"
          alt="instagram icon"
          className="h-5 w-5 ml-2 inline-block invisible group-hover:visible"
        />
      </p>
      <p className="text-2xl text-gray-800 mt-5 w-fit group">
        <a href="https://github.com/alecnazzy" rel="noreferrer" target="_blank">
          Github
        </a>
        <img
          src="icons/github-icon.png"
          alt="github icon"
          className="h-5 w-5 ml-2 inline-block invisible group-hover:visible"
        />
      </p>
      <p className="text-2xl text-gray-800 mt-5 w-fit group">
        <a
          href="https://www.linkedin.com/in/alecnazworth/"
          rel="noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>
        <img
          src="icons/linkedin-icon.png"
          alt="linkedin icon"
          className="h-5 w-5 ml-2 inline-block invisible group-hover:visible"
        />
      </p>
      <p className="text-2xl text-gray-800 mt-5 w-fit group">
        <a href="mailto:nazworthalec@outlook.com">nazworthalec@outlook.com</a>
        <img
          src="icons/outlook-icon.png"
          alt="email icon"
          className="h-5 w-5 ml-2 inline-block invisible group-hover:visible"
        />
      </p>
    </div>
  );
}
