import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "../ui/menubar";

export default function Navbar() {
  const menuItem = [
    {
      route: "/",
      title: "Home",
      submenu: [
        {
          route: "/divorce",
          title: "Divorce",
        },
        {
          route: "/newtab",
          title: "New Tab",
        },
        {
          route: "/share",
          title: "Share",
        },
      ],
    },
    {
      route: "/service",
      title: "Service",
      submenu: [
        {
          route: "/divorce",
          title: "Divorce",
        },
      ],
    },
    {
      route: "/cases",
      title: "Cases",
      submenu: [
        {
          route: "/divorce",
          title: "Divorce",
        },
      ],
    },
    {
      route: "/blog",
      title: "Blog",
      submenu: [
        {
          route: "/divorce",
          title: "Divorce",
        },
      ],
    },
    {
      route: "/contact",
      title: "Contact Us",
      submenu: [
        {
          route: "/divorce",
          title: "Divorce",
        },
      ],
    },
  ];
  return (
    <div className="container mx-auto px-9 mt-7">
      <div className="flex justify-between items-center">
        <div>
          <img src="./images/logo2.png" alt="" />
        </div>
        <Menubar className="border-0 shadow-none hidden lg:flex">
          {menuItem.map((item, index) => (
            <MenubarMenu key={index}>
              <MenubarTrigger className="cursor-pointer">
                {item.title} <ChevronRight className="size-4 ml-1" />
              </MenubarTrigger>
              {item.submenu && item.submenu.length > 0 && (
                <MenubarContent>
                  {item.submenu.map((subItem, subIndex) => (
                    <>
                      <MenubarItem key={subIndex}>{subItem.title}</MenubarItem>
                      <MenubarSeparator />
                    </>
                  ))}
                </MenubarContent>
              )}
            </MenubarMenu>
          ))}
        </Menubar>
        <div>
          <Button>Free Consultation</Button>
        </div>
      </div>
    </div>
  );
}
