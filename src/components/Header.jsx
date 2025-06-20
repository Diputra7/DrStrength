import { FaSearch, FaBell, FaCog } from "react-icons/fa";

export default function Header() {
  return (
    <header
      className="flex items-center justify-between w-full h-16 bg-white px-6 border-b border-gray-200"
      style={{ fontFamily: 'var(--font-Manrope-semibold)' }}
    >
      {/* Left - Greeting */}
      <div className="w-60 flex-shrink-0 hidden md:flex flex-col">
        <p className="text-xs text-gray-400">Konniciwa</p>
        <p className="text-sm font-semibold text-gray-800">Welcome Back!</p>
      </div>

      {/* Center - Search */}
  {/* Center - Search */}
<div className="flex-1 flex justify-center">
  <div className="relative w-full max-w-[460px]"> {/* batas maksimum */}
    <input
      type="text"
      placeholder="Search"
      className="w-full pl-10 pr-4 py-2 bg-[#f7f8fa] border border-[#e3e6ec] rounded-full text-sm placeholder-gray-400 text-gray-700 focus:ring-2 focus:ring-orange-300 outline-none shadow-sm"
    />
    <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 text-sm" />
  </div>
</div>


      {/* Right - Icons */}
      <div className="flex items-center gap-5 w-60 justify-end">
        <div className="relative text-gray-500 hover:text-orange-500 cursor-pointer">
          <FaBell className="text-lg" />
          <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold rounded-full px-1.5">
            7
          </span>
        </div>
        <div className="text-gray-500 hover:text-orange-500 cursor-pointer">
          <FaCog className="text-lg" />
        </div>
        <img
          src="https://i.pinimg.com/originals/88/c1/2d/88c12dfcb28c16e51b30234a0513a74c.jpg"
          alt="Profile"
          className="w-9 h-9 rounded-full object-cover border"
        />
      </div>
    </header>
  );
}
