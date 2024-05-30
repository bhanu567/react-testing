import React from "react";
import { verifyEmailAction } from "../../store/actions/authActions";
import { useNavigate } from "react-router-dom";

const EmailVerification = () => {
  const navigate = useNavigate();
  const veryEmailHandler = async (e) => {
    e.preventDefault();
    const idToken = localStorage.getItem("idToken");
    try {
      await verifyEmailAction(idToken);
      navigate("/", { replace: true });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div
      style={{ display: "flex", justifyContent: "center", paddingTop: "100px" }}
    >
      <button
        type="button"
        class="btn btn-dark btn-sm"
        onClick={veryEmailHandler}
      >
        Verify Email
      </button>
    </div>
  );
};

export default EmailVerification;
