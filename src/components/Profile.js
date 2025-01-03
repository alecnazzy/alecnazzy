import HeaderAnimate from "./UI/header-animate";

export default function Profile() {
  return (
    <div className="mt-32 mb-24 flex flex-col flex-wrap justify-center align-center items-center">
      <HeaderAnimate headers={["Full-Stack", "Software Development"]} />

      <p className="mx-auto w-3/6 text-center mt-5 text-xl font-mono p-7">
        I'm currently studying computer science at Florida International
        University in conjunction with serving in the Army National Guard since
        2019. I am very passionate about software development and learning new
        technologies to play around with and improve my skills.
      </p>
    </div>
  );
}
