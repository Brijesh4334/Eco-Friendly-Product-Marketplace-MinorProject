'use client'
import Link from 'next/link'
import React, { useState } from 'react'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('authenticated')))

  return (
    <div class="bg-green-700">
      <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="relative flex items-center justify-between">
          <div class="flex items-center">
            <a
              href="/"
              aria-label="Company"
              title="Company"
              class="inline-flex items-center mr-8"
            ><img
                className="object-cover  h-20 rounded shadow-lg md: h-20"
                src="/logo.png" alt="" />



              <span class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                GO GREEN
              </span>
            </a>
            <ul class="flex items-center hidden space-x-8 lg:flex">
              <li>
                <Link
                  href="/search"
                  aria-label="Our product"
                  title="Our product"
                  class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Search Products
                </Link>
              </li>
              <li>
                <Link
                  href="/orders"
                  aria-label="Our product"
                  title="Our product"
                  class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Orders
                </Link>
              </li>

              <li>
                <Link
                  href="/aboutus"
                  aria-label="About us"
                  title="About us"
                  class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  About us
                </Link>
              </li>
            </ul>
          </div>
          {
            currentUser !== null ? (
              <button 
              className='text-white'
              onClick={() => {
                localStorage.removeItem('authenticated');
                window.location = '/login';
              }}>Logout</button>
            ) : (
              <ul class="flex items-center hidden space-x-8 lg:flex">
                <li>
                  <Link
                    href="/login"
                    aria-label="login"
                    title="login"
                    class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    login
                  </Link>
                </li>
                <li>
                  <Link
                    href="/signup"
                    class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    aria-label="Sign up"
                    title="Sign up"
                  >
                    Sign up
                  </Link>
                </li>
              </ul>
            )}
          <div class="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div class="absolute top-0 left-0 w-full">
                <div class="p-5 bg-white border rounded shadow-sm">
                  <div class="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        class="inline-flex items-center"
                      >
                        <svg
                          class="w-8 text-deep-purple-accent-400"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Go Green
                        </span>

                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul class="space-y-4">
                      <li>
                        <a
                          href="/"
                          aria-label="Our product"
                          title="Our product"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Product
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="Our product"
                          title="Our product"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Features
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="Product pricing"
                          title="Product pricing"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Pricing
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="About us"
                          title="About us"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          About us
                        </a>
                      </li>

                      {
                        currentUser !== null ? (
                          <button 
                          className='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"'
                          onClick={() => {
                            localStorage.removeItem('authenticated');
                            window.location = '/login';
                          }}>Logout</button>
                        ) : (
                          <>

                            <li>
                              <Link
                                href="/login"
                                aria-label="login"
                                title="login"
                                class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              >
                                login
                              </Link>
                            </li>
                            <li>
                              <a
                                href="/"
                                class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                aria-label="Sign up"
                                title="Sign up"
                              >
                                Sign up
                              </a>
                            </li>
                          </>)
                      }
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar