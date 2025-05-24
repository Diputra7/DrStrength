 import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-white to-blue-400 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-xl animate-fade-in">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-3">
            <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-2xl shadow-lg">
              D7
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div> 
  );
}
