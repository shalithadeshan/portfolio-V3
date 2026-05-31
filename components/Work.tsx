import Image from "next/image";
import covidDashboard from "@/assets/covid-19-dashboard.png";

export default function Work() {
  return (
    <div className="container content-center grid h-screen">
      <div className="flex flex-row">
        <p className="text-light-color">
          <span className="font-monospace text-secondary-color">03</span> Work
        </p>
        <div className="border-t-2 ml-3 mt-3 px-14 inline-block border-secondary-color"></div>
      </div>
      <div className="flex w-full mt-10 relative">
        <div className="w-full">
          <Image
            src={covidDashboard}
            alt="Sri Lanka Covid-19 Dashboard"
            className="rounded-sm w-full h-96 object-cover opacity-10 md:opacity-100"
          />
        </div>
        <div className="p-5 md:p-0 md:w-full absolute z-[1]">
          <div>
            <p className="text-secondary-color md:text-right font-monospace">
              Featured Project
            </p>
          </div>
          <div>
            <p className="text-light-color text-xl font-black font-nunito md:text-right">
              Sri Lanka - Covid-19 Dashboard
            </p>
          </div>
          <div className="flex">
            <div className="lg:w-3/6"></div>
            <div className="lg:w-3/6 md:bg-primary-color-100 md:shadow-md md:py-5 md:px-5 rounded-sm">
              <p className="text-dark-color md:text-right text-lg">
                A web application that shows the latest state of the COVID-19
                situation in Sri Lanka.
              </p>
            </div>
          </div>
          <div>
            <p className="text-dark-color font-monospace md:text-right mt-5">
              React &nbsp; Covid-19 API &nbsp; Bootstrap
            </p>
          </div>
          <div className="flex md:justify-end">
            <a href="https://github.com/shalithadeshan/covid-19_dashboard.git">
              <i className="lab la-github text-dark-color hover:text-secondary-color text-3xl mr-2"></i>
            </a>
            <a href="https://shalithadeshan.github.io/covid-19_dashboard/">
              <i className="las la-external-link-alt text-dark-color hover:text-secondary-color text-3xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
