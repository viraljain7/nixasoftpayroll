import { useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { MegaMenu } from "@/components/MegaMenu";
import { navigation } from "@/lib/navData";
import { MoveRightIcon } from "@/components/MoveRightIcon";

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* Mobile toggle */}
              <div className="flex sm:hidden">
                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100">
                  {open ? (
                    <XMarkIcon className="h-6 w-6" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" />
                  )}
                </DisclosureButton>
              </div>

              {/* Logo */}
              <div className="flex items-center">
                <a href="/">
                  <img
                    src="https://files.readme.io/e216c9fb142791d5fa09241eb2175e580b0421d964ba63e12a1efa2ec47c7ab7-small-nixasoft.png"
                    alt="Logo"
                    className="h-12 w-auto"
                  />
                </a>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden sm:flex sm:items-center sm:gap-2">
                {navigation.map((item) =>
                  item.mega ? (
                    <MegaMenu key={item.name} item={item} />
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      className="px-3 py-2 text-sm font-semibold text-gray-800 rounded-md hover:bg-gray-100 hover:text-black transition cursor-pointer"
                    >
                      {item.name}
                    </a>
                  ),
                )}
              </div>

              {/* Right CTA */}
              <div className="hidden sm:flex items-center gap-3">
              

                <button className="bg-blue-500 hover:bg-blue-700 transition px-4 py-1 font-bold text-white rounded-xs  flex items-center gap-1 cursor-pointer">
                  Log in <MoveRightIcon className="size-4" />
                </button>

              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <DisclosurePanel className="sm:hidden bg-white border-t border-gray-200">
            <div className="space-y-1 px-4 py-4">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href || "#"}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100"
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
