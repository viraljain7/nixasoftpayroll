import { Menu, MenuButton, MenuItems } from "@headlessui/react";

export function MegaMenu({ item }) {
  return (
    <Menu as="div" className="relative ml-10">
      {/* Trigger */}
      <MenuButton
        className="px-3 py-2 text-sm font-semibold text-gray-800 rounded-md border border-transparent hover:text-blue-900 hover:border-blue-900 transition"
      >
        {item.name}
      </MenuButton>

      {/* Dropdown */}
      <MenuItems
        className="
          absolute left-1/2 top-full mt-4 w-screen max-w-6xl -translate-x-1/2
          z-9999 
        "
      >
        <div className="rounded-xl bg-white shadow-2xl border border-gray-200 ml-40">
          <div className="px-10 py-8 ml-16">
            <div className="grid gap-12 grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
              {item.columns.map((column, colIdx) => (
                <div key={colIdx} className="space-y-8">
                  {column.sections.map((section) => (
                    <div key={section.title}>
                      <p className="mb-4 text-xs font-semibold text-gray-500 uppercase">
                        {section.title}
                      </p>

                      <ul className="space-y-5">
                        {section.items.map((link) => (
                        <li key={link.title} className="flex gap-4">
  <div className="h-10 w-10 rounded-full bg-indigo-100/25 flex items-center justify-center">
    {link.icon && <link.icon className="h-5 w-5 text-black" />}
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
