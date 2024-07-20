import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

import monallogo from "@/assets/Logo/monal_logo.png";
import monalLogoLight from "@/assets/Logo/monal_logo_light.png";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { buttonVariants } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { useTheme } from "./theme-provider";

interface RouteProps {
  href: string;
  label: string;
}

const mainRoutes: RouteProps[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "products",
    label: "Products",
  },
  {
    href: "services",
    label: "Services",
  },
  {
    href: "contact-us",
    label: "Stay in Touch",
  },
];

const moreRoutes: RouteProps[] = [
  {
    href: "fallback",
    label: "Blog",
  },
  {
    href: "fallback",
    label: "Terms",
  },
  {
    href: "fallback",
    label: "Policies",
  },
  {
    href: "partner",
    label: "Partner",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMoreOpen, setIsMoreOpen] = useState<boolean>(false);
  const { theme } = useTheme();

  return (
    <header className="relative border-b-[1px] top-0 z-40 w-full font-mono bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-20 px-4 w-screen flex justify-between">
          <NavigationMenuItem>
            <Link to={"/"} className="ml-2 font-bold text-xl flex">
              <img
                src={theme === "light" ? monallogo : monalLogoLight}
                alt="MonalTech"
                width={190}
              />
            </Link>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    Monal Tech
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  <ModeToggle />
                  {mainRoutes.map(({ href, label }: RouteProps) => (
                    <a
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </a>
                  ))}
                  <div className="relative">
                    <a
                      href="#"
                      onClick={() => setIsMoreOpen(!isMoreOpen)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      More Links
                    </a>
                    {isMoreOpen && (
                      <div className="absolute top-full left-0 bg-white dark:bg-gray-800 shadow-lg rounded-md py-2 mt-1">
                        {moreRoutes.map(({ href, label }: RouteProps) => (
                          <a
                            key={label}
                            href={href}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            {label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {mainRoutes.map((route: RouteProps, i) => (
              <a
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </a>
            ))}
            <div className="relative">
              <a
                href="#"
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className={buttonVariants({ variant: "ghost" })}
              >
                More Links
              </a>
              {isMoreOpen && (
                <div className="absolute top-full left-0 bg-white dark:bg-gray-800 shadow-lg rounded-md py-2 mt-1">
                  {moreRoutes.map(({ href, label }: RouteProps) => (
                    <a
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="hidden md:flex gap-2">
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
