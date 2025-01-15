import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

function Login() {

    const [isShow, setIsShow] = useState(false);
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState('');


    const handleSendOtp = async () => {
        setError("");
        const url = "http://13.232.193.27:3000/api/sendOtp"
        const Otp = await axios.post(url, { email });

        if (Otp.data.status) {
            setIsShow(true);
        } else {
            setError(Otp.data.message)
        }
    }

    const handleVerifyOtp = async () => {
        setError("");
        const apiData = {
            email: email,
            otp: otp
        }

        const url = "http://13.232.193.27:3000/api/verifyOtp"
        const verifyData = await axios.post(url, apiData);

        if (verifyData.data.status) {
            navigate('/Dashboard');
        } else {
            setError(verifyData.data.message)
        }
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
                {
                    isShow ?
                        <>
                            <div className="input-group">
                                <label htmlFor="otp">OTP:</label>
                                <input
                                    type="text"
                                    id="otp"
                                    name={otp}
                                    required=""
                                    placeholder="Enter OTP"
                                    onChange={(e) => setOtp(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="btn" onClick={handleVerifyOtp}>
                                Login
                            </button>
                        </>
                        :
                        <button type="submit" className="btn" onClick={handleSendOtp}>
                            Send OTP
                        </button>
                }
                {error && <div className="error-message">{error}</div>}
            </div>
        </div>
    )
}

export default Login