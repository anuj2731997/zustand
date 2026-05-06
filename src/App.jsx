
import './App.css'
import Counter from "./components/Counter.jsx";
import ThemePreview from "./components/ThemePreview.jsx";
import UserProfile from "./components/UserProfile.jsx";
import ThemeToggleButton from "./components/ThemeToggleButton.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Navbar from "./components/Navbar.jsx";
import { useShowLogin } from "./store/loginStore.js";
import LoginPage from "./components/LoginPage.jsx";
// import { useState } from "react";




function App() {

  const showLogin = useShowLogin((state) => state.showLogin);
  return (
    <div className={`app-container p-8` }>
      <h1 className='text-2xl font-bold'>Counter using Zustand</h1>
      <Counter />
      <hr className="my-8" />

      <div className='flex flex-col gap-8'>
        <h1 className='text-2xl font-bold'>Theme Manager using Zustand</h1>
        <ThemePreview />
        <hr className="my-8" />
          < UserProfile />
        <hr className="my-8" />

        <div className='flex justify-start'><ThemeToggleButton />
        </div>
      </div>

      <div className='mt-8'>
        <h1 className='text-2xl font-bold mb-4'>User Authentication using Zustand</h1>

        <p className='mb-4'>Use the buttons in the navbar to login or logout.</p>
        <Navbar />
        {showLogin ? <LoginPage /> : <Dashboard />}


      </div>

    </div>
  )
}

export default App
