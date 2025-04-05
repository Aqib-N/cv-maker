import { Select, SelectItem, Avatar } from "@heroui/react";

interface Item {
  id: number;
  name: string;
  avatar?: string;
  description?: string;
}

interface SingleSelectDropdownProps {
  items: Item[];
  label: string;
  variant?: "bordered" | "flat" | "faded";
  otherClasses?: string;
}

export default function SingleSelectDropdown({
  items,
  label,
  variant = "bordered",
  otherClasses,
}: SingleSelectDropdownProps) {
  return (
    <Select
      className={otherClasses}
      label={label}
      variant={variant}
      items={items}
      renderValue={(selectedItems) =>
        selectedItems.map((item) => {
          if (!item.data) return null;
          return (
            <div key={item.key} className="flex items-center gap-2">
              {item.data.avatar && (
                <Avatar
                  alt={item.data.name}
                  className="flex-shrink-0"
                  size="sm"
                  src={item.data.avatar}
                />
              )}
              <div className="flex flex-col">
                <span>{item.data.name}</span>
                {item.data.description && (
                  <span className="text-default-500 text-tiny">
                    {item.data.description}
                  </span>
                )}
              </div>
            </div>
          );
        })
      }
    >
      {(item) => (
        <SelectItem key={item.id} textValue={item.name}>
          <div className="flex gap-2 items-center">
            {item.avatar && (
              <Avatar
                alt={item.name}
                className="flex-shrink-0"
                size="sm"
                src={item.avatar}
              />
            )}
            <div className="flex flex-col">
              <span className="text-small">{item.name}</span>
              {item.description && (
                <span className="text-tiny text-default-400">
                  {item.description}
                </span>
              )}
            </div>
          </div>
        </SelectItem>
      )}
    </Select>
  );
}
