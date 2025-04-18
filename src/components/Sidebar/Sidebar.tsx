/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import NextImage from "../Image/Image";
import { useState } from "react";
import { usePathname } from "next/navigation";

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
      className={`box-shadow h-auto bg-white text-darkGrey flex flex-col items-start justify-between p-6 relative transition-all duration-300 ${
        isCollapsed ? "w-[6.5rem]" : "w-[16.625rem]"
      }`}
    >
      {isCollapsed ? (
        <NextImage
          src="/icons/menu-black.svg"
          alt="logout-logo"
          width={24}
          height={24}
          objectFit="cover"
          objectPosition="center"
          loading="lazy"
          className="group cursor-pointer block lg:hidden"
          onClick={toggleSidebar}
        />
      ) : (
        <NextImage
          src="/icons/close-icon.svg"
          alt="logout-logo"
          width={24}
          height={24}
          objectFit="cover"
          objectPosition="center"
          loading="lazy"
          className="group cursor-pointer block lg:hidden"
          onClick={toggleSidebar}
        />
      )}
      <img
        src="/icons/collapse.svg"
        alt="collapse-icon"
        onClick={toggleSidebar}
        className={`absolute top-[2rem] -right-[0.9rem] w-[1.875rem] h-[1.875rem] p-[.5rem] rounded-[50%] bg-white box-shadow cursor-pointer hidden lg:block ${
          isCollapsed ? "rotate-180" : ""
        }`}
      />
      <div className="w-full flex flex-col items-start justify-between gap-11">
        <div className="flex items-center justify-between gap-3">
          <NextImage
            src="/icons/duck-logo.svg"
            alt="site-logo"
            width={48}
            height={48}
            objectFit="cover"
            objectPosition="center"
            loading="lazy"
            className="w-auto h-auto object-cover"
          />
          {!isCollapsed && (
            <div className="flex flex-col items-start">
              <p className="text-p2 font-bold text-charcoalBlack">CV Maker</p>
              <p className="text-p5 text-charcoalBlack font-normal">
                cv-maker@demo.com
              </p>
            </div>
          )}
        </div>
        <div className="w-full flex flex-col items-start gap-6">
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
                objectFit="cover"
                objectPosition="center"
                loading="lazy"
                className="group cursor-pointer"
              />
              {!isCollapsed && link?.label}
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
      <div className="w-full flex flex-col items-start">
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
            objectFit="cover"
            objectPosition="center"
            loading="lazy"
            className="group cursor-pointer"
          />
          {!isCollapsed && "Logout"}
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
              objectFit="cover"
              objectPosition="center"
              loading="lazy"
              className="group cursor-pointer"
            />
            {!isCollapsed && "Light mode"}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
