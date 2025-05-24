import { FaRunning, FaDumbbell, FaHeartbeat, FaWeight } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Dashboard() {
  // Dummy data for the chart
  const data = [
    { name: "Jan", calories: 500 },
    { name: "Feb", calories: 600 },
    { name: "Mar", calories: 700 },
    { name: "Apr", calories: 650 },
    { name: "May", calories: 750 },
    { name: "Jun", calories: 800 },
  ];

  return (
    <div id="dashboard-container" className="bg-gray-100 min-h-screen">
      {/* Page Header */}
      <PageHeader title= "Dashboard" 
        currentPage="Activity Summary"
        buttonLabel="Add New Workou t"
      />

      {/* Dashboard Stats Cards */}
      <div id="dashboard-grid" className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Total Steps */}
        <div id="count-steps" className="flex items-center space-x-4 bg-white rounded-2xl shadow p-5 hover:shadow-md transition">
          <div className="bg-purple-400 text-white rounded-full p-4 text-2xl">
            <FaRunning />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-semibold text-gray-800">12,345</span>
            <span className="text-sm text-gray-500">Total Steps</span>
            <span className="text-xs text-green-500">+5% Up from yesterday</span>
          </div>
        </div>

        {/* Heart Rate */}
        <div id="count-heart-rate" className="flex items-center space-x-4 bg-white rounded-2xl shadow p-5 hover:shadow-md transition">
          <div className="bg-green-500 text-white rounded-full p-4 text-2xl">
            <FaHeartbeat />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-semibold text-gray-800">75 bpm</span>
            <span className="text-sm text-gray-500">Average Heart Rate</span>
            <span className="text-xs text-green-500">-1.5% Down from yesterday</span>
          </div>
        </div>

        {/* Total Weight Lifted */}
        <div id="count-weight-lifted" className="flex items-center space-x-4 bg-white rounded-2xl shadow p-5 hover:shadow-md transition">
          <div className="bg-blue-500 text-white rounded-full p-4 text-2xl">
            <FaDumbbell />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-semibold text-gray-800">150 kg</span>
            <span className="text-sm text-gray-500">Total Weight Lifted</span>
            <span className="text-xs text-green-500">+10% Up from last week</span>
          </div>
        </div>

        {/* Total Calories Burned */}
        <div id="count-calories" className="flex items-center space-x-4 bg-white rounded-2xl shadow p-5 hover:shadow-md transition">
          <div className="bg-yellow-500 text-white rounded-full p-4 text-2xl">
            <FaWeight />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-semibold text-gray-800">2,500 kcal</span>
            <span className="text-sm text-gray-500">Total Calories Burned</span>
            <span className="text-xs text-green-500">+15% Up from yesterday</span>
          </div>
        </div>
      </div>

      {/* Grafik Calories Burned Per Month (Line Chart) */}
      <div className="p-5">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Grafik Calories Burned Per Month</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="calories"
                stroke="#3B82F6"   
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
