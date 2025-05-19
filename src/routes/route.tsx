import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "@/error/ErrorPage";
import ResetPasswordForm from "@/pages/authentication/NewPassword";
import Login from "@/pages/authentication/Login";
import ForgetPassword from "@/pages/authentication/ForgetPassword";
import VerifyOtp from "@/pages/authentication/VerifyOtp";
import AboutUS from "@/pages/setting/About";
import PrivacyPolicy from "@/pages/setting/PrivacyPolicy";
import TermsCondition from "@/pages/setting/TermsCondition";
import Notifications from "@/pages/notifications/Notifications";
import Profile from "@/pages/profile/Profile";
import EditProfile from "@/pages/profile/EditProfile";
import ChangePassword from "@/pages/profile/ChangePassword";
import Dashboard from "@/pages/dashboard/dashboard/Dashboard";
import User from "@/pages/dashboard/dashboard/User";
import { Category } from "@/pages/dashboard/category/Category";
import Faq from "@/pages/faq/FAQ";

// import Login from "../pages/authentication/Login";
// import ErrorPage from "../pages/error/ErrorPage";
// import Notification from "../pages/dashboard/Notification";
// import ForgetPassword from "../pages/authentication/ForgetPassword";
// import VerifyOtp from "../pages/authentication/VerifyOtp";
// import NewPassword from "../pages/authentication/NewPassword";
// import Dashboard from "../pages/dashboard/dasboard/Dashboard";
// import PrivacyPolicy from "../pages/dashboard/PrivacyPolicy";
// import EditProfile from "../pages/dashboard/profile/EditProfile";
// import ChangePassword from "../pages/dashboard/profile/ChangePassword";
// import Profile from "../pages/dashboard/profile/Profile";
// import TermsCondition from "../pages/dashboard/TermsCondition";
// import PostList from "../pages/dashboard/category/Category";
// import AboutUS from "../pages/dashboard/AboutUs";
// import User from "../pages/dashboard/user/User";
// import VenueList from "../pages/dashboard/venueList/VenueList";
// import Subscriber from "../pages/dashboard/subscriber/Subscriber";
// import FAQ from "../pages/dashboard/FAQ";
// import VenueDetail from "../pages/dashboard/venueList/VenueDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "user", element: <User /> },

      { path: "category", element: <Category /> },
      //   { path: "subscriber", element: <Subscriber /> },
      { path: "faq", element: <Faq /> },

      { path: "about", element: <AboutUS /> },
      { path: "privacy-policy", element: <PrivacyPolicy /> },
      { path: "terms-condition", element: <TermsCondition /> },
      { path: "notifications", element: <Notifications /> },
      { path: "profile", element: <Profile /> },
      { path: "edit-profile", element: <EditProfile /> },
      { path: "change-password", element: <ChangePassword /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/forget-password", element: <ForgetPassword /> },
  { path: "/verify-otp", element: <VerifyOtp /> },
  { path: "/new-password", element: <ResetPasswordForm /> },
]);

export default router;
