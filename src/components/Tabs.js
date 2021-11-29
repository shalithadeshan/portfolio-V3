import { Link } from "react-scroll";

const MobileTabs = () => {
  return (
    <div>
      <div className="bg-secondary-color py-5 rounded-t-lg">
        <div className="flex items-center text-2xl justify-between px-10">
          <Link to="about" spy={true} smooth={true}>
            <i class="las la-user-alt text-black"></i>
          </Link>
          <Link to="experience" spy={true} smooth={true}>
            <i class="lar la-star text-black"></i>
          </Link>
          <Link to="work" spy={true} smooth={true}>
            <i class="las la-briefcase text-black"></i>
          </Link>
          <Link to="contact" spy={true} smooth={true}>
            <i class="las la-id-card text-black"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileTabs;
