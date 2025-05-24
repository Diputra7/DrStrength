 import { FaSearch, FaBell, FaChevronDown } from "react-icons/fa";

export default function Header() {
    return (
        <header
        id="header-container"
        className="flex items-center justify-between w-full h-16 bg-white shadow-none px-6"
      >
        {/* Left Section: Menu + Search */}
        <div id="left-section" className="flex items-center space-x-4 flex-1 max-w-xl">
          {/* Menu Icon */}
          <div id="menu-icon" className="text-2xl text-gray-700 cursor-pointer hover:text-gray-900 transition">
            ☰
          </div>
  
          {/* Search Bar */}
          <div id="search-bar" className="relative w-full max-w-xs">
            <input
              id="search-input"
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-gray-300 rounded-full outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
            <FaSearch id="search-icon" className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>
  
        {/* Right Section: Notification, Language, Profile */}
        <div id="right-section" className="flex items-center space-x-6 ml-6">
          {/* Notification + Language Selector */}
          <div id="language-section" className="flex items-center space-x-4">
            {/* Notification Icon */}
            <div id="notification-icon" className="relative cursor-pointer text-gray-700 hover:text-gray-900 transition">
              <FaBell className="text-xl text-blue-500" />
              <span id="notification-badge" className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-semibold rounded-full px-1.5 py-0.5">
                7
              </span>
            </div>
  
            {/* Language Selector */}
            <div id="language-selector" className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition">
              <img
                id="language-flag"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAIVBMVEX/AAD////g4OLhwcL/r6/gycrf0NLiv8Hgx8ng1tj/rKxFlW5MAAABdklEQVR4nO3cSxXCQAAEwSWw+fkXDMeEFgCHKgXzWsCMdXtyta1jH9ztY/56wt+ZmoQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlNn/+xj+N8cXUeY3lwt2gSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUp8mfHsDX65uwjuQRC0AAAAASUVORK5CYII="
                alt="IDN Flag"
                className="w-6 h-4 rounded-sm"
              />
              <span id="language-text" className="text-sm font-medium text-gray-700">
                Indonesian
              </span>
              <FaChevronDown className="text-gray-500 text-sm" />
            </div>
          </div>
  
          {/* Profile Section */}
          <div id="profile-section" className="flex items-center space-x-3 cursor-pointer hover:opacity-90 transition">
            <img
              id="profile-image"
              src="https://i.pinimg.com/originals/88/c1/2d/88c12dfcb28c16e51b30234a0513a74c.jpg"
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover border border-gray-300"
            />
            <div id="profile-info" className="flex flex-col leading-tight">
              <span id="profile-name" className="text-sm font-semibold text-gray-800">
                Super Dipp
              </span>
              <span id="profile-role" className="text-xs text-gray-500">
                Mandor
              </span>
            </div>
            <FaChevronDown className="text-gray-500 text-sm" />
          </div>
        </div>
      </header>
    );
  }
  