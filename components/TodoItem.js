"use client";

import React, { useState, useTransition } from "react";
import { toggleTodo, updateTodo, deleteTodo } from "@/lib/actions";

export default function TodoItem({ todo }) {
  const [isPending, startTransition] = useTransition();
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [body, setBody] = useState(todo.body || "");

  const toggleData = () => {
    startTransition(async () => {
      await toggleTodo(todo._id, !todo.isDone);
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    startTransition(async () => {
      await updateTodo(todo._id, { title, body });
      setShowModal(false);
    });
  };

  const handleDelete = () => {
    startTransition(async () => {
      await deleteTodo(todo._id);
    });
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 p-6 rounded-xl w-full max-w-md shadow-2xl border border-slate-700">
            <h2 className="text-xl font-semibold mb-4 text-white">Edit Todo</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">
                  Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="w-full rounded-lg bg-slate-700 border border-slate-600 px-4 py-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">
                  Description
                </label>
                <textarea
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  rows={3}
                  className="w-full rounded-lg bg-slate-700 border border-slate-600 px-4 py-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none resize-none"
                />
              </div>
              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-lg bg-slate-600 text-slate-300 hover:bg-slate-500 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isPending}
                  className="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 disabled:opacity-50 transition-colors"
                >
                  {isPending ? "Updating..." : "Update"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <li className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg border border-slate-600 hover:bg-slate-700/50 transition-colors">
        <div className="flex items-start gap-4">
          <input
            type="checkbox"
            checked={todo.isDone}
            onChange={toggleData}
            className="w-5 h-5 mt-1 accent-emerald-500"
            disabled={isPending}
          />
          <div className="flex-1">
            <h3
              className={`text-lg font-medium ${
                todo.isDone ? "line-through text-slate-400" : "text-white"
              }`}
            >
              {todo.title}
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              {todo.body || "No description provided."}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowModal(true)}
            className="text-sm px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="text-sm px-3 py-2 rounded-lg bg-red-600 text-white hover:bg-red-500 transition-colors"
          >
            Delete
          </button>
        </div>
      </li>
    </>
  );
}