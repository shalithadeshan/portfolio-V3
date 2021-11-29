import covid_19 from "../assets/images/Covid-19-Dashbord.png";

const Work = () => {
  return (
    <div className="container content-center grid">
      <div className="flex flex-row">
        <p className="text-light-color">
          <span className="font-monospace text-secondary-color">03</span> Work
        </p>
        <div className="border-t-2 ml-3 mt-3 px-14 inline-block border-secondary-color"></div>
      </div>
      <div className="mt-10">
        <div>
          <img src={covid_19} alt="covid" className="rounded-sm h-96" />
        </div>
        <div>
          <div>
            <p className="text-secondary-color text-right font-monospace">
              Featured Project
            </p>
          </div>
          <div>
            <p className="text-light-color text-xl font-black font-nunito text-right">
              Sri Lanka - Covid-19 Dashboard
            </p>
          </div>
          <div className="flex">
            <div className="lg:w-1/4"></div>
            <div className="lg:w-3/4 bg-primary-color-100 shadow-md py-5 px-5 rounded-sm">
              <p className="text-dark-color text-right text-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Suscipit, impedit numquam corporis temporibus cumque quasi et
                veritatis! Odit quis quo veritatis repellendus deserunt
                corporis, nobis tempore perspiciatis. Labore, rerum atque?
              </p>
            </div>
          </div>
          <div>
            <p className="text-dark-color font-monospace text-right mt-5">
              React &nbsp; Covid-19 API &nbsp; Bootstrap
            </p>
          </div>
          <div className="flex justify-end">
            <a href="https://github.com/shalithadeshan/covid-19_dashboard.git">
              <i className="lab la-github text-dark-color hover:text-secondary-color text-3xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
