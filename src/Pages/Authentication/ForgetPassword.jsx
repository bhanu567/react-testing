import React, { useRef, useState } from "react";
import { Triangle } from "react-loader-spinner";
import { forgetPasswordAction } from "../../store/actions/authActions";
import githubLogo from "../../Images/github-logo.png";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const [isLoader, setIsLoader] = useState(false);
  const emailRef = useRef();
  const navigate = useNavigate();

  const forgetPasswordHandler = async () => {
    setIsLoader(true);
    try {
      const email = emailRef.current.value;
      await forgetPasswordAction(email);
      navigate("/", { replace: true });
      setIsLoader(false);
    } catch (error) {
      alert(error.message);
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
      {isLoader && (
        <Triangle
          visible={true}
          height="80"
          width="80"
          color="blue"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClassNameclassName=""
        />
      )}
      {!isLoader && (
        <form
          className="p-3 border rounded border-dark"
          style={{
            width: "300px",
            height: "350px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {" "}
          <img
            src={githubLogo}
            alt="GitHub"
            width="40"
            height="40"
            style={{ margin: "20px auto" }}
          ></img>
          <div
            className="border-0 mt-5 p-0 mb-0"
            style={{ textAlign: "center", fontStyle: "italic" }}
          >
            Enter the Registered Email ID
          </div>
          <div>
            <input
              placeholder=" "
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              ref={emailRef}
            />
            <label htmlFor="firstName">Email</label>
          </div>
          <button
            type="button"
            style={{ width: "120px" }}
            className="btn btn-dark mt-5 mx-auto"
            onClick={forgetPasswordHandler}
          >
            Send Link
          </button>
        </form>
      )}
    </div>
  );
};

export default ForgetPassword;
