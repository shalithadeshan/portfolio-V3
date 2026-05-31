import Image from "next/image";
import logo from "@/assets/logo.png";

const navItems = [
  { href: "#about", index: "01.", label: "About" },
  { href: "#experience", index: "02.", label: "Experience" },
  { href: "#work", index: "03.", label: "Work" },
  { href: "#contact", index: "04.", label: "Contact" },
];

export default function Header() {
  return (
    <div className="fixed w-full bg-primary-color z-10">
      <nav className="flex justify-between px-10 py-5">
        <Image src={logo} alt="logo" className="h-10 w-auto" priority />
        <div className="flex">
          <ul className="flex mt-2">
            {navItems.map((item) => (
              <li key={item.href} className="mr-5 cursor-pointer">
                <a
                  href={item.href}
                  className="text-light-color hover:text-secondary-color"
                >
                  <span className="font-monospace text-secondary-color">
                    {item.index}{" "}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="rounded-md border-2 border-secondary-color py-2 px-5 text-secondary-color hover:bg-secondary-color hover:text-black cursor-pointer">
            Resume
          </div>
        </div>
      </nav>
    </div>
  );
}
