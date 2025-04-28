"use client";
import React from "react";
import Image from "next/image";
import CustomButton from "../Button/Button";

interface NoCVPlaceholderProps {
  title?: string;
  description?: string;
}

export const NoCVPlaceholder: React.FC<NoCVPlaceholderProps> = ({
  title = "No CV created yet!",
  description = "Click below button to create new CV",
}) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-5 md:gap-7">
      <Image
        src="/images/no-cv-placeholder.png"
        alt="no-cv-placeholder"
        width={200}
        height={195}
        className="object-cover w-[9.375rem] md:w-auto h-[9.0625rem] md:h-auto"
      />
      <div className="flex flex-col items-center gap-[.625rem] text-center">
        <h2 className="text-h2 font-semibold">{title}</h2>
        <p className="text-h6 text-semiBlack font-medium">{description}</p>
      </div>
      <CustomButton
        label="Create CV"
        color="secondary"
        leftIcon="/icons/plus-icon.svg"
        onClick={() => window.open("/templates", "_self")}
      />
    </div>
  );
};

export default NoCVPlaceholder;
