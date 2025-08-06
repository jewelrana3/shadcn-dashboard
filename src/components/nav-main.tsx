// import { ChevronRight } from "lucide-react";

// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@/components/ui/collapsible";
// import {
//   SidebarGroup,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarMenuSub,
//   SidebarMenuSubButton,
//   SidebarMenuSubItem,
// } from "@/components/ui/sidebar";
// import { Link } from "react-router-dom";

// export function NavMain({
//   items,
// }: {
//   items: {
//     title: string;
//     url: string;

//     isActive?: boolean;
//     items?: {
//       title: string;
//       url: string;
//     }[];
//   }[];
// }) {
//   return (
//     // <SidebarGroup>
//     //   <SidebarMenu>
//     //     {items.map((item) => (
//     //       <Collapsible
//     //         key={item.title}
//     //         asChild
//     //         defaultOpen={item.isActive}
//     //         className="group/collapsible"
//     //       >
//     //         <SidebarMenuItem>
//     //           {item.items && item.items.length > 0 ? (
//     //             <CollapsibleTrigger asChild>
//     //               <SidebarMenuButton
//     //                 tooltip={item.title}
//     //                 className="cursor-pointer"
//     //               >
//     //                 <span className="">{item.title}</span>
//     //                 <ChevronRight className="ml-auto h-4 w-4 transition-transform group-[&[data-state=open]]/collapsible:rotate-90" />
//     //               </SidebarMenuButton>
//     //             </CollapsibleTrigger>
//     //           ) : (
//     //             <CollapsibleTrigger asChild>
//     //               <SidebarMenuButton tooltip={item.title}>
//     //                 <Link to={item.url}>
//     //                   <span className="">{item.title}</span>
//     //                 </Link>
//     //               </SidebarMenuButton>
//     //             </CollapsibleTrigger>
//     //           )}
//     //           {item?.items && item.items.length > 0 && (
//     //             <CollapsibleContent>
//     //               <SidebarMenuSub>
//     //                 {item.items?.map((subItem) => (
//     //                   <SidebarMenuSubItem key={subItem.title}>
//     //                     <SidebarMenuSubButton asChild>
//     //                       <Link to={subItem.url}>
//     //                         <span>{subItem.title}</span>
//     //                       </Link>
//     //                     </SidebarMenuSubButton>
//     //                   </SidebarMenuSubItem>
//     //                 ))}
//     //               </SidebarMenuSub>
//     //             </CollapsibleContent>
//     //           )}
//     //         </SidebarMenuItem>
//     //       </Collapsible>
//     //     ))}
//     //   </SidebarMenu>
//     // </SidebarGroup>

//     <div>
//       <ul>
//         <li>Dashboard</li>
//       </ul>
//     </div>
//   );
// }

import {
  LayoutDashboard,
  ClipboardList,
  Map,
  Bike,
  MessageCircle,
  BarChart,
  FileText,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { label: "Order Management", icon: ClipboardList, path: "/orders" },
  { label: "Tracking", icon: Map, path: "/tracking" },
  { label: "Rider Information", icon: Bike, path: "/riders" },
  { label: "Message", icon: MessageCircle, path: "/messages" },
  { label: "Earning", icon: BarChart, path: "/earnings" },
  { label: "Invoice", icon: FileText, path: "/invoices" },
];

export function NavMain() {
  const location = useLocation();

  return (
    <aside className="w-[250px]  p-4  font-dm-sans text-white">
      <ul className="space-y-2">
        {menuItems.map(({ label, icon: Icon, path }) => {
          const isActive = location.pathname.startsWith(path);

          return (
            <li key={label}>
              <Link
                to={path}
                className="flex items-center gap-3 px-4 py-3 rounded-l-2xl transition-all font-semibold activeLink"
              >
                <Icon className="w-5 h-5" />
                <span className="truncate">{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
