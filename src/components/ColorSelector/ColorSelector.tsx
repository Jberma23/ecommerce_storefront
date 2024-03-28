import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";
import { useState } from "react";

export type ColorSelectorProps = {
  colors?: any[];
};

export const ColorSelector: React.FC<ColorSelectorProps> = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState();
  return (
    <>
      <div>
        <h3 className="text-sm text-gray-600">Color</h3>

        <RadioGroup
          value={selectedColor}
          onChange={setSelectedColor}
          className="mt-2"
        >
          <RadioGroup.Label className="sr-only">
            Choose a color
          </RadioGroup.Label>
          <span className="flex items-center space-x-3">
            {colors?.map((color) => (
              <RadioGroup.Option
                key={color.name}
                value={color}
                className={({ active, checked }) =>
                  clsx(
                    color.selectedColor,
                    active && checked ? "ring ring-offset-1" : "",
                    !active && checked ? "ring-2" : "",
                    "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                  )
                }
              >
                <RadioGroup.Label as="span" className="sr-only">
                  {color.name}
                </RadioGroup.Label>
                <span
                  aria-hidden="true"
                  className={clsx(
                    color.bgColor,
                    "h-8 w-8 rounded-full border border-black border-opacity-10"
                  )}
                />
              </RadioGroup.Option>
            ))}
          </span>
        </RadioGroup>
      </div>
    </>
  );
};
