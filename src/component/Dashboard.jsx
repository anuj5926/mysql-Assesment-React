import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();

    const handleClickAdmin = () => {
        navigate("/AdminLogin")
    }

    return (
        <div className="dashboard">
            <h1>Welcome to the Dashboard</h1>
            <div className="button-container">
                <button id="customer-register">Customer Registration</button>
                <button id="admin-register">Admin Registration</button>
                <button id="admin-login" onClick={handleClickAdmin}>Admin Login</button>
            </div>
        </div>

    )
}

export default Dashboard