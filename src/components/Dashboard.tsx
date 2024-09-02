import { Link, Outlet } from "react-router-dom";

function Dashboard() {
    return (
        <section className="dashboard">
            <h2>Dashboard</h2>
            <nav>
                <li>
                    <Link to="Stats">Stats</Link>
                </li>
                <li>
                    <Link to="Settings">Settings</Link>
                </li>
            </nav>
            <Outlet />
        </section>
    )
}

export default Dashboard