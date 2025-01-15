import axios from "axios";
import { useState } from "react"

function AdminRegistartion() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [adminUser, setAdminUser] = useState([]);
    const [error, setError] = useState("");

    const handleSubmit = async () => {
        setError("");
        const apiData = {
            firstName,
            lastName,
            email,
            password,
            role: "admin"
        }
        const data = await axios.post('http://13.232.193.27:3000/api/registration', apiData)

        console.log(data);
        if (data.data.status) {
            setAdminUser(data.data.data);
        }else{
            setError(data.data.message)
        }
    }

    return (
        <>
            <div className="form-container">
                <h2>Admin Registration</h2>
                <div>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name={firstName}
                            placeholder="Enter your first name"
                            required=""
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name={lastName}
                            placeholder="Enter your last name"
                            required=""
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name={email}
                            placeholder="Enter your email"
                            required=""
                            onChange={(e) => setEmail(e.target.value)}

                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name={password}
                            placeholder="Enter your password"
                            required=""
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                </div>
                {error && <div className="error-message">{error}</div>}
            </div>

            <div className="table-container">
                <h2>Admin Data</h2>
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {adminUser?.map((user) => (
                            <tr key={user.email}>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default AdminRegistartion