 import { FaFireAlt, FaWalking, FaShoePrints } from "react-icons/fa";
import { ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

export default function Dashboard() {
  const data = [
    { name: "Mon", Workout: 60, Calories: 1800, Steps: 2200 },
    { name: "Tue", Workout: 40, Calories: 1600, Steps: 2000 },
    { name: "Wed", Workout: 80, Calories: 1900, Steps: 2500 },
    { name: "Thu", Workout: 20, Calories: 1500, Steps: 1800 },
    { name: "Fri", Workout: 50, Calories: 1700, Steps: 2000 },
    { name: "Sat", Workout: 60, Calories: 1750, Steps: 2100 },
    { name: "Sun", Workout: 70, Calories: 1850, Steps: 2300 },
  ];

  return (
    <div className="bg-[#f8fbff] min-h-screen p-6 grid grid-cols-1 xl:grid-cols-4 gap-6">
      <div className="xl:col-span-3 flex flex-col gap-6">
        {/* Banner */}
        <div className="bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl p-6 text-white flex justify-between items-center shadow">
          <div>
            <h1 className="text-xl font-bold">Track Your Daily Activities</h1>
            <p className="text-sm text-orange-100 mt-1 max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            </p>
          </div>
          <img
            src="https://img.freepik.com/free-photo/young-woman-doing-yoga-exercises-isolated-white-background_231208-11861.jpg"
            alt="Yoga"
            className="w-36 h-24 object-cover rounded-lg"
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard
            icon={<FaWalking className="text-3xl" />}
            label="Workout"
            value="4 hrs"
            bg="bg-[#00c5e0]"
          />
          <StatCard
            icon={<FaFireAlt className="text-3xl" />}
            label="Calories"
            value="1800 kcal"
            bg="bg-[#ff6c00]"
          />
          <StatCard
            icon={<FaShoePrints className="text-3xl" />}
            label="Steps"
            value="2200 steps"
            bg="bg-[#ba4df6]"
          />
        </div>

        {/* Chart */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Goal Progress</h2>
            <button className="text-sm px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100">
              Weekly
            </button>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
              <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="Workout" fill="#00c5e0" />
              <Bar dataKey="Calories" fill="#ff6c00" />
              <Bar dataKey="Steps" fill="#ba4df6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Sidebar - Right */}
      <div className="flex flex-col gap-6">
        {/* Schedule */}
        <div className="bg-white rounded-2xl p-5 shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-base font-semibold text-gray-700">My Schedule</h2>
            <a href="#" className="text-sm text-orange-500 font-medium">View All →</a>
          </div>
          {[
            { day: "Monday", activity: "Stretch", time: "08:00", unit: "20 Pieces" },
            { day: "Tuesday", activity: "Back Stretch", time: "08:00", unit: "10 Round" },
            { day: "Wednesday", activity: "Yoga", time: "08:00", unit: "20 min" },
          ].map((item, idx) => (
            <div key={idx} className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50">
              <div>
                <p className="font-semibold text-gray-800">{item.day}</p>
                <p className="text-sm text-gray-500">{item.activity}</p>
                <p className="text-xs text-gray-400">At {item.time}</p>
              </div>
              <span className="text-xs bg-orange-100 text-orange-500 px-2 py-1 rounded-full font-semibold">
                {item.unit}
              </span>
            </div>
          ))}
        </div>

        {/* Promo */}
        <div className="bg-[#ba4df6] text-white rounded-2xl p-5 relative overflow-hidden shadow">
          <h3 className="text-sm font-semibold">50% off on Premium Membership</h3>
          <p className="text-xs text-violet-100 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          </p>
          <button className="bg-orange-400 hover:bg-orange-500 text-white text-sm px-4 py-1 rounded-full font-semibold">
            Upgrade
          </button>
          <img
            src="https://img.freepik.com/free-photo/fitness-couple-flexing-muscles_23-2148505250.jpg"
            alt="Promo"
            className="absolute bottom-0 right-0 w-28 opacity-90"
          />
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, bg }) {
  return (
    <div className={`${bg} rounded-2xl p-5 flex justify-between items-center text-white shadow-md`}>
      <div>{icon}</div>
      <div className="text-right">
        <p className="text-sm">{label}</p>
        <p className="text-xl font-bold leading-tight">{value}</p>
      </div>
    </div>
  );
}