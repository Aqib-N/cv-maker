"use client";
import { useParams } from "next/navigation";
import NextImage from "../../../components/NextImage/NextImage";
import CustomButton from "../../../components/Button/Button";

const TemplateDetails = () => {
  const params = useParams();

  console.log("params: ", params);

  return (
    <div className="px-5">
      <h2 className="mb-2">TemplateDetails {params?.templates}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[3.75rem] lg:gap-[5.8125rem]">
        <div className="relative w-full h-full min-h-[30rem] md:min-h-[41.0625rem]">
          <NextImage
            src="/images/template-1.png"
            alt="template-image"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full flex flex-col items-start gap-[.875rem]">
          <CustomButton
            color="secondary"
            label="Use template"
            onClick={() => {}}
            className="!w-max rounded-full capitalize"
          />
          <CustomButton
            label="Set as default"
            onClick={() => {}}
            className="!w-max rounded-full bg-transparent border border-darkCharcoal"
          />
        </div>
      </div>
    </div>
  );
};

export default TemplateDetails;
