import { MegaMenu } from "@/components/MegaMenu";
import { navigation } from "@/lib/navData";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,

} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";




/* -------------------- NAVBAR -------------------- */
export default function Navbar() {
  return (
<Disclosure
  as="nav"
  className="relative bg-white backdrop-blur-2xl after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-gray-200"
>
  <div className="mx-auto max-w-7xl  relative">
    <div className="relative flex h-16 items-center justify-between">

      {/* Mobile button */}
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <DisclosureButton className="group inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100">
          <Bars3Icon className="block size-6 group-data-open:hidden" />
          <XMarkIcon className="hidden size-6 group-data-open:block" />
        </DisclosureButton>
      </div>

      {/* Logo + Desktop Nav */}
      <div className="flex flex-1 items-center justify-center sm:justify-start">
        <div className="flex shrink-0 items-center  rounded-md  py-1">
          <img
            src="https://files.readme.io/e216c9fb142791d5fa09241eb2175e580b0421d964ba63e12a1efa2ec47c7ab7-small-nixasoft.png"
            className="h-10 w-36 mb-2"
            alt="Logo"
          />
        </div>

        <div className="hidden sm:ml-6 sm:flex sm:space-x-2">
    
        </div>
      </div>

      {/* Right */}
      <div className="absolute inset-y-0 right-0  items-center gap-3 pr-2 sm:static sm:pr-0 hidden sm:ml-6 sm:flex sm:space-x-2">
          {navigation.map((item) =>
            item.mega ? (
              <MegaMenu key={item.name} item={item} />
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="
                  rounded-md px-3 py-2 text-sm font-bold 
                  text-gray-800
                  hover:bg-gray-100 hover:text-black 
                "
              >
                {item.name}
              </a>
            )
          )}
      </div>

    </div>
  </div>

  {/* Mobile Menu */}
  <DisclosurePanel className="sm:hidden bg-white border-t border-gray-200">
    <div className="space-y-1 px-2 pb-3 pt-2">
      {navigation.map((item) => (
        <DisclosureButton
          key={item.name}
          as="a"
          href={item.href || "#"}
          className="
            block rounded-md px-3 py-2 text-base font-medium
            text-gray-800
            hover:bg-gray-100 hover:text-black
          "
        >
          {item.name}
        </DisclosureButton>
      ))}
    </div>
  </DisclosurePanel>
</Disclosure>

  );
}
