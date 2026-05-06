
import { useAuthStore } from "../store/authStore";
import { useShowLogin } from "../store/loginStore";

import { useState } from "react";
export default function LoginPage() {
    const login = useAuthStore((state) => state.login);
    const setShowLogin = useShowLogin((state) => state.setShowLogin);   
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Login Page</h2>
            <p>Please enter your credentials to log in.</p>
            <div className="mt-4">
                <input type="text" placeholder="Username" className="border p-2 mr-2" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" className="border p-2 mr-2" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer" onClick={() =>{ login({ username, password })
                setShowLogin(false);
                }

            }>Login</button>
            </div>
        </div>
    )
}