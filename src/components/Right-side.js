const RightSide = () => {
  return (
    <div className="ml-10">
      <div
        className="content-end grid flex-col justify-items-center"
        style={{ height: "100vh", position: "fixed" }}
      >
        <div className="font-nunito  transform hover:-translate-y-2  duration-500 ">
          <a href="mailto:shalithad8520jayasekara@gmail.com">
            <i className="las la-envelope text-3xl text-dark-color hover:text-secondary-color"></i>
          </a>
        </div>
        <div className="border-l-2 mt-4 py-14  border-secondary-color"></div>
      </div>
    </div>
  );
};

export default RightSide;
