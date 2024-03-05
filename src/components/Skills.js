import TextAnimate from "./UI/text-animate";

export default function Skills() {
  return (
    <div className="flex flex-col justify-center align-center items-center">
      <h2 className="text-5xl text-gray-800 mt-10 mb-8">Skills</h2>

      <div className="grid grid-cols-2 gap-2 justify-center align-center items-center w-fit mb-40 ml-10">
        <TextAnimate text="JavaScript" img="icons/js-icon.png" />
        <TextAnimate text="React" img="icons/react-icon.png" />
        <TextAnimate text="Node.js" img="icons/node-icon.png" />
        <TextAnimate text="Express" img="icons/express-icon.png" />
        <TextAnimate text="PHP" img="icons/php-icon.png" />
        <TextAnimate text="Laravel" img="icons/laravel-icon.png" />
      </div>
    </div>
  );
}
