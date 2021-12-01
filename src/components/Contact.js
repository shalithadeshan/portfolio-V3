const Contact = () => {
  return (
    <div className="container content-center grid " style={{ height: "80vh" }}>
      <div className="flex flex-row">
        <p className="text-light-color">
          <span className="font-monospace text-secondary-color">04</span>{" "}
          Contact Me
        </p>
        <div className="border-t-2 ml-3 mt-3 px-14 inline-block border-secondary-color"></div>
      </div>
      <div className="text-center mt-10">
        <p className="font-nunito text-light-color font-bold text-4xl md:text-5xl">
          Get In Touch
        </p>
        <div className="flex justify-center">
          <p className="font text-dark-color text-lg md:w-96">
            I am currently looking for new opportunity in front-end or back-end.
            My inbox is always open. Please drop a message if you have a
            question or just want to say Hi.
          </p>
        </div>
        <div className="flex justify-center mt-5">
          <a href="mailto:shalithad8520jayasekara@gmail.com">
            <div
              className="rounded-md border-2 w-max border-secondary-color py-2 px-5 text-secondary-color hover:bg-secondary-color hover:text-black"
              style={{ cursor: "pointer" }}
            >
              Say Hello
            </div>
          </a>
        </div>
      </div>
      <div className="text-3xl flex justify-between px-10 mt-10 visible md:invisible">
        <a href="https://www.linkedin.com/in/shalitha-jayasekara-194215180/">
          <i className="lab la-linkedin text-dark-color hover:text-secondary-color"></i>
        </a>
        <a href="https://github.com/shalithadeshan">
          <i className="lab la-github text-dark-color hover:text-secondary-color"></i>
        </a>
        <a href="https://twitter.com/ShalithaDeshsn">
          <i className="lab la-twitter text-dark-color hover:text-secondary-color"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
