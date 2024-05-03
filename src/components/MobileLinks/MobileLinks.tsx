import { Tab } from "@headlessui/react";
import clsx from "clsx";
import { Fragment } from "react";

export type MobileLinksProps = {
  categories?: {
    name: string;
    featured: {
      name: string;
      href: string;
      imageSrc: string;
      imageAlt: string;
    }[];
  }[];
  pages?: { name: string; href: string }[];
};

export const MobileLinks: React.FC<MobileLinksProps> = ({
  categories,
  pages,
}) => {
  return (
    <>
      <Tab.Group as="div" className="mt-2">
        <div className="border-b border-gray-200">
          <Tab.List className="-mb-px flex space-x-8 px-4">
            {categories?.map((category) => (
              <Tab
                key={category.name}
                className={({ selected }) =>
                  clsx(
                    selected
                      ? "border-indigo-600 text-indigo-600"
                      : "border-transparent text-gray-900",
                    "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                  )
                }
              >
                {category.name}
              </Tab>
            ))}
          </Tab.List>
        </div>
        <Tab.Panels as={Fragment}>
          {categories?.map((category) => (
            <Tab.Panel key={category.name} className="space-y-12 px-4 py-6">
              <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                {category.featured.map((item) => (
                  <div key={item.name} className="group relative">
                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                      <img
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        className="object-cover object-center"
                      />
                    </div>
                    <a
                      href={item.href}
                      className="mt-6 block text-sm font-medium text-gray-900"
                    >
                      <span
                        className="absolute inset-0 z-10"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                    <p
                      aria-hidden="true"
                      className="mt-1 text-sm text-gray-500"
                    >
                      Shop now
                    </p>
                  </div>
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </>
  );
};
