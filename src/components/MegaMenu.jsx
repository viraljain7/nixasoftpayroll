import { Menu, MenuButton, MenuItems } from "@headlessui/react";

export function MegaMenu({ item }) {
  return (
    <Menu as="div">
      {/* Trigger */}
      <MenuButton
        className="
           px-3 py-2 text-sm font-semibold
          text-gray-800
          rounded-sm
          border-2 border-transparent
         hover:text-blue-900
         hover:border-blue-900
         hover:font-bold
         hover:cursor-pointer
         transition-colors duration-200"

      >
        {item.name}
      </MenuButton>

      {/* BOXED MEGA MENU (PARENT WIDTH ONLY) */}
      <MenuItems
        className="
          absolute
    left-0
    top-full
    z-50
    mt-3
    w-full
          
        "
      >
      <div className="rounded-xl bg-white shadow-xl border border-gray-200 z-50" 
      >
  <div className="px-8 py-8">
  <div className="grid gap-12 grid-cols-[repeat(auto-fit,minmax(260px,1fr))] auto-rows-min grid-flow-dense ">
  {item.columns.map((column, colIdx) => (
    <div key={colIdx} className="space-y-10">
      {column.sections.map((section) => (
        <div key={section.title}>
          <p className="mb-4 text-xs font-semibold text-gray-500">
            {section.title}
          </p>

          <ul className="space-y-5">
            {section.items.map((link) => (
              <li key={link.title} className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                  {link.icon}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 flex items-center gap-2">
                    {link.title}
                    {link.badge && (
                      <span className="text-xs bg-green-100 text-green-600 px-2 rounded-full">
                        {link.badge}
                      </span>
                    )}
                  </p>
                  <p className="text-sm text-gray-600">{link.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  ))}
</div>

  </div>
</div>

      </MenuItems>
    </Menu>
  );
}
