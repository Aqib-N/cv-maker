// src/components/Sidebar/Sidebar.tsx
/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import NextImage from "../NextImage/NextImage";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const navLinks = [
    { href: "/", label: "Home", icon: "/icons/home.svg" },
    { href: "/templates", label: "Templates", icon: "/icons/templates.svg" },
    { href: "/profile", label: "Profile", icon: "/icons/profile.svg" },
    { href: "/more", label: "More", icon: "/icons/more.svg" },
  ];

  return (
    <aside
      className={`box-shadow bg-white text-darkGrey flex flex-col items-start justify-between p-6 relative transition-width duration-300 ease-in-out min-h-screen ${
        isCollapsed ? "w-[6.5rem]" : "w-[16.625rem]"
      }`}
      style={{ willChange: "width" }}
    >
      {isCollapsed ? (
        <NextImage
          src="/icons/menu-black.svg"
          alt="menu-icon"
          width={24}
          height={24}
          className="group cursor-pointer block lg:hidden"
          onClick={toggleSidebar}
        />
      ) : (
        <NextImage
          src="/icons/close-icon.svg"
          alt="close-icon"
          width={24}
          height={24}
          className="group cursor-pointer block lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <div
        className={`w-full flex flex-col items-start justify-between ${isCollapsed ? "gap-4" : "gap-11"}`}
      >
        <div className="w-full flex items-center justify-between gap-5">
          <div className="flex items-center justify-between gap-3">
            <NextImage
              src="/icons/duck-logo.svg"
              alt="site-logo"
              width={48}
              height={48}
              className="w-auto h-auto object-cover"
            />
            <p
              className={`text-p2 font-bold text-charcoalBlack transition-opacity duration-300 ${
                isCollapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
              }`}
            >
              CV Maker
            </p>
          </div>
          <NextImage
            src="/icons/tabler--layout-sidebar-left-collapse.svg"
            alt="collapse-icon"
            width={24}
            height={24}
            className={`object-cover cursor-pointer transition-opacity duration-300 ${
              isCollapsed ? "opacity-0" : "opacity-100"
            }`}
            onClick={toggleSidebar}
          />
        </div>
        <NextImage
          src="/icons/tabler--layout-sidebar-left-collapse.svg"
          alt="expand-icon"
          width={24}
          height={24}
          className={`object-cover cursor-pointer p-4 transition-opacity duration-300 rotate-180 ${
            isCollapsed ? "opacity-100" : "opacity-0"
          }`}
          onClick={toggleSidebar}
        />
        <div className="w-full flex flex-col items-start gap-1">
          {navLinks?.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`w-full flex items-center gap-4 p-4 text-p2 font-normal rounded-2xl ${
                pathname === link?.href
                  ? "bg-lightGrey"
                  : "hover:bg-lightGrey active:bg-lightGrey"
              }`}
            >
              <NextImage
                src={link.icon}
                alt={`${link?.label.toLowerCase()}-icon`}
                width={24}
                height={24}
                className="group cursor-pointer"
              />
              <span
                className={`transition-opacity duration-300 ${
                  isCollapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
          <Link href="/premium" className="px-[2.8125rem] flex">
            {/* <CustomButton
              text="Go premium"
              iconSrc="/premium.svg"
              altText="premium-icon"
              color="warning"
              otherClasses="!gap-2 py-[.4375rem] pl-[.6875rem] pr-4 !text-p1 text-darkCharcoal font-normal hover:font-medium active:font-bold"
            /> */}
          </Link>
        </div>
      </div>
      <div className="w-full flex flex-col items-start gap-1">
        <Link
          href="/logout"
          className={`w-full flex items-center gap-4 p-4 text-p2 font-normal rounded-2xl ${
            pathname === "/logout"
              ? "bg-lightGrey"
              : "hover:bg-lightGrey active:bg-lightGrey"
          }`}
        >
          <NextImage
            src="/icons/logout.svg"
            alt="logout-logo"
            width={24}
            height={24}
            className="group cursor-pointer"
          />
          <span
            className={`transition-opacity duration-300 ${
              isCollapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
            }`}
          >
            Logout
          </span>
        </Link>
        <div
          className={`w-full flex items-center justify-between gap-[1.375rem] p-4 text-p2 font-normal rounded-2xl hover:bg-lightGrey cursor-pointer`}
        >
          <div className="flex items-center gap-4">
            <NextImage
              src="/icons/light-mode.svg"
              alt="light-mode-logo"
              width={24}
              height={24}
              className="group cursor-pointer"
            />
            <span
              className={`transition-opacity duration-300 ${
                isCollapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
              }`}
            >
              Light mode
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
