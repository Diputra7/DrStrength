import { RxDashboard } from "react-icons/rx"; 
 import { ImQuotesRight } from "react-icons/im";
import { MdDashboard, MdRememberMe } from "react-icons/md";
import {
  FaUserAlt,
  FaShoppingBag,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";
import { PiChalkboardTeacherLight } from "react-icons/pi";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
  const menuClass = ({ isActive }) =>
    `flex items-center gap-3 px-5 py-3 rounded-md transition-all text-sm font-medium
    ${isActive ? "bg-orange-500 text-white" : "text-gray-600 hover:text-orange-500 hover:bg-orange-50"}`;

  return (
    <div
      className="flex flex-col min-h-screen w-60 bg-white py-6 px-4 border-r border-gray-200"
      style={{ fontFamily: 'var(--font-Manrope-semibold)' }}
    >
      {/* Logo Text + Image + Garis bawah */}
 <div className="mb-6 px-1">
  <div className="flex justify-center items-center gap-2 text-orange-500 font-extrabold text-lg mb-2">
    <span>Muscle Gym</span>
    <img
      src="/img/logo_musclegym.png"
      alt="Logo"
      className="w-8 h-8 object-contain"
    />
  </div>
  <div className="border-b border-gray-200"></div>
</div>

      {/* Menu Items */}
      <nav className="flex flex-col gap-2">
        <NavLink id="menu-dashboard" to="/" className={menuClass}>
          <RxDashboard className="text-lg" />
          <span>Overview</span>
        </NavLink>
        <NavLink id="menu-members" to="/Members" className={menuClass}>
          <MdRememberMe className="text-lg" />
          <span>Workout</span>
        </NavLink>
        <NavLink id="menu-trainers" to="/Trainers" className={menuClass}>
          <FaUserAlt className="text-lg" />
          <span>Diet Plan</span>
        </NavLink>
        <NavLink id="menu-exercise" to="/Exercise" className={menuClass}>
          <PiChalkboardTeacherLight className="text-lg" />
          <span>Goals</span>
        </NavLink>
        <NavLink id="menu-products" to="/Products" className={menuClass}>
          <FaShoppingBag className="text-lg" />
          <span>My Schedule</span>
        </NavLink>
        <NavLink id="menu-quotes" to="/Quotes" className={menuClass}>
          <ImQuotesRight className="text-lg" />
          <span>Progress</span>
        </NavLink>
        <NavLink id="menu-feedback" to="/Feedback" className={menuClass}>
          <BiMessageSquareDots className="text-lg" />
          <span>Feedback</span>
        </NavLink>
      </nav>

      {/* Help & Logout */}
      <div className="mt-auto pt-6">
        <NavLink
          id="menu-help"
          to="/Help"
          className="flex items-center gap-3 px-5 py-3 text-gray-500 hover:text-orange-500 text-sm"
        >
          <FaCog className="text-base" />
          <span>Help</span>
        </NavLink>
        <Link
          id="menu-logout"
          to="/login"
          className="flex items-center gap-3 px-5 py-3 text-gray-500 hover:text-red-500 text-sm"
        >
          <FaSignOutAlt className="text-base" />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
}