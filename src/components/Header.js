import { Link } from "react-scroll";

const Header = () => {
  return (
    <nav className=" flex flex-row justify-end mr-5 py-5">
      <ul className="text-light-color flex mt-2">
        <li className="mr-5" style={{ cursor: "pointer" }}>
          <Link to="about" spy={true} smooth={true}>
            <span className="font-monospace text-secondary-color">01. </span>
            About
          </Link>
        </li>
        <li className="mr-5">
          <span className="font-monospace text-secondary-color">02. </span>
          Experience
        </li>
        <li className="mr-5">
          <span className="font-monospace text-secondary-color">03. </span>Work
        </li>
        <li className="mr-5">
          <span className="font-monospace text-secondary-color">04. </span>
          Contact
        </li>
      </ul>
      <div
        className="rounded-md border-2 border-secondary-color py-2 px-5 text-secondary-color hover:bg-secondary-color hover:text-black"
        style={{ cursor: "pointer" }}
      >
        <p>View Resume</p>
      </div>
    </nav>
  );
};

export default Header;
