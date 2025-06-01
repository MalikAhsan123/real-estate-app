import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import Home from "./modules/home/Home.jsx";
import About from "./modules/about/About.jsx";
import Properties from "./modules/properties/Properties.jsx";
import Contact from "./modules/conatct/Contact.jsx";
import Form from "./components/form/Form.jsx";
import Admin from "./AdminModules/admin/Admin.jsx";
import { Provider, useSelector } from "react-redux";
import { store } from "./store/store.js";
// window.dispatch = store.dispatch;
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
// import AdminDashboard from "./AdminModules/adminDashboard/AdminDashboard.jsx";
import Dashboard from "./AdminModules/Dashboard/Dashboard.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="properties" element={<Properties />} />
        <Route path="contact" element={<Contact />} />
        <Route path="register" element={<Form isLogin={false} />} />
        <Route path="login" element={<Form isLogin={true} />} />
      </Route>
      <Route path="admin" element={<Admin />} />
      <Route path="/dashboard" element = {<Dashboard />} />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <ToastContainer />
  </Provider>
);
