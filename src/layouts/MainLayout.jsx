import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
    return (
       <div id="app-container" className="bg-white-100 min-h-screen flex w-full overflow-hidden">
          <Sidebar />
          <div id="main-content" className="flex-1 flex flex-col w-full">
            <Header />
            
          <Outlet/>
    
          </div>
        </div>
      );
    }
