import { MdOutlineNotifications } from "react-icons/md";
import { SidebarTrigger } from "../ui/sidebar";

export default function Header() {
  return (
    <header className="flex justify-between h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 my-3 mb-14">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
      </div>

      <div className="flex items-center justify-center  gap-5 px-4">
        <div className="bg-yellow-50 h-11 w-11 flex items-center justify-center rounded-full text-black relative">
          <span className="absolute inset-0  ml-6">
            <div className="inline-flex items-center px-1.5 py-0.5  text-xs font-semibold leading-4 rounded-full bg-[#EEC10B]  text-black">
              6
            </div>
          </span>
          <MdOutlineNotifications size={28} />
        </div>
        <div className="flex items-center gap-2">
          <img
            className="rounded-full w-10 h-10 border-2 border-[#8AC2FF]"
            src="https://i.ibb.co/xJdQCTG/download.jpg"
            alt="pic"
          />
          <div>Mostain Billah</div>
        </div>
      </div>
    </header>
  );
}
