import Typist from "react-text-typist";
export default function Home() {
  return (
    <div
      className="container content-center grid gap-0"
      style={{ height: "100vh" }}
    >
      <p className="text-secondary-color font-cursive text-4xl">Hello, I am</p>
      <p className="font-nunito font-bold text-light-color text-4xl md:text-7xl">
        Shalitha Jayasekara.
      </p>
      <div className="flex flex-row">
        <p className="font-nunito text-dark-color text-2xl md:text-6xl">
          I build
        </p>
        &nbsp; &nbsp;
        <Typist
          className="font-nunito text-dark-color text-2xl md:text-6xl"
          sentences={["Web Applications", "Mobile Applications"]}
          deletingSpeed={80}
          loop={true}
        />
      </div>
      <div>
        <p className="font-nunito text-darkest-color text-xl md:text-2xl">
          I am a software engineer specializing in front end.
        </p>
      </div>
      <div className="flex justify-start mt-5 visible md:invisible">
        <div
          className="rounded-md border-2 w-max border-secondary-color py-2 px-10 text-secondary-color hover:bg-secondary-color hover:text-black"
          style={{ cursor: "pointer" }}
        >
          Resume
        </div>
      </div>
    </div>
  );
}
