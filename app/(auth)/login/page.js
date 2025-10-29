import React from "react";

function Login() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-6 py-12 lg:px-8">
      {/* Glass card */}
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl border border-gray-300">
        <form action="/" method="POST" className="mt-8 space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-2 block w-full rounded-lg bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-500 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none sm:text-sm border border-gray-300"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="mt-2 block w-full rounded-lg bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-500 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none sm:text-sm border border-gray-300"
              placeholder="••••••••"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 focus:outline-none transition"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
