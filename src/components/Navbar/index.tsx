import { NavLink } from 'react-router-dom';
import type { FC } from 'react';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const navMenu = [
    { id: 1, name: 'Home', route: '/' },
    { id: 2, name: 'Tourists', route: '/tourists' },
    { id: 3, name: 'Profile', route: '/profile' },
  ];

  return (
    <nav className="bg-white fixed w-full z-40 top-0 start-0  border-gray-200">
      <div className="max-w-6xl flex justify-between flex-wrap items-center  mx-auto">
        <div className="items-center w-full md:flex md:w-auto md:order-1">
          <ul className="flex font-medium  rounded-lg">
            {navMenu.map((item) => (
              <NavLink
                to={item.route}
                key={item.id}
                className={({ isActive }) => {
                  return `block p-6 h-full w-full cursor-pointer hover:bg-gray-100 hover:text-primary ${
                    isActive ? 'bg-slate-100 text-primary' : ''
                  }`;
                }}
              >
                {item.name}
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="items-center w-full md:flex md:w-auto md:order-1">
          <ul className="flex font-medium  rounded-lg mx-2">
            <button className="bg-red-600 py-1 px-3 rounded-lg text-white hover:bg-red-700">
              Logout
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
