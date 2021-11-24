const LeftSide = () => {
  return (
    <div>
      <div
        className="content-end grid flex-col justify-items-center"
        style={{ height: "85vh" }}
      >
        <div className="font-nunito hover:text-secondary-color transform hover:-translate-y-2  duration-500 text-dark-color">
          <a href="mailto:shalithad8520jayasekara@gmail.com">
            <i class="las la-envelope text-3xl"></i>
          </a>
        </div>
        <div className="border-l-2 mt-4 py-14  border-secondary-color"></div>
      </div>
    </div>
  );
};

export default LeftSide;
