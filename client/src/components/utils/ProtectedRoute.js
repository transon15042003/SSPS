import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { UserContext } from "../../context/UserContext";

function ProtectedRoute({ children, requireSPSO = false }) {
  const { user } = useContext(UserContext);
  const [cookies] = useCookies();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is not logged in
    if (!cookies.auth) {
      localStorage.clear();
      navigate("/login");
      return;
    }

    // Check if route requires SPSO access
    if (requireSPSO && !user.isSPSO) {
      navigate("/not-found");
      return;
    }
  }, [cookies, user, navigate, requireSPSO]);

  return children;
}

export default ProtectedRoute;
