import Image from "next/image";
import CustomButton from "../components/Button/Button";

export default function Page() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4 md:gap-7 p-5">
      <Image
        src="/images/no-cv-placeholder.png"
        alt="no-cv-placeholder"
        width={200}
        height={195}
        className="object-cover w-[9.375rem] md:w-auto h-[9.0625rem] md:h-auto"
      />
      <div className="flex flex-col items-center gap-[.625rem] text-center">
        <h2 className="text-h2 font-semibold">No CV created yet!</h2>
        <p className="text-h6 text-semiBlack font-medium">
          Click below button to create new CV
        </p>
      </div>
      <CustomButton
        label="Create CV"
        color="secondary"
        leftIcon="/icons/plus-icon.svg"
      />
    </div>
  );
}
