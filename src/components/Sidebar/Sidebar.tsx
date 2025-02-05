"use client";
import { Home, Layers, User, MoreHorizontal, LogOut } from "lucide-react";
import Link from "next/link";
import NextImage from "../Image/Image";

const Sidebar = () => {
  return (
    <aside className="h-screen w-full max-w-[20rem] bg-royalBlue text-white flex flex-col">
      {/* Logo */}
      {/* <div className="flex items-center gap-2 mb-6">
        <div className="bg-white p-2 rounded">
          <img src="/logo.svg" alt="Logo" className="w-8 h-8" />
        </div>
        <span className="text-xl font-semibold">CV</span>
      </div> */}
      <div className="flex items-center gap-[4.5rem] pt-[1.875rem] pr-[2.625rem] pl-[2.8125rem] pb-[3.875rem]">
        <div className="flex items-center gap-[.8125rem]">
          <NextImage
            src="/logo.svg"
            alt="site-logo"
            width={48}
            height={48}
            objectFit="cover"
            objectPosition="center"
            loading="lazy"
            priority={true}
            className="py-[.8438rem] px-[1.1563rem] rounded-[.5rem] bg-white"
          />
          <h1 className="text-[2.1875rem] leading-normal tracking-normal">
            CV
          </h1>
        </div>
        <button></button>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <Link
              href="/"
              className="flex items-center gap-3 p-3 rounded hover:bg-purple-800"
            >
              <Home size={20} /> Home
            </Link>
          </li>
          <li>
            <Link
              href="/templates"
              className="flex items-center gap-3 p-3 rounded hover:bg-purple-800"
            >
              <Layers size={20} /> Templates
            </Link>
          </li>
          <li>
            <Link
              href="/profile"
              className="flex items-center gap-3 p-3 rounded hover:bg-purple-800"
            >
              <User size={20} /> Profile
            </Link>
          </li>
          <li>
            <Link
              href="/more"
              className="flex items-center gap-3 p-3 rounded hover:bg-purple-800"
            >
              <MoreHorizontal size={20} /> More
            </Link>
          </li>
        </ul>
      </nav>

      {/* Premium Button */}
      <div className="mt-auto">
        <button className="w-full bg-yellow-500 text-black p-3 rounded font-semibold hover:bg-yellow-600">
          Go Premium
        </button>
      </div>

      {/* Logout */}
      <div className="mt-4">
        <Link
          href="/logout"
          className="flex items-center gap-3 p-3 rounded hover:bg-red-600"
        >
          <LogOut size={20} /> Logout
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
