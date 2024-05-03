import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";
import { Fragment } from "react";

export type FlyoutMenuProps = {
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

export const FlyoutMenu: React.FC<FlyoutMenuProps> = ({
  categories,
  pages,
}) => {
  return (
    <>
      {/* Flyout menus */}
      <Popover.Group className="inset-x-0 bottom-0 px-4">
        <div className="flex h-full justify-center space-x-8">
          {categories?.map((category) => (
            <Popover key={category.name} className="flex">
              {({ open }) => (
                <>
                  <div className="relative flex">
                    <Popover.Button className="relative z-10 flex items-center justify-center text-sm font-medium text-white transition-colors duration-200 ease-out">
                      {category.name}
                      <span
                        className={clsx(
                          open ? "bg-white" : "",
                          "absolute inset-x-0 -bottom-px h-0.5 transition duration-200 ease-out"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                      {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                      <div
                        className="absolute inset-0 top-1/2 bg-white shadow"
                        aria-hidden="true"
                      />

                      <div className="relative bg-white">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                          <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
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
                                  className="mt-4 block font-medium text-gray-900"
                                >
                                  <span
                                    className="absolute inset-0 z-10"
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </a>
                                <p aria-hidden="true" className="mt-1">
                                  Shop now
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          ))}

          {pages?.map((page) => (
            <a
              key={page.name}
              href={page.href}
              className="flex items-center text-sm font-medium text-white"
            >
              {page.name}
            </a>
          ))}
        </div>
      </Popover.Group>{" "}
    </>
  );
};
