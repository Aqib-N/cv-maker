"use client";
import React from "react";
import CustomButton from "@/components/Button/Button"; // use @ alias!

const Page = () => {
  return (
    <div className="m-6">
      {/* Buttons  */}
      <div className="flex flex-col items-start gap-10">
        <h2 className="text-h2 font-bold">Buttons</h2>
        <div className="gap-6">
          <CustomButton
            label={"Press Me"}
            leftIcon="/icons/heart.svg"
            rightIcon=""
          />
          <CustomButton
            label={"Press Me"}
            color="primary"
            leftIcon="/icons/heart.svg"
            rightIcon=""
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
