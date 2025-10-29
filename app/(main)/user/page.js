import React from "react";

async function getUsers() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_MOCKAPI}/users`, {
    next: { revalidate: 10 }
  });
  const data = await res.json();
  return data.users;
}

export default async function User() {
  const users = await getUsers();

  return (
    <div className="py-20 min-h-screen bg-slate-900 p-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Our Users</h1>
          <p className="text-slate-400 text-lg">Meet our community members</p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 flex flex-col items-center text-center shadow-lg hover:bg-slate-800/70 transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">
                  {user.firstName?.[0]}{user.lastName?.[0]}
                </span>
              </div>

              <h2 className="text-lg font-semibold text-white mb-1">
                {user.firstName} {user.lastName}
              </h2>

              <p className="text-slate-400 text-sm mb-2">
                @{user.username}
              </p>

              <p className="text-emerald-400 text-xs font-medium">
                {user.company?.title || 'User'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}