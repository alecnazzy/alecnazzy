function Contact() {
  return (
    <div className="mt-32 mb-32" id="contact">
      <h1 className="text-5xl text-gray-800">Contact me at</h1>
      <p className="text-2xl text-gray-800 mt-5 group">
        <a
          href="https://www.instagram.com/alecnazzy/"
          rel="noreferrer"
          target="_blank"
        >
          Instagram
        </a>
        <img
          src="instagram-logo.png"
          alt="instagram logo"
          className="h-5 w-5 ml-2 inline-block invisible group-hover:visible"
        />
      </p>
      <p className="text-2xl text-gray-800 mt-5 group">
        <a href="https://github.com/alecnazzy" rel="noreferrer" target="_blank">
          Github
        </a>
        <img
          src="github-logo.png"
          alt="github logo"
          className="h-5 w-5 ml-2 inline-block invisible group-hover:visible"
        />
      </p>
      <p className="text-2xl text-gray-800 mt-5 group">
        <a
          href="https://www.linkedin.com/in/alecnazworth/"
          rel="noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>
        <img
          src="linkedin-logo.png"
          alt="linkedin logo"
          className="h-5 w-5 ml-2 inline-block invisible group-hover:visible"
        />
      </p>
      <p className="text-2xl text-gray-800 mt-5 group">
        <a href="mailto:nazworthalec@outlook.com">nazworthalec@outlook.com</a>
        <img
          src="outlook-logo.png"
          alt="email logo"
          className="h-5 w-5 ml-2 inline-block invisible group-hover:visible"
        />
      </p>
    </div>
  );
}

export default Contact;
