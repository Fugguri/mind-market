import { Menu,  } from "lucide-react";


import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import NavigationSidebar from "./navigation-sidebar";

const MobileSidebar = () => {
    return (  
        <Sheet>
        <SheetTrigger className="sm:hidden pr-4 hover:opacity-75 transition">
            <Menu className="bg-transparent" />
        </SheetTrigger>
        <SheetContent side="left" className="w-[72px] sm:w-[72px]">
          <NavigationSidebar />
        </SheetContent>
      </Sheet>
            
    );
}
 
export default MobileSidebar;