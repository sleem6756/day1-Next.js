import React from "react";
import { GET } from "@/app/api/todos/route";
import TodoItem from "@/components/TodoItem";
import { addTodo } from "@/lib/actions";

export const dynamic = "force-dynamic";

export default async function Todos() {
  const res = await GET();
  const data = await res.json();
  const todos = data.todos || [];

  return (
    <main className="min-h-screen bg-slate-900 py-20 px-8">
      <div className="max-w-4xl mx-auto animate-fade-in-up">
        <div className="text-center mb-8 animate-slide-in-down">
          <h1 className="text-3xl font-bold text-white mb-2">Your Todos</h1>
          <p className="text-slate-400">Manage your tasks efficiently</p>
        </div>

        <section className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 shadow-xl mb-8 animate-slide-in-left animation-delay-200 hover:shadow-emerald-500/20 transition-all duration-300">
          <div className="text-center mb-6">
            <div className="text-4xl mb-2 animate-bounce">📝</div>
            <h2 className="text-2xl font-bold text-white">
              Add New Todo
            </h2>
            <p className="text-slate-400 text-sm mt-1">Create a new task to organize your work</p>
          </div>

          <form action={addTodo} className="space-y-6">
            <div className="animate-fade-in-up animation-delay-300">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Task Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                required
                className="w-full rounded-lg bg-slate-700 border border-slate-600 px-4 py-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none transition-all duration-300 hover:border-emerald-400"
                placeholder="Enter your task title"
              />
            </div>

            <div className="animate-fade-in-up animation-delay-400">
              <label
                htmlFor="body"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Description
              </label>
              <textarea
                id="body"
                name="body"
                rows="4"
                required
                className="w-full rounded-lg bg-slate-700 border border-slate-600 px-4 py-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none transition-all duration-300 hover:border-emerald-400 resize-none"
                placeholder="Describe your task in detail..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-emerald-500 focus:ring-2 focus:ring-emerald-400 focus:outline-none transition-all duration-300 hover:scale-105 transform animate-pulse-glow"
            >
              Add Todo
            </button>
          </form>
        </section>

        <section className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 shadow-xl animate-slide-in-right animation-delay-600 hover:shadow-slate-500/20 transition-all duration-300">
          {todos.length === 0 ? (
            <div className="text-center py-12 animate-fade-in-up animation-delay-800">
              <div className="text-6xl mb-4 animate-bounce">📝</div>
              <p className="text-slate-400 text-lg mb-4">
                No todos yet — add one above to get started!
              </p>
            </div>
          ) : (
            <ul className="space-y-3">
              {todos.map((todo, index) => (
                <div key={todo._id} className="animate-fade-in-up" style={{animationDelay: `${800 + index * 100}ms`}}>
                  <TodoItem todo={todo} />
                </div>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}