/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import NextImage from "../Image/Image";
import { useState } from "react";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside
      className={`box-shadow h-auto bg-white text-darkGrey flex flex-col items-start justify-between p-6 relative transition-all duration-300 ${
        isCollapsed ? "w-[6.5rem]" : "w-[16.625rem]"
      }`}
    >
      <img
        src="icons/collapse.svg"
        alt="collapse-icon"
        onClick={toggleSidebar}
        className={`absolute top-[2rem] -right-[0.9rem] w-[1.875rem] h-[1.875rem] p-[.5rem] rounded-[50%] bg-white box-shadow cursor-pointer ${
          isCollapsed ? "rotate-180" : ""
        }`}
      />
      <div
        className={`w-full flex flex-col items-start justify-between gap-11`}
      >
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
        <ul className="w-full flex flex-col items-start gap-6">
          <li className="w-full">
            <Link
              href="/"
              className="w-full flex items-center gap-4 p-4 text-p2 font-normal hover:bg-lightGrey active:bg-lightGrey rounded-2xl"
            >
              <NextImage
                src="/icons/home.svg"
                alt="home-icon"
                width={23}
                height={23}
                objectFit="cover"
                objectPosition="center"
                loading="lazy"
                className="group cursor-pointer"
              />
              {!isCollapsed && "Home"}
            </Link>
          </li>
          <li className="w-full">
            <Link
              href="#"
              className="w-full flex items-center gap-4 p-4 text-p2 font-normal hover:bg-lightGrey active:bg-lightGrey rounded-2xl"
            >
              <NextImage
                src="/icons/templates.svg"
                alt="templates-icon"
                width={23}
                height={23}
                objectFit="cover"
                objectPosition="center"
                loading="lazy"
                className="group cursor-pointer"
              />
              {!isCollapsed && "Templates"}
            </Link>
          </li>
          <li className="w-full">
            <Link
              href="#"
              className="w-full flex items-center gap-4 p-4 text-p2 font-normal hover:bg-lightGrey active:bg-lightGrey rounded-2xl"
            >
              <NextImage
                src="/icons/profile.svg"
                alt="profile-icon"
                width={23}
                height={23}
                objectFit="cover"
                objectPosition="center"
                loading="lazy"
                className="group cursor-pointer"
              />
              {!isCollapsed && "Profile"}
            </Link>
          </li>
          <li className="w-full">
            <Link
              href="#"
              className="w-full flex items-center gap-4 p-4 text-p2 font-normal hover:bg-lightGrey active:bg-lightGrey rounded-2xl"
            >
              <NextImage
                src="/icons/more.svg"
                alt="more-icon"
                width={23}
                height={23}
                objectFit="cover"
                objectPosition="center"
                loading="lazy"
                className="group cursor-pointer"
              />
              {!isCollapsed && "More"}
            </Link>
          </li>
          <li className="w-full">
            <Link href="/" className="px-[2.8125rem] flex">
              {/* <CustomButton
                text="Go premium"
                iconSrc="/premium.svg"
                altText="premium-icon"
                color="warning"
                otherClasses="!gap-2 py-[.4375rem] pl-[.6875rem] pr-4 !text-p1 text-darkCharcoal font-normal hover:font-medium active:font-bold"
              /> */}
            </Link>
          </li>
        </ul>
      </div>
      <ul className={`w-full flex flex-col items-start`}>
        <li className="w-full">
          <Link
            href="/"
            className="w-full flex items-center gap-4 p-4 text-p2 font-normal hover:bg-lightGrey active:bg-lightGrey rounded-2xl"
          >
            <NextImage
              src="/icons/logout.svg"
              alt="logout-logo"
              width={23}
              height={23}
              objectFit="cover"
              objectPosition="center"
              loading="lazy"
              className="group cursor-pointer"
            />
            {!isCollapsed && "Logout"}
          </Link>
        </li>
        <li className="w-full flex items-center justify-between gap-[1.375rem] hover:bg-lightGrey cursor-pointer">
          <div className="w-full flex items-center gap-4 p-4 text-p2 font-normal">
            <NextImage
              src="/icons/light-mode.svg"
              alt="light-mode-logo"
              width={23}
              height={23}
              objectFit="cover"
              objectPosition="center"
              loading="lazy"
              className="group cursor-pointer"
            />
            {!isCollapsed && "Light mode"}
          </div>
          {/* <div className=""></div> */}
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
