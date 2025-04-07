"use client";
import Link from "next/link";
import NextImage from "../Image/Image";
// import CustomButton from "../Button/Button";

const Sidebar = () => {
  return (
    <aside className="h-auto w-full max-w-[20rem] bg-royalBlue text-white flex flex-col">
      {/* Logo */}
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
        <NextImage
          src="/information.svg"
          alt="site-logo"
          width={23}
          height={23}
          objectFit="cover"
          objectPosition="center"
          loading="lazy"
          priority={true}
          className="group cursor-pointer"
        />
      </div>
      {/* Navigation */}
      <nav className="flex-1">
        <ul>
          <li>
            <Link
              href="/"
              className="flex items-center gap-[1.1875rem] py-[1.125rem] px-[2.8125rem] text-p1 font-normal hover:font-medium active:font-bold hover:bg-slateBlue active:bg-slateBlue"
            >
              <NextImage
                src="/home.svg"
                alt="site-logo"
                width={23}
                height={23}
                objectFit="cover"
                objectPosition="center"
                loading="lazy"
                priority={true}
                className="group cursor-pointer"
              />
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex items-center gap-[1.1875rem] py-[1.125rem] px-[2.8125rem] text-p1 font-normal hover:font-medium active:font-bold hover:bg-slateBlue active:bg-slateBlue"
            >
              <NextImage
                src="/templates.svg"
                alt="site-logo"
                width={23}
                height={23}
                objectFit="cover"
                objectPosition="center"
                loading="lazy"
                priority={true}
                className="group cursor-pointer"
              />
              Templates
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex items-center gap-[1.1875rem] py-[1.125rem] px-[2.8125rem] text-p1 font-normal hover:font-medium active:font-bold hover:bg-slateBlue active:bg-slateBlue"
            >
              <NextImage
                src="/profile.svg"
                alt="site-logo"
                width={23}
                height={23}
                objectFit="cover"
                objectPosition="center"
                loading="lazy"
                priority={true}
                className="group cursor-pointer"
              />
              Profile
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex items-center gap-[1.1875rem] py-[1.125rem] px-[2.8125rem] text-p1 font-normal hover:font-medium active:font-bold hover:bg-slateBlue active:bg-slateBlue"
            >
              <NextImage
                src="/more.svg"
                alt="site-logo"
                width={23}
                height={23}
                objectFit="cover"
                objectPosition="center"
                loading="lazy"
                priority={true}
                className="group cursor-pointer"
              />
              More
            </Link>
          </li>
          <li>
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
          <li>
            <Link
              href="/"
              className="flex items-center gap-[1.1875rem] py-[1.125rem] px-[2.8125rem] text-p1 font-normal hover:font-medium active:font-bold hover:bg-slateBlue active:bg-slateBlue"
            >
              <NextImage
                src="/logout.svg"
                alt="site-logo"
                width={23}
                height={23}
                objectFit="cover"
                objectPosition="center"
                loading="lazy"
                priority={true}
                className="group cursor-pointer"
              />
              More
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
