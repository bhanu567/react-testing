import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import SignUp from "./Pages/Authentication/SignUp";
import LogIn from "./Pages/Authentication/LogIn";
import Home from "./Pages/Home";
import UpdateProfile from "./Pages/Authentication/UpdateProfile";
import EmailVerification from "./Pages/Authentication/EmailVerification";
import ForgetPassword from "./Pages/Authentication/ForgetPassword";
import ExpenseTracker from "./Pages/ExpenseTracker/ExpenseTracker";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <LogIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/updateprofile",
        element: localStorage.getItem("idToken") ? (
          <UpdateProfile />
        ) : (
          <Navigate to="/" replace></Navigate>
        ),
      },
      {
        path: "/emailverification",
        element: <EmailVerification />,
      },
      {
        path: "/forgetpassword",
        element: <ForgetPassword />,
      },
      {
        path: "/expensetracker",
        element: localStorage.getItem("idToken") ? (
          <ExpenseTracker />
        ) : (
          <Navigate to="/" replace></Navigate>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={Router}></RouterProvider>;
}

export default App;
