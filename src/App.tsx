import { AppSidebar } from "./components/app-sidebar";
import Header from "./components/header/Header";
import MainLayout from "./components/layout/MainLayout";

import { SidebarInset, SidebarProvider } from "./components/ui/sidebar";

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {/* header  */}
        <Header />
        {/* main content */}
        <div>
          <MainLayout />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default App;
