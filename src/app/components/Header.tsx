'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    // Close the menu when a link is clicked
    setIsOpen(false);
  };

  return (
    <header className="bg-gray-200 shadow-md">
      <div className="max-w-9xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left side: Logo and Title */}
        <div className="flex items-center gap-3">
          <img src="https://cdn.worldvectorlogo.com/logos/svg-2.svg" alt="Logo" className="w-12" />
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-700">Kan-Ban Board</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/dashboard" className="nav-link">Dashboard</Link>
          <Link href="/dashboard/users" className="nav-link">Users</Link>
          <Link href="/dashboard/settings" className="nav-link">Settings</Link>
          <Link href="mailto:abc@gmail.com" className="nav-link">Email Now</Link>
        </nav>

        {/* Hamburger Button - Mobile Only */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative group"
          aria-label="Toggle menu"
        >
          <div
            className={`h-1 w-6 bg-gray-700 rounded transition-transform duration-300 ease-in-out mb-1 ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></div>
          <div
            className={`h-1 w-6 bg-gray-700 rounded transition-opacity duration-300 ease-in-out mb-1 ${
              isOpen ? 'opacity-0' : ''
            }`}
          ></div>
          <div
            className={`h-1 w-6 bg-gray-700 rounded transition-transform duration-300 ease-in-out ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col gap-3">
            <Link href="/" className="nav-link" onClick={handleLinkClick}>
              Home
            </Link>
            <Link href="/dashboard" className="nav-link" onClick={handleLinkClick}>
              Dashboard
            </Link>
            <Link href="/dashboard/users" className="nav-link" onClick={handleLinkClick}>
              Users
            </Link>
            <Link href="/dashboard/settings" className="nav-link" onClick={handleLinkClick}>
              Settings
            </Link>
            <Link href="mailto:abc@gmail.com" className="nav-link" onClick={handleLinkClick}>
              Email Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}