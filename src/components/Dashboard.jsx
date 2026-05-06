import { useAuthStore } from "../store/authStore";

export default function Dashboard() {
    const user = useAuthStore((state) => state.user);

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Dashboard</h2>
            {user ? (
                <div>
                <p>Welcome back, {user.username}!</p>
                
                </div>
            ) : (
                <p>Please log in to access your dashboard.</p>
            )}
        </div>
    );
}