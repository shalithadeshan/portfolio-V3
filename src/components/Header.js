import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="fixed w-full bg-primary-color z-10">
      <nav className="flex justify-end mr-10 py-5">
        <ul className="flex mt-2">
          <li className="mr-5 " style={{ cursor: "pointer" }}>
            <Link
              to="about"
              className="text-light-color hover:text-secondary-color"
              spy={true}
              smooth={true}
            >
              <span className="font-monospace text-secondary-color">01. </span>
              About
            </Link>
          </li>
          <li className="mr-5" style={{ cursor: "pointer" }}>
            <Link
              to="experience"
              className="text-light-color hover:text-secondary-color"
              spy={true}
              smooth={true}
            >
              <span className="font-monospace text-secondary-color">02. </span>
              Experience
            </Link>
          </li>
          <li className="mr-5" style={{ cursor: "pointer" }}>
            <Link
              to="work"
              className="text-light-color hover:text-secondary-color"
              spy={true}
              smooth={true}
            >
              <span className="font-monospace text-secondary-color">03. </span>
              Work
            </Link>
          </li>
          <li className="mr-5" style={{ cursor: "pointer" }}>
            <Link
              to="contact"
              className="text-light-color hover:text-secondary-color"
              spy={true}
              smooth={true}
            >
              <span className="font-monospace text-secondary-color">04. </span>
              Contact
            </Link>
          </li>
        </ul>
        <div
          className="rounded-md border-2 border-secondary-color py-2 px-5 text-secondary-color hover:bg-secondary-color hover:text-black"
          style={{ cursor: "pointer" }}
        >
          Resume
        </div>
      </nav>
    </div>
  );
};

export default Header;
