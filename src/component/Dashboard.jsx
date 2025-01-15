import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();

    const handleClickAdmin = () => {
        navigate("/AdminLogin")
    }

    const handleClickCustomerRegistration = () => {
        navigate("/CustomerRegistration")
    }

    const handleClickAdminRegistartion = () => {
        navigate("/AdminRegistration")
    }

    return (
        <div className="dashboard">
            <h1>Welcome to the Dashboard</h1>
            <div className="button-container">
                <button id="customer-register" onClick={handleClickCustomerRegistration}>Customer Registration</button>
                <button id="admin-register" onClick={handleClickAdminRegistartion}>Admin Registration</button>
                <button id="admin-login" onClick={handleClickAdmin}>Admin Login</button>
            </div>
        </div>

    )
}

export default Dashboard