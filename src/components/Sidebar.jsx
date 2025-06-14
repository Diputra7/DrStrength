 import { ImQuotesRight } from "react-icons/im"; 
import { MdRememberMe } from "react-icons/md";
import {
  FaUserAlt,
  FaRegCalendarAlt,
  FaCog,
  FaSignOutAlt,
  FaShoppingBag,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { BiBarChartAlt2, BiMessageSquareDots } from "react-icons/bi";
import { PiChalkboardTeacherLight } from "react-icons/pi";
import { IoBarbellSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
  const menuClass = ({ isActive }) =>
    `flex items-center p-3 rounded-lg cursor-pointer 
${
  isActive
    ? "bg-blue-500 text-white font-semibold"
    : "text-gray-600 hover:bg-blue-100 hover:text-blue-500 hover:font-semibold"
}`;

  return (
    <div
      id="sidebar"
      className="flex flex-col min-h-screen w-64 bg-white p-8 shadow-none"
    >
      {/* Logo */}
      <div id="sidebar-logo" className="flex flex-col">
        <span className="text-3xl font-poppins-extrabolditalic text-biru">
          Fix<span className="text-gray-900">Gym</span>
        </span>
        <span className="mt-2 text-gray-400">Classic Admin Dashboard</span>
      </div>

      {/* Menu Utama */}
      <div id="sidebar-menu" className="mt-10">
        <ul className="space-y-3">
          <li>
            <NavLink id="hal-1" to="/" className={menuClass}>
              <MdDashboard className="mr-3 text-xl" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink id="hal-4" to="/Members" className={menuClass}>
              <MdRememberMe className="mr-3 text-xl" />
              <span>Members</span>
            </NavLink>
          </li>
          <li>
            <NavLink id="hal-2" to="/Trainers" className={menuClass}>
              <IoBarbellSharp className="mr-3 text-xl" />
              <span>Trainers</span>
            </NavLink>
          </li>

          <li>
            <NavLink id="hal-3" to="/Exercise" className={menuClass}>
              <PiChalkboardTeacherLight className="mr-3 text-xl" />
              <span>Exercise</span>
            </NavLink>
          </li>

          <li>
            <NavLink id="hal-6" to="/Products" className={menuClass}>
              <FaShoppingBag className="mr-3 text-xl" />
              <span>Products</span>
            </NavLink>
          </li>

          <li>
            <NavLink id="hal-7" to="/Quotes" className={menuClass}>
              <ImQuotesRight className="mr-3 text-xl" />
              <span>Quotes</span>
            </NavLink>
          </li>

          <li>
            <NavLink id="hal-8" to="/Feedback" className={menuClass}>
              <BiMessageSquareDots className="mr-3 text-xl" />
              <span>Feedback</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Divider sebelum Settings */}
      <div className="border-t border-gray-200 mt-auto"></div>

      {/* Settings & Logout */}
      <div className="space-y-2">
        <div className="flex items-center px-3 py-2 rounded-md cursor-pointer text-gray-500 hover:bg-blue-50 hover:text-blue-500 text-sm font-normal transition">
          <FaCog className="mr-2 text-base" />
          <span>Settings</span>
        </div>
        <Link
          to="/login"
          className="flex items-center px-3 py-2 rounded-md cursor-pointer text-gray-500 hover:bg-red-50 hover:text-red-500 text-sm font-normal transition"
        >
          <FaSignOutAlt className="mr-2 text-base" />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
}