import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleVerifyAdminUser = async () => {

        const url = "http://13.232.193.27:3000/api/verifyEmailPassword"
        const isAdmin = await axios.post(url, { email, password });

        console.log(isAdmin);
        if (isAdmin.data.status) {
            navigate("/Dashboard");
        } else {
            setError(isAdmin.data.message)
        }
    }

    const handleBack = () => {
        navigate("/Dashboard");
    }

    return (
        <div className="login-container">
            <h2>Login</h2>
            <div >
                <div className="input-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name={email}
                        required=""
                        placeholder="Enter your email"
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="otp">Password:</label>
                    <input
                        type="text"
                        id="otp"
                        name={password}
                        required=""
                        placeholder="Enter Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn" onClick={handleVerifyAdminUser}>
                    Login
                </button>
                {error && <div className="error-message">{error}</div>}
                {error === "You are not allowed to login here" && <button type="submit" className="btn" onClick={handleBack}>
                    Back to Dashboard
                </button>}
            </div>
        </div>
    )
}

export default AdminLogin