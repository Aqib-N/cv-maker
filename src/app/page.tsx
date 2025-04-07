import CustomButton from "../components/Button/Button";

export default function Home() {
  const handlePress = () => {
    alert("");
  };
  return (
    <div className="h-full min-h-screen !bg-lightPurple">
      <CustomButton
        color="danger"
        label="Press Me"
        leftIcon="/icons/premium.svg"
        onPress={handlePress}
      />
    </div>
  );
}
