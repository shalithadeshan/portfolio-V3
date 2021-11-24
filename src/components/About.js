import myImg from "../assets/images/team-3.jpg";

const AboutMe = () => {
  return (
    <div className="container content-center grid" style={{ height: "90vh" }}>
      <div className="flex flex-row">
        <p className="text-light-color">
          <span className="font-monospace text-secondary-color">01</span> About
          Me
        </p>
        <div className="border-t-2 ml-3 mt-3 px-14 inline-block border-secondary-color"></div>
      </div>
      <div className="grid justify-items-center md:grid-cols-2 gap-10 mt-10">
        <div className="order-2 md:order-1">
          <p className="font-nunito text-darkest-color text-xl md:text-xl text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vel
            natus repellendus amet nostrum alias in quibusdam sed qui iste,
            nulla, distinctio eveniet tenetur laudantium culpa excepturi facilis
            eos itaque?
          </p>
          <div className="text-darkest-color mt-5">
            <ul className="grid grid-cols-2 list-inside">
              <li className="list-disc">JavaScript</li>
              <li className="list-disc">TypeScript</li>
              <li className="list-disc">TypeScript</li>
              <li className="list-disc">JavaScript</li>
              <li className="list-disc">TypeScript</li>
              <li className="list-disc">TypeScript</li>
            </ul>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img
            src={myImg}
            className="h-64 object-cover rounded-md transform hover:scale-110 transition ease-out duration-300"
            alt="img"
            style={{ position: "relative", zIndex: "1" }}
          />
          <div
            className="border-2 rounded-lg transform hover:rotate-6 hover:translate-x-2 hover:translate-y-15 ease-out duration-300 border-secondary-color p-32 mt-8 ml-5"
            style={{ position: "relative", marginTop: "-230px" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
