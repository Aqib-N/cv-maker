"use client";
import CustomButton from "../components/Button/Button";

export default function Home() {
  const handlePress = () => {
    alert("");
  };
  return (
    <div className="h-full min-h-screen !bg-lightPurple">
      <CustomButton
        color="primary"
        label="Press Me"
        leftIcon="/icons/premium.svg"
        onClick={handlePress}
        iconSize={20}
      />
    </div>
  );
}
