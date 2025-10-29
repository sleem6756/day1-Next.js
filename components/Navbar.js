import Link from 'next/link'
import React from 'react'

export default function NavBar() {

    return (
        <nav className="fixed top-0 left-0 z-50 w-full border-b border-slate-700 bg-slate-900/95 backdrop-blur-md shadow-lg">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center px-4 py-4 lg:flex-nowrap lg:px-8">
                <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-md p-2 text-slate-300 hover:bg-slate-800 transition lg:hidden"
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
                    className="hidden w-full flex-col items-center gap-6 lg:flex lg:w-auto lg:flex-row lg:gap-x-8"
                    id="navbarLinks"
                    data-twe-collapse-item=""
                >
                    <Link
                        href="/"
                        className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors duration-200"
                    >
                        Home
                    </Link>
                    <Link
                        href="/product"
                        className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors duration-200"
                    >
                        Products
                    </Link>
                    <Link
                        href="/user"
                        className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors duration-200"
                    >
                        Users
                    </Link>
                     <Link
                       href="/todo"
                       className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors duration-200"
                     >
                       Todos
                     </Link>
                    <Link
                        href="/contact"
                        className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors duration-200"
                    >
                        Contact
                    </Link>
                    <Link
                        href="/login"
                        className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors duration-200"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    )
}
