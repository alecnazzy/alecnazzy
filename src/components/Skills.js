import TextReveal from "./UI/text-reveal";

function Skills() {
  return (
    <div className="flex flex-col justify-center align-center items-center">
      <h2 className="text-5xl text-gray-800 mt-10 mb-8">Skills</h2>

      <div className="grid grid-cols-2 gap-2 justify-center align-center items-center w-fit mb-40 ml-32">
        <TextReveal text="JavaScript" img="icons/js-icon.png" />
        <TextReveal text="PHP" img="icons/php-icon.png" />
        <TextReveal text="React" img="icons/react-icon.png" />
        <TextReveal text="Laravel" img="icons/laravel-icon.png" />
      </div>
    </div>
  );
}

export default Skills;
