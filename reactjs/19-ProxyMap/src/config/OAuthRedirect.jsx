import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams, useNavigate } from "react-router-dom";
import { setUser } from "../redux/slices/authSlice";

const OAuthRedirect = () => {
  const [params] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = params.get("token");
    const email = params.get("email");
    const firstName = params.get("firstName");
    const lastName = params.get("lastName");
    const provider = params.get("provider");

    if (token && email) {
      dispatch(
        setUser({
          token,
          user: { email, firstName, lastName, provider },
        })
      );
      navigate("/dashboard");
    }
  }, [dispatch, params, navigate]);

  return null;
};

export default OAuthRedirect;
