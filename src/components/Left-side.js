const LeftSide = () => {
  return (
    <div className="ml-10">
      <div
        className="content-end flex-col grid justify-items-center text-3xl"
        style={{ height: "100vh", position: "fixed" }}
      >
        <a href="https://www.linkedin.com/in/shalitha-jayasekara-194215180/">
          <i className="lab la-linkedin text-dark-color hover:text-secondary-color transform hover:-translate-y-2  duration-500"></i>
        </a>
        <a href="https://github.com/shalithadeshan">
          <i className="lab la-github text-dark-color hover:text-secondary-color transform hover:-translate-y-2  duration-500 mt-3"></i>
        </a>
        <a href="https://twitter.com/ShalithaDeshsn">
          <i className="lab la-twitter text-dark-color hover:text-secondary-color transform hover:-translate-y-2  duration-500 mt-3"></i>
        </a>
        <div className="border-l-2  mt-3 py-14  border-secondary-color"></div>
      </div>
    </div>
  );
};

export default LeftSide;
