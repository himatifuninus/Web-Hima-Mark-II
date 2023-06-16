import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const navClass = ({ isActive }) => {
    return isActive
      ? `capitalize border-b-2 text-black border-slate-400 duration-300 ease-out`
      : `border-b capitalize font-medium duration-200 border-white hover:text-gray-700 hover:border-slate-300 duration-300 ease-out `;
  };

  const navList = [
    {
      item: "home",
      link: "/",
    },
    {
      item: "about",
      link: "/about",
    },
  ];

  return (
    <header className="flex px-5 h-[7vh] items-center justify-between">
      <figure>
        <figcaption>Navbar</figcaption>
      </figure>
      <nav>
        <ul className="flex w-[7vw] justify-between">
          {navList.map((nav, index) => (
            <li key={index}>
              <NavLink to={nav.link} className={navClass}>
                {nav.item}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
