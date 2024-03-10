import TextAnimate from "./UI/text-animate";

export default function Skills() {
  return (
    <div className="flex flex-col justify-center align-center items-center">
      <div className="grid grid-cols-3 gap-10 justify-center align-center items-center w-fit mb-40 ">
        <div>
          <h2 className="text-2xl text-gray-800 mb-8">Languages</h2>

          <TextAnimate text="TypeScript" img="icons/ts-icon.png" />
          <TextAnimate text="Node.js" img="icons/nodejs-icon.png" />
          {/* <TextAnimate text="PHP" img="icons/php-icon2.png" /> */}
        </div>
        <div>
          <h2 className="text-2xl text-gray-800 mb-8">Technologies</h2>

          <TextAnimate text="React" img="icons/react-icon2.png" />

          <TextAnimate text="Fastify" img="icons/fastify-icon.png" />

          {/* <TextAnimate text="Laravel" img="icons/laravel-icon2.png" /> */}
        </div>
        <div>
          <h2 className="text-2xl text-gray-800 mb-8 ">Tools</h2>

          <TextAnimate text="Firebase" img="icons/firebase-icon.png" />
          <TextAnimate text="MongoDB" img="icons/mongodb-icon.png" />
        </div>
      </div>
    </div>
  );
}
