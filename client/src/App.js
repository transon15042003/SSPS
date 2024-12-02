import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/utils/Footer";
import Header from "./components/utils/Header";
import ProtectedRoute from "./components/utils/ProtectedRoute";
import { UserContext } from "./context/UserContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import CustomerRoutes from "./routes/CustomerRoutes";
import SPSORoutes from "./routes/SPSORoutes";

export default function App() {
    const [user, setUser] = useState({
        token: null,
        isSPSO: false,
        listFiles: [],
    });
    const [cookies] = useCookies();

    useEffect(() => {
        const userCredentials = JSON.parse(
            localStorage.getItem("userCredentials")
        );

        if (userCredentials === null || userCredentials === undefined) {
            setUser({ token: null, isSPSO: false, listFiles: [] });
        } else {
            setUser({ ...user, ...userCredentials });
        }
    }, [cookies]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/">
                        <Route index element={<Home />} />
                        <Route path="login">
                            <Route index element={<Login />} />
                            <Route
                                path="customer"
                                element={<Login role="customer" />}
                            />
                            <Route
                                path="spso"
                                element={<Login role="spso" />}
                            />
                        </Route>
                        <Route
                            path="profile"
                            element={
                                <ProtectedRoute>
                                    <Profile />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/*"
                            element={
                                <ProtectedRoute requireSPSO={user.isSPSO}>
                                    {user.isSPSO ? (
                                        <SPSORoutes />
                                    ) : (
                                        <CustomerRoutes />
                                    )}
                                </ProtectedRoute>
                            }
                        />
                    </Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </UserContext.Provider>
    );
}
