const RightSide = () => {
  return (
    <div>
      <div
        className="content-end flex-col grid justify-items-center text-dark-color text-3xl"
        style={{ height: "85vh" }}
      >
        <a href="https://www.linkedin.com/in/shalitha-jayasekara-194215180/">
          <i class="lab la-linkedin hover:text-secondary-color transform hover:-translate-y-2  duration-500"></i>
        </a>
        <a href="https://github.com/shalithadeshan">
          <i class="lab la-github hover:text-secondary-color transform hover:-translate-y-2  duration-500 mt-3"></i>
        </a>
        <a href="https://twitter.com/ShalithaDeshsn">
          <i class="lab la-twitter hover:text-secondary-color transform hover:-translate-y-2  duration-500 mt-3"></i>
        </a>
        <div className="border-l-2  mt-3 py-14  border-secondary-color"></div>
      </div>
    </div>
  );
};

export default RightSide;
