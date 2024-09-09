'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-20 bg-transparent py-4 px-8 flex justify-between items-center">
      <div className="text-white text-2xl font-bold">
        <Link href="/">aconews</Link>
      </div>
     
      <div className="space-x-6 font-bold px-4">
        <Link href="/" className="nav-link text-white hover:text-gray-300 transition">
          Home
        </Link>
        <Link href="/world" className="nav-link text-white hover:text-gray-300 transition">
          World
        </Link>
        <Link href="/politics" className="nav-link text-white hover:text-gray-300 transition">
          Politics
        </Link>
        <Link href="/business" className="nav-link text-white hover:text-gray-300 transition">
          Business
        </Link>
        <Link href="/science" className="nav-link text-white hover:text-gray-300 transition">
          Science
        </Link>
        <Link href="/tech" className="nav-link text-white hover:text-gray-300 transition">
          Tech
        </Link>
      </div>
    </nav>
  );
}