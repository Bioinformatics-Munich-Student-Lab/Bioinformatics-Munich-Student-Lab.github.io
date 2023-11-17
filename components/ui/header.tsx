import Link from 'next/link';
import MobileMenu from './mobile-menu';

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Branding text */}
            <Link href="/" className="block" aria-label="Bioinformatics Munich Student Lab e.V.">
              <span className="text-lg font-semibold text-purple-600">Bioinformatics Munich Student Lab e.V.</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              {/* Navigation Links */}
              <li><Link href="/" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Home</Link></li>
              <li><Link href="/about" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">About</Link></li>
              <li><Link href="/projects" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Projects</Link></li>
              <li><Link href="/contact" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Contact Us</Link></li>
              <li><Link href="/impressom" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Impress</Link></li>

            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
