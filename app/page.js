import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-gray-800 to-zinc-900 px-6">
      <div className="text-center p-12 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl animate-fade-in-up">
        <h1 className="text-4xl mb-8 font-bold text-white drop-shadow-lg animate-slide-in-left">
          Welcome to{" "}
          <span className="text-emerald-400 animate-pulse-glow">
            Task Manager
          </span>
        </h1>
        <p className="text-gray-300 mb-10 text-lg max-w-md mx-auto animate-fade-in-up animation-delay-200">
          Organize your tasks efficiently with our modern todo application
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
          <Link
            href="/todo"
            className="px-8 py-3 bg-slate-700 text-white font-medium rounded-lg shadow-lg hover:bg-slate-600 hover:shadow-xl transition-all duration-200 hover:scale-105 transform"
          >
            Manage Todos
          </Link>
        </div>
      </div>
    </div>
  );
}
