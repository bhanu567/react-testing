import React, { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import icon from "../../Images/eye.png";
import { loginAction } from "../../store/actions/authActions";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/reducer/authReducer";

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const logInHandler = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (password.length > 7) {
      try {
        const idToken = await loginAction(email, password);
        alert("You have Logged In Successfully.");
        dispatch(authActions.login(idToken));
        navigate("/expensetracker", { replace: true });
      } catch (error) {
        alert(error.message);
      }
    } else {
      alert("Enter A password of length greater than 7.");
    }
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="p-3 border rounded border-dark"
        style={{ width: "300px", height: "350px" }}
      >
        <h3 className="fw-medium mt-3 mb-5 text-center">Login</h3>
        <form>
          <div className="input-group mb-3 border-0 text-bg-dark rounded-pill">
            <input
              type="email"
              className="form-control text-bg-dark border-0 rounded-pill login"
              placeholder="Email"
              ref={emailRef}
            ></input>
          </div>
          <div className="input-group text-bg-dark mb-3 border-0  rounded-pill">
            <input
              type="password"
              className="form-control text-bg-dark rounded-pill border-0 login"
              placeholder="Password"
              ref={passwordRef}
            ></input>
            <span style={{ paddingTop: "5px", paddingRight: "5px" }}>
              <img src={icon} alt="passwordIcon" width="30" height="30" />
            </span>
          </div>
          <div className="d-grid border-0 mt-5">
            <button
              className="btn btn-primary rounded-pill"
              type="button"
              onClick={logInHandler}
            >
              Login
            </button>
          </div>
          <div className="border-0" style={{ textAlign: "center" }}>
            <NavLink to="/forgetpassword">Forget Password</NavLink>
          </div>
        </form>
      </div>
      <div className="d-grid gap-2 mt-3 mx-auto" style={{ width: "300px" }}>
        <button
          className="btn btn-light"
          type="button"
          style={{ backgroundColor: "rgba(0, 255, 255, 0.074)" }}
          onClick={() => navigate("/signup", { replace: true })}
        >
          Don't have an account? SignUp
        </button>
      </div>
      <style>
        {` 
            .login::placeholder { 
                color: white;
                opacity: 0.5;
            }
        `}
      </style>
    </div>
  );
};

export default LogIn;
