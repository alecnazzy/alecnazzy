import HeaderAnimate from "./UI/header-animate";

export default function Profile() {
  return (
    <div className="mt-32 mb-12 flex flex-col flex-wrap justify-center align-center items-center">
      <HeaderAnimate headers={["Full-Stack", "Web Development", "UX Design"]} />

      <p className="mx-auto w-3/6 text-center mt-5 text-gray-800 text-xl font-mono p-7">
        I'm currently studying computer science at Florida International
        University in conjunction with serving in the Army National Guard. I am
        very passionate about web development, UX design, and learning new
        technologies to play around with and improve my skills. When I am not
        coding, I enjoy lifting weights, traveling, and hanging out with my dog
        Tobey.
      </p>
    </div>
  );
}
