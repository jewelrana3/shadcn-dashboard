import * as React from "react";
// import { Map, Settings2 } from "lucide-react";
import logo from "../../public/logo.svg";
import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

// This is sample data.
// const data = {
//   navMain: [
//     {
//       title: "Dashboard",
//       url: "/",
//       isActive: true,
//     },
//     {
//       title: "User",
//       url: "/user",
//     },
//     {
//       title: "Category",
//       url: "/category",
//     },

//     {
//       title: "FAQ",
//       url: "/faq",
//     },

//     {
//       title: "Settings",
//       url: "#",
//       icon: Settings2,
//       items: [
//         {
//           title: "Profile",
//           url: "/profile",
//         },
//         {
//           title: "Edit Profile",
//           url: "/edit-profile",
//         },
//         {
//           title: "Change Password",
//           url: "/change-password",
//         },
//         {
//           title: "About Us",
//           url: "/about",
//         },
//         {
//           title: "Privacy & Policy",
//           url: "/privacy-policy",
//         },
//         {
//           title: "Terms & Conditions",
//           url: "terms-condition",
//         },
//       ],
//     },
//   ],
//   projects: [
//     {
//       name: "Travel",
//       url: "#",
//       icon: Map,
//     },
//   ],
// };

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} className="">
      <SidebarHeader className="flex items-center justify-center">
        <img className="w-40" src={logo} alt="pic" />
      </SidebarHeader>
      <SidebarContent>
        <div className="mt-6">
          <NavMain />
          {/* <NavProjects projects={data.projects} /> */}
        </div>
      </SidebarContent>

      <SidebarRail />
      <SidebarFooter className="mb-10 cursor-pointer">
        <Link
          to="/login"
          className="flex items-center justify-center text-red-400"
        >
          <button className=" cursor-pointer">Logout</button>
        </Link>
      </SidebarFooter>
    </Sidebar>
  );
}
