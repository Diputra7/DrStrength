import "./assets/tailwind.css";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";

// import Dashboard from "./pages/Dashboard";
// import Trainers from "./pages/Trainers";
// import Exercise from "./pages/Exercise";
// import Class from "./pages/Class";
// import NotFound400 from "./error/NotFound400";
// import NotFound401 from "./error/NotFound401";
// import NotFound403 from "./error/NotFound403";
// import MainLayout from "./layouts/MainLayout";
// import AuthLayout from "./layouts/AuthLayout";
// import Login from "./pages/auth/Login";
// import Register from "./pages/auth/Register";
// import Forgot from "./pages/auth/Forgot";

const MainLayout = React.lazy(() => import("./layouts/MainLayout"))
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"))
const Dashboard = React.lazy(() => import("./pages/Dashboard"))
const Exercise = React.lazy(() => import("./pages/Exercise"))
const Trainers = React.lazy(() => import("./pages/Trainers"))
const Class = React.lazy(() => import("./pages/Class"))
const NotFound400 = React.lazy(() => import("./error/NotFound400"))
const NotFound401 = React.lazy(() => import("./error/NotFound401"))
const NotFound403 = React.lazy(() => import("./error/NotFound403"))

const Login = React.lazy(() => import("./pages/auth/Login"))
const Register = React.lazy(() => import("./pages/auth/Register"))
const Forgot = React.lazy(() => import("./pages/auth/Forgot"))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Trainers" element={<Trainers />} />
          <Route path="/Exercise" element={<Exercise />} />
          <Route path="/Class" element={<Class />} />
          <Route path="/NotFound400" element={<NotFound400 />} />
          <Route path="/NotFound401" element={<NotFound401 />} />
          <Route path="/NotFound403" element={<NotFound403 />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
