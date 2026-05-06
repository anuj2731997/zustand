import { create } from "zustand";

export const useShowLogin = create((set)=>({
    showLogin:false,
    setShowLogin:(value)=>{
        set({showLogin:value})
    }
}))