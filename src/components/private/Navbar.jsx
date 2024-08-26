import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              {/* <img className="h-10 w-auto" src={logo} alt="React Jobs" /> */}
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                Back End
              </span>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink to="/admin-backend/index" className={linkClass}>
                  Home
                </NavLink>
                <NavLink
                  to="/admin-backend/personal-info"
                  className={linkClass}
                >
                  Personal Info
                </NavLink>
                <NavLink to="/admin-backend/education" className={linkClass}>
                  Education
                </NavLink>
                <NavLink to="/admin-backend/experiance" className={linkClass}>
                  Experience
                </NavLink>

                <NavLink to="/admin-backend/achievements" className={linkClass}>
                  Achievements
                </NavLink>

                <NavLink to="/admin-backend/social-links" className={linkClass}>
                  Social Links
                </NavLink>
                <NavLink to="/admin-backend/gallery" className={linkClass}>
                  Gallery
                </NavLink>
                <NavLink to="/admin-backend/skills" className={linkClass}>
                  Skills
                </NavLink>

                <NavLink to="/admin-backend/logout" className={linkClass}>
                  Logout
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
