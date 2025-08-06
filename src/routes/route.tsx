import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "@/error/ErrorPage";
import ResetPasswordForm from "@/adminDashboardPage/authentication/NewPassword";
import Login from "@/adminDashboardPage/authentication/Login";
import ForgetPassword from "@/adminDashboardPage/authentication/ForgetPassword";
import VerifyOtp from "@/adminDashboardPage/authentication/VerifyOtp";
import AboutUS from "@/adminDashboardPage/setting/About";
import PrivacyPolicy from "@/adminDashboardPage/setting/PrivacyPolicy";
import TermsCondition from "@/adminDashboardPage/setting/TermsCondition";

import Profile from "@/adminDashboardPage/profile/Profile";
import EditProfile from "@/adminDashboardPage/profile/EditProfile";
import ChangePassword from "@/adminDashboardPage/profile/ChangePassword";
import Dashboard from "@/adminDashboardPage/dashboard/dashboard/Dashboard";
import User from "@/adminDashboardPage/dashboard/dashboard/User";
import Faq from "@/adminDashboardPage/faq/FAQ";
import { Category } from "@/adminDashboardPage/dashboard/category/Category";
// import { Category } from "@/adminDashboardPage/dashboard/category/Category";
// import Faq from "@/adminDashboardPage/faq/FAQ";

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

      { path: "profile", element: <Profile /> },
      { path: "edit-profile", element: <EditProfile /> },
      { path: "change-password", element: <ChangePassword /> },
      // { path: "notification", element: <Notification /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/forget-password", element: <ForgetPassword /> },
  { path: "/verify-otp", element: <VerifyOtp /> },
  { path: "/new-password", element: <ResetPasswordForm /> },
]);

export default router;
