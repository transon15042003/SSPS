import { useContext, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import homeBG from "../assets/img/pexels-printer.jpg";

function Home() {
    const { user } = useContext(UserContext);
    const [cookies] = useCookies();
    const navigate = useNavigate();

    useEffect(() => {
        if (!cookies.auth && localStorage.length > 0) {
            localStorage.clear();
            navigate("/");
        }
    }, [cookies, navigate]);

    return (
        <div
            className="position-relative h-100"
            style={{
                width: "100%",
                height: "auto",
                background: `url(${homeBG})`,
                backgroundSize: "cover",
                backgroundPosition: "right",
                color: "white",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="container-fluid position-absolute top-0 h-100">
                <div className="row h-100">
                    <div className="col-12 col-xl-6 d-flex justify-content-center align-items-md-center">
                        <p
                            className="pt-5 pt-sm-0 text-center fw-semibold"
                            style={{
                                width: "70%",
                                fontSize: "5vw",
                                color: "#1488db",
                            }}
                        >
                            SSPS HCMUT
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
