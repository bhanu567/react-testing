const key = "AIzaSyCIYs9Qg0Yl5Pg2YeA-3spg45Dgs7TJi_c";
//you have only one option i.e. use thunk, because hook tum function ke under call nahi kar sakte as hook can be used directly inside a component. and agar yaha function banaye to tum hook nahi call kar sakte as hook can't be used inside a function

const logInApi =
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
  key;

export const loginAction = async (email, password) => {
  try {
    const response = await fetch(logInApi, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseData = await response.json();
    if (responseData.error) throw responseData.error;
    else {
      return responseData.idToken;
    }
  } catch (error) {
    throw error;
  }
};

const signUpApi =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + key;

export const signUpAction = async (email, password) => {
  try {
    const response = await fetch(signUpApi, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseData = await response.json();
    if (responseData.error) throw responseData.error;
    else {
      return responseData.idToken;
    }
  } catch (error) {
    throw error;
  }
};

const verifyEmailApi =
  "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=" + key;

export const verifyEmailAction = async (idToken) => {
  try {
    const response = await fetch(verifyEmailApi, {
      method: "POST",
      body: JSON.stringify({
        requestType: "VERIFY_EMAIL",
        idToken: idToken,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseData = await response.json();
    if (responseData.error) throw responseData.error;
    else
      alert(
        "A Email verification link has been sent to this Email ID : " +
          responseData.email
      );
  } catch (error) {
    throw error;
  }
};

const forgetPasswordApi =
  "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=" + key;

export const forgetPasswordAction = async (email) => {
  try {
    const response = await fetch(forgetPasswordApi, {
      method: "POST",
      body: JSON.stringify({
        requestType: "PASSWORD_RESET",
        email: email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseData = await response.json();
    if (responseData.error) throw responseData.error;
    else {
      alert("Password reset link has been sent to " + responseData.email);
    }
  } catch (error) {
    throw error;
  }
};

const updateApi =
  "https://identitytoolkit.googleapis.com/v1/accounts:update?key=" + key;

export const updateProfileAction = async (idToken, fullName, photoURL) => {
  try {
    await fetch(updateApi, {
      method: "POST",
      body: JSON.stringify({
        idToken: idToken,
        displayName: fullName,
        photoUrl: photoURL,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    throw error;
  }
};
