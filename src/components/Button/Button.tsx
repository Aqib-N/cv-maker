import { Button } from "@heroui/react";
import NextImage from "../Image/Image";

interface ButtonProps {
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  isDisabled?: boolean;
  otherClasses?: string;
  iconSrc?: string;
  altText?: string;
  text: string;
  onClick?: () => void;
}

export default function CustomButton({
  color,
  isDisabled,
  onClick,
  otherClasses,
  iconSrc,
  altText,
  text,
}: ButtonProps) {
  return (
    <Button
      color={color}
      isDisabled={isDisabled}
      onClick={onClick}
      className={`w-max p-[.625rem] flex items-center justify-between gap-5 rounded-xl ${otherClasses}`}
    >
      {iconSrc && (
        <NextImage
          src={iconSrc}
          alt={altText}
          width={24}
          height={24}
          objectFit="cover"
          objectPosition="center"
          loading="lazy"
          priority={true}
          className=""
        />
      )}
      <span>{text}</span>
    </Button>
  );
}
