import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky z-10 bg-white isolate top-0 flex justify-between h-16 items-center px-4 border-b border-gray-200">
        <h2 className="font-serif text-2xl">Britt Lee Allen</h2>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex text-gray-700 gap-8 items-center">
          <a href="" className="hover:text-black">Featured</a>
          <a href="" className="hover:text-black">Works</a>
          <a href="" className="hover:text-black">Excerpts</a>
          <a href="" className="hover:text-black">About</a>
          <a href="" className="bg-black px-4 py-2 rounded-full text-white">Newsletter</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Mobile Flyout Menu */}
      <div
        className={`fixed inset-0 bg-black/30 z-50 transition-opacity ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      >
        <div
          className={`fixed right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-end p-4">
            <button
              className="p-2"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col px-4 gap-4">
            <a href="" className="text-gray-700 hover:text-black py-2 border-b border-gray-100">Featured</a>
            <a href="" className="text-gray-700 hover:text-black py-2 border-b border-gray-100">Works</a>
            <a href="" className="text-gray-700 hover:text-black py-2 border-b border-gray-100">Excerpts</a>
            <a href="" className="text-gray-700 hover:text-black py-2 border-b border-gray-100">About</a>
            <a href="" className="bg-black px-4 py-2 rounded-full text-white text-center mt-4">
              Newsletter
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}