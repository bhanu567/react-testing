import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/reducer/authReducer";
import premiumButton from "../Images/premiumButton.jpg";
import lightTheme from "../Images/lightTheme.png";
import darkTheme from "../Images/darkTheme.png";
import { Outlet } from "react-router-dom";

const Home = () => {
  const [lightMode, setLightMode] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(authActions.logout());
    navigate("/", { replace: true });
  };

  useEffect(() => {
    dispatch(authActions.login(localStorage.getItem("idToken")));
  }, [dispatch]);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const totalExpense = useSelector((state) => state.expense.totalExpense);
  const isPremiumMember = totalExpense > 10000 ? true : false;

  const changeThemeModeHandler = () => {
    if (lightMode) {
      setLightMode(!lightMode);
      document
        .getElementsByTagName("html")[0]
        .setAttribute("data-bs-theme", "dark");
    } else {
      setLightMode(!lightMode);
      document
        .getElementsByTagName("html")[0]
        .setAttribute("data-bs-theme", "light");
    }
  };

  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px",
            paddingLeft: "40px",
            paddingRight: "10px",
          }}
        >
          <i style={{ fontSize: "30px" }}>WelCome to Expense Tracker!!!</i>
          <div>
            {isPremiumMember && (
              <img
                src={premiumButton}
                style={{
                  height: "40px",
                  width: "100px",
                  marginRight: "5px",
                  marginTop: "10px",
                }}
                alt="Premium Member"
              ></img>
            )}
            {isLoggedIn && (
              <>
                <button
                  type="button"
                  className="btn btn-danger btn-sm me-2"
                  style={{
                    borderRadius: "10px",
                    padding: "3px 20px",
                  }}
                  onClick={logoutHandler}
                >
                  Logout
                </button>

                <i
                  style={{
                    borderRadius: "10px",
                    backgroundColor: "rgba(255, 179, 0, 0.513)",
                    padding: "5px 10px",
                  }}
                >
                  Your Profile is Incomplete.{" "}
                  <NavLink
                    to="/updateprofile"
                    style={{
                      textDecoration: "none",
                      fontStyle: "italic",
                      cursor: "pointer",
                    }}
                  >
                    Complete now
                  </NavLink>
                </i>
              </>
            )}
            <img
              src={lightMode ? darkTheme : lightTheme}
              style={{
                height: "40px",
                width: "60px",
                cursor: "pointer",
              }}
              alt="chage Theme"
              onClick={changeThemeModeHandler}
            ></img>
          </div>
        </div>
        <hr style={{ margin: "0px" }} />
      </div>
      <Outlet />
    </>
  );
};

export default Home;
