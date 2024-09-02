import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./components/App";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { NotFound } from "./components/NotFound";
import Dashboard from "./components/Dashboard";
import Stats from "./components/stats";
import Settings from "./components/Settings";

const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact-us" element={<Contact />} />
            <Route path="dashboard" element={<Dashboard />}>
                <Route path="stats" element={<Stats />} />
                <Route path="settings" element={<Settings />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Route>

    )
)

export default Router