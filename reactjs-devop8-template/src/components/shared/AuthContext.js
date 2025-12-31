import axios from "axios";
import { createContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import { GET_OWN_PROFILE } from "../../services/userService";
const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const [user, setUser] = useState(null) 

    useEffect(() => {
        const initializeUser = async () => {
          if (localStorage.getItem("tokens")) {
            try {
              const response = await GET_OWN_PROFILE();
              setUser(response); // Assuming response.data is the user data you want to set
            } catch (error) {
              console.error("Failed to fetch user profile:", error);
              setUser(null);
            }
          }
        };
    
        initializeUser();
      }, []);
    const login = async (email, password) => {
        try {
            const apiResponse = await axios.post(
                "https://api.escuelajs.co/api/v1/auth/login",
                { email, password }
            );

            localStorage.setItem("tokens", JSON.stringify(apiResponse.data));
            setUser(jwtDecode(apiResponse.data.access_token));
            setEmail(email);
            navigate("/");
            // reload the window 
            window.location.reload();
            toast.success("Login successful");
        } catch (error) {
            console.error(error);
            toast.error("Login failed");
        }

    };

    const logout = async () => {
        localStorage.removeItem("tokens");
        setUser(null);
        setEmail("");
        navigate("/");
        // reload the window
        window.location.reload();
    };
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthContext;
