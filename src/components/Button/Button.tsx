import { Button, ButtonProps } from "@heroui/react";
import Image, { StaticImageData } from "next/image";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type ButtonColor =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

interface CustomButtonProps extends Omit<ButtonProps, "color" | "onClick"> {
  color?: ButtonColor;
  label: string;
  leftIcon?: string | StaticImageData;
  rightIcon?: string | StaticImageData;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isLoading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  iconSize?: number;
}

const CustomIcon = ({
  imgSrc,
  size = 24,
  alt = "button-icon",
}: {
  imgSrc: string | StaticImageData;
  size?: number;
  alt?: string;
}) => (
  <Image
    src={imgSrc}
    alt={alt}
    width={size}
    height={size}
    className="w-auto h-auto object-contain"
  />
);

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
  (
    {
      color = "default",
      label,
      leftIcon,
      rightIcon,
      onClick,
      isLoading = false,
      disabled = false,
      fullWidth = false,
      className = "",
      iconSize = 24,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading;

    return (
      <Button
        ref={ref}
        color={color}
        onClick={onClick}
        disabled={isDisabled}
        className={twMerge(
          "transition-all duration-200 ease-in-out",
          fullWidth && "w-full",
          className
        )}
        startContent={
          leftIcon && !isLoading ? (
            <CustomIcon imgSrc={leftIcon} size={iconSize} alt="left-icon" />
          ) : undefined
        }
        endContent={
          rightIcon && !isLoading ? (
            <CustomIcon imgSrc={rightIcon} size={iconSize} alt="right-icon" />
          ) : undefined
        }
        isLoading={isLoading}
        {...props}
      >
        {isLoading ? "Loading..." : label}
      </Button>
    );
  }
);

CustomButton.displayName = "CustomButton";

export default CustomButton;
