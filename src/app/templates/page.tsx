// src/app/templates/page.js
"use client";
import Link from "next/link";
import NextImage from "../../components/NextImage/NextImage";

const templatesData = [
  { id: "1", template: "/images/template-1.png" },
  { id: "2", template: "/images/template-2.png" },
  { id: "3", template: "/images/template-3.png" },
  { id: "4", template: "/images/template-4.png" },
  { id: "5", template: "/images/template-5.png" },
  { id: "6", template: "/images/template-6.png" },
];

const Templates = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 lg:gap-y-11 gap-x-4 p-6">
      {templatesData?.map((data) => (
        <Link
          key={data?.id}
          href={`/templates/${data?.id}`}
          className="relative w-full h-full min-h-[17.5rem] rounded-[.6188rem] block"
        >
          <NextImage
            src={data.template}
            alt={`template-${data?.id}`}
            fill
            className="object-cover rounded-[.6188rem] cursor-pointer hover:opacity-90 transition-opacity"
          />
        </Link>
      ))}
    </div>
  );
};

export default Templates;
