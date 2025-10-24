import Link from 'next/link'
import React from 'react'

export default function NavBar() {
    return (
        <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-300 bg-white dark:bg-gray-900 shadow-md transition-all duration-300">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center px-4 py-3 lg:flex-nowrap lg:px-8">
                <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-md p-2 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 transition lg:hidden"
                    type="button"
                    data-twe-collapse-init=""
                    data-twe-target="#navbarLinks"
                    aria-controls="navbarLinks"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                <div
                    className="hidden w-full flex-col items-center gap-6 lg:flex lg:w-auto lg:flex-row lg:gap-x-10"
                    id="navbarLinks"
                    data-twe-collapse-item=""
                >
                    <Link
                        href="/"
                        className="text-base font-medium text-gray-900 dark:text-gray-100 transition hover:text-gray-600 dark:hover:text-gray-300"
                    >
                        Home
                    </Link>
                    <Link
                        href="/product"
                        className="text-base font-medium text-blue-900 dark:text-blue-100 transition hover:text-blue-600 dark:hover:text-blue-300"
                    >
                        Product
                    </Link>
                    <Link
                        href="/contact"
                        className="text-base font-medium text-blue-900 dark:text-blue-100 transition hover:text-blue-600 dark:hover:text-blue-300"
                    >
                        Contact Us
                    </Link>
                    <Link
                        href="/login"
                        className="text-base font-medium text-blue-900 dark:text-blue-100 transition hover:text-blue-600 dark:hover:text-blue-300"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </nav>




    )
}
