const tabs = [
  { href: "#about", icon: "las la-user-alt" },
  { href: "#experience", icon: "lar la-star" },
  { href: "#work", icon: "las la-briefcase" },
  { href: "#contact", icon: "las la-id-card" },
];

export default function MobileTabs() {
  return (
    <div>
      <div className="bg-secondary-color py-5 rounded-t-lg">
        <div className="flex items-center text-2xl justify-between px-10">
          {tabs.map((tab) => (
            <a key={tab.href} href={tab.href}>
              <i className={`${tab.icon} text-black`}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
