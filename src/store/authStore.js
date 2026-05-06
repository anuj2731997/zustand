import { create } from "zustand";
import {persist} from "zustand/middleware";

export const useAuthStore = create( persist((set)=>({
    user:null| Object,
    login:(userData)=>{
        set({user:userData})
    },
    logout:()=>{
        set({user:null})
    },
    isAuthenticated:Boolean(false),
    
}),{
    name:"auth-store"
}))