import { FaBell, FaSearch } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

export default function Header() {
    return (
        <div id="header-container" className="flex justify-between items-center p-4">
            {/* Search Bar */}
            <div id="search-bar" className="relative w-full max-w-lg">
                <input
                    className="border border-gray-100 p-2 pr-10 bg-white w-full rounded-md outline-none"
                    id="search-input"
                    type="text"
                    placeholder="Search Here..."
                />
                <FaSearch
                    id="search-icon"
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400"
                />
            </div>

            {/* Icon & Profile Section */}
            <div id="icons-container" className="flex items-center space-x-4">
                {/* Notification Icon */}
                <div id="notification-icon" className="relative p-3 bg-blue-100 rounded-2xl text-blue-500 cursor-pointer">
                    <FaBell />
                    <span id="notification-badge" className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white rounded-full px-1.5 text-xs">
                        50
                    </span>
                </div>

                {/* Chart Icon */}
                <div id="chart-icon" className="p-3 bg-blue-100 rounded-2xl cursor-pointer">
                    <FcAreaChart />
                </div>

                {/* Settings Icon */}
                <div id="settings-icon" className="p-3 bg-red-100 rounded-2xl text-red-500 cursor-pointer">
                    <SlSettings />
                </div>

                {/* Profile Section */}
                <div id="profile-container" className="flex items-center space-x-4 border-l pl-4 border-gray-300">
                    <span id="profile-text">
                        Alo, <b>Iam Super Star</b>
                    </span>
                    <img
                        id="profile-avatar"
                        src="https://static.vecteezy.com/system/resources/previews/012/389/520/non_2x/luxury-royal-wing-letter-dr-crest-gold-color-logo-victory-logo-crest-logo-wing-logo-logo-template-vector.jpg"
                        alt="Profile"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
