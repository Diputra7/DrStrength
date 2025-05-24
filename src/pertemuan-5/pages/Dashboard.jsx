import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeaderFrom from "../components/PageHeader";

export default function Dashboard() {
  return (
    <div id="dashboard-container" className="bg-gray-100 min-h-screen">
      <PageHeaderFrom />
      <div
        id="dashboard-grid"
        className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4"
      >
        <div
          id="count-orders"
          className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4"
        >
          <div className="bg-green-500 text-white rounded-full p-4 text-2xl">
            <FaShoppingCart />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">75</span>
            <span className="text-gray-500">Total Orders</span>
          </div>
        </div>

        <div
          id="count-delivered"
          className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4"
        >
          <div className="bg-blue-500 text-white rounded-full p-4 text-2xl">
            <FaTruck />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">175</span>
            <span className="text-gray-500">Total Delivered</span>
          </div>
        </div>

        <div
          id="count-canceled"
          className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4"
        >
          <div className="bg-red-500 text-white rounded-full p-4 text-2xl">
            <FaBan />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">40</span>
            <span className="text-gray-500">Total Canceled</span>
          </div>
        </div>

        <div
          id="count-revenue"
          className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4"
        >
          <div className="bg-yellow-500 text-white rounded-full p-4 text-2xl">
            <FaDollarSign />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">Rp.128 Juta</span>
            <span className="text-gray-500">Total Revenue</span>
          </div>
        </div>
      </div>
    </div>
  );
}