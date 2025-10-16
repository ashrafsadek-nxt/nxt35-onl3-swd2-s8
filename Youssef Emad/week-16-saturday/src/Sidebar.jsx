import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <>
            <button class="btn btn-primary m-3" data-bs-toggle="offcanvas" data-bs-target="#sidebar">
            ☰ Menu
            </button>
            <div class="offcanvas offcanvas-start bg-dark text-white" tabindex="-1" id="sidebar">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title">Sidebar</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
            </div>
                <div class="offcanvas-body">
                    <ul class="nav flex-column">
                    <li class="nav-item"><Link to="/dashboard" class="nav-link text-white">Dashboard</Link></li>
                    <li class="nav-item"><Link to="/settings" class="nav-link text-white">Settings</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
