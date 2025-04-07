import { Button } from "@heroui/react";
import Image from "next/image";

interface CustomIconStartProps {
  imgSrc: string;
}

export const CustomIconStart: React.FC<CustomIconStartProps> = ({ imgSrc }) => {
  return (
    <Image
      src={imgSrc}
      alt="btn-icon"
      width={24}
      height={24}
      className="w-auto h-auto object-cover"
    />
  );
};

interface CustomIconEndProps {
  imgSrc: string;
}

export const CustomIconEnd: React.FC<CustomIconEndProps> = ({ imgSrc }) => {
  return (
    <Image
      src={imgSrc}
      alt="btn-icon"
      width={24}
      height={24}
      className="w-auto h-auto object-cover"
    />
  );
};

interface CustomButtonProps {
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  label: string;
  leftIcon?: string;
  rightIcon?: string;
  onPress?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  color = "default",
  label,
  leftIcon,
  rightIcon,
  onPress,
}) => {
  return (
    <Button
      color={color}
      startContent={leftIcon && <CustomIconStart imgSrc={leftIcon} />}
      endContent={rightIcon && <CustomIconEnd imgSrc={rightIcon} />}
      onClick={onPress}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
