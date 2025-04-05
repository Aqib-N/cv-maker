"use client";
import { Select, SelectItem } from "@heroui/react";

const users = [
  {
    id: 1,
    lang: "Eng",
  },
  {
    id: 2,
    lang: "Urdu",
  },
  {
    id: 3,
    lang: "Korean",
  },
  {
    id: 4,
    lang: "Arabic",
  },
];
const Header = () => {
  return (
    <header className="bg-white py-10 px-[1.9375rem] flex justify-between items-center">
      <h1 className="text-[1.875rem] leading-normal font-semibold text-black capitalize">
        home
      </h1>
      <div className="relative">
        <Select
          className="w-[18.75rem] text-p2 !leading-normal font-semibold"
          items={users}
          placeholder="Select a user"
        >
          {(user) => (
            <SelectItem
              key={user?.id}
              textValue={user?.lang}
              className="text-p2 !leading-normal font-semibold"
            >
              <span className="text-small">{user?.lang}</span>
            </SelectItem>
          )}
        </Select>
      </div>
    </header>
  );
};

export default Header;
