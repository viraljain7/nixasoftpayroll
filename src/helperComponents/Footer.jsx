import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { FOOTER_COLUMNS } from "@/lib/navData";

export default function Footer() {
  return (
    <>
<footer className="bg-white border-t border-gray-200">
  <div className="mx-auto max-w-7xl  py-4">

    {/* Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-2">

      {/* Brand */}
      <div className="lg:col-span-2">
        <img
          src="https://files.readme.io/e216c9fb142791d5fa09241eb2175e580b0421d964ba63e12a1efa2ec47c7ab7-small-nixasoft.png"
          alt="Nixasoft"
          className="h-10 w-36 mb-2"
        />
        <p className="text-xl text-gray-600 leading-tight m-3">
          Nixasoft helps businesses accept, process and disburse payments with a
          complete financial infrastructure platform.
        </p>
      </div>

       {FOOTER_COLUMNS.map((column, i) => (
    <div key={i} className="space-y-2 m-3">
      {column.sections.map((section) => (
        <div key={section.title}>
          <h4 className="text-lg font-semibold text-gray-500 uppercase mb-1">
            {section.title}
          </h4>
          <ul className="space-y-0">
            {section.links.map((link) => (
              <li key={link}>
                <a className="text-md leading-none text-blue-600 hover:underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  ))}
    </div>

    {/* Bottom bar */}
    <div className="mt-3 pt-2 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-2">
      <p className="text-xl text-gray-600">
        © 2026 Nixasoft. All rights reserved.
      </p>

    </div>

  </div>
</footer>



      {/* Hover Effect Branding */}
      {/* <div className="bg-white/40 flex items-center justify-center "> */}
       <div className="bg-background relative h-125 w-full overflow-hidden rounded-lg border">
       <FlickeringGrid
        className="absolute inset-0 z-0 mask-[radial-gradient(450px_circle_at_center,white,transparent)]"
        squareSize={10}
        gridGap={10}
        color="#60A5FA"
        maxOpacity={0.9}
        flickerChance={0.2}
        height={400}
      />
        <TextHoverEffect text="NIXASOFT" className="bg-black"/>
      </div>
    </>
  );
}
