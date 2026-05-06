import { useAuthStore } from "../store/authStore.js";
import {useShowLogin} from "../store/loginStore.js";

export default function Navbar() {
//   const login = useAuthStore(state => state.login);
  const logout = useAuthStore(state => state.logout);
    const setShowLogin = useShowLogin((state) => state.setShowLogin);

  return (
    <div className="sticky top-0 z-10 p-4 bg-gray-800 text-white flex justify-between items-center">
      <button
        className="px-4 py-2 bg-green-500 rounded hover:bg-green-700 cursor-pointer"
        onClick={() => setShowLogin(true)}
      >
        Login
      </button>

      <button
        className="px-4 py-2 bg-red-500 rounded hover:bg-red-700 cursor-pointer"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}
