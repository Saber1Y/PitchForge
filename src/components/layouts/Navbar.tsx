"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { handleGoogleSignIn } from "@/lib/auth-actions";
import ClientUserAvatar from "@/components/ui/ClientUserAvatar";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: session } = useSession();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className="bg-pitchforge-bg border-b border-pitchforge-gold/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <Link
            href="/"
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            {/* Logo Icon */}
            <div className="relative w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10">
              <Image
                src="/layout/logo.png"
                alt="PitchForge"
                fill
                className="object-contain"
              />
            </div>

            {/* Brand Text */}
            <div className="flex items-center">
              <span className="text-lg xs:text-xl sm:text-2xl font-bold text-pitchforge-text">
                Pitch
              </span>
              <span className="text-lg xs:text-xl sm:text-2xl font-bold text-pitchforge-gold">
                Forge
              </span>
            </div>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link
              href="/browse"
              className="text-pitchforge-text hover:text-pitchforge-gold transition-colors font-medium text-sm xl:text-base"
            >
              Browse Pitches
            </Link>
            <Link
              href="/submit"
              className="text-pitchforge-text hover:text-pitchforge-gold transition-colors font-medium text-sm xl:text-base"
            >
              Submit Pitch
            </Link>
            <Link
              href="/about"
              className="text-pitchforge-text hover:text-pitchforge-gold transition-colors font-medium text-sm xl:text-base"
            >
              About
            </Link>
          </div>

          {/* Auth Section */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {session ? (
              // Authenticated User
              <div className="flex items-center space-x-3">
                {/* User Avatar & Info */}
                <ClientUserAvatar />

                {/* Sign Out Button - Desktop */}
                <button
                  onClick={() => signOut()}
                  className="hidden sm:inline-flex items-center px-3 xl:px-4 py-2 border border-pitchforge-gold text-pitchforge-gold rounded-md hover:bg-pitchforge-gold hover:text-pitchforge-bg transition-colors font-medium text-sm xl:text-base"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              // Unauthenticated User
              <>
                <div className="hidden sm:flex items-center space-x-3">
                  <form action={handleGoogleSignIn}>
                    <button
                      type="submit"
                      className="hidden lg:inline-flex items-center px-3 xl:px-4 py-2 border border-pitchforge-gold text-pitchforge-gold rounded-md hover:bg-pitchforge-gold hover:text-pitchforge-bg transition-colors font-medium text-sm xl:text-base"
                    >
                      Sign In
                    </button>
                  </form>

                  {/* Get Started Button */}
                  <Link
                    href="/auth/signup"
                    className="inline-flex items-center px-3 xl:px-4 py-2 bg-pitchforge-mint text-pitchforge-text rounded-md hover:bg-pitchforge-mint/80 transition-colors font-semibold text-sm xl:text-base"
                  >
                    <span className="hidden sm:inline">Get Started</span>
                    <span className="sm:hidden">Start</span>
                  </Link>
                </div>

                {/* Mobile Sign In Button */}
                <form action={handleGoogleSignIn} className="sm:hidden">
                  <button
                    type="submit"
                    className="inline-flex items-center px-2 py-1.5 bg-pitchforge-mint text-pitchforge-text rounded-md hover:bg-pitchforge-mint/80 transition-colors font-medium text-xs"
                  >
                    Sign In
                  </button>
                </form>
              </>
            )}

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-md text-pitchforge-text hover:text-pitchforge-gold hover:bg-pitchforge-gold/10 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden border-t border-pitchforge-gold/20 bg-pitchforge-bg transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 py-3 space-y-2">
          <Link
            href="/browse"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-3 text-pitchforge-text hover:text-pitchforge-gold hover:bg-pitchforge-gold/10 rounded-md font-medium transition-colors"
          >
            Browse Pitches
          </Link>
          <Link
            href="/submit"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-3 text-pitchforge-text hover:text-pitchforge-gold hover:bg-pitchforge-gold/10 rounded-md font-medium transition-colors"
          >
            Submit Pitch
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-3 text-pitchforge-text hover:text-pitchforge-gold hover:bg-pitchforge-gold/10 rounded-md font-medium transition-colors"
          >
            About
          </Link>

          {/* Mobile Auth Section */}
          <div className="pt-2 border-t border-pitchforge-gold/10">
            {session ? (
              <button
                onClick={() => {
                  signOut();
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-center px-3 py-3 border border-pitchforge-gold text-pitchforge-gold rounded-md hover:bg-pitchforge-gold hover:text-pitchforge-bg font-medium transition-colors"
              >
                Sign Out
              </button>
            ) : (
              <Link
                href="/auth/signup"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center px-3 py-3 bg-pitchforge-mint text-pitchforge-text rounded-md hover:bg-pitchforge-mint/80 font-semibold transition-colors"
              >
                Get Started
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
