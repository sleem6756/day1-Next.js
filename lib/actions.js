"use server";

import { redirect } from "next/navigation";
import { dbConnect } from "./dbConnect";
import { Todo } from "./models/todos";
import { revalidatePath } from "next/cache";

// Global in-memory storage for development
if (!global.todos) {
  global.todos = [];
}

// Create Todo
export async function addTodo(formData) {
  const title = formData.get("title");
  const body = formData.get("body");

  try {
    // For development without MongoDB, use in-memory storage
    if (!process.env.DB_URL || process.env.DB_URL === 'mongodb://localhost:27017') {
      const newTodo = {
        _id: Date.now().toString(),
        title,
        body,
        isDone: false,
        createdAt: new Date(),
      };
      global.todos.push(newTodo);
      if (process.env.NODE_ENV === "development") {
          console.log("Todo added to memory successfully");
      }
      revalidatePath("/todo");
      redirect("/todo");
      return;
    }

    await dbConnect();
    await Todo.create({ title, body, isDone: false });
    revalidatePath("/todo");
    redirect("/todo");
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
        console.log("Error adding todo:", error);
    }
  }
}

// Toggle done
export async function toggleTodo(id, isDone) {
  try {
    // For development without MongoDB, use in-memory storage
    if (!process.env.DB_URL || process.env.DB_URL === 'mongodb://localhost:27017') {
      const todoIndex = global.todos.findIndex(todo => todo._id === id);
      if (todoIndex !== -1) {
        global.todos[todoIndex].isDone = isDone;
        revalidatePath("/todo");
      }
      return;
    }

    await dbConnect();
    await Todo.findByIdAndUpdate(id, { isDone });
    revalidatePath("/todo");
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
        console.log("Error toggling todo:", error);
    }
  }
}

// Update todo
export async function updateTodo(id, data) {
  try {
    // For development without MongoDB, use in-memory storage
    if (!process.env.DB_URL || process.env.DB_URL === 'mongodb://localhost:27017') {
      const todoIndex = global.todos.findIndex(todo => todo._id === id);
      if (todoIndex !== -1) {
        global.todos[todoIndex] = { ...global.todos[todoIndex], ...data };
        revalidatePath("/todo");
      }
      return;
    }

    await dbConnect();
    await Todo.findByIdAndUpdate(id, data);
    revalidatePath("/todo");
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
        console.log("Error updating todo:", error);
    }
  }
}

// Delete todo
export async function deleteTodo(id) {
  try {
    // For development without MongoDB, use in-memory storage
    if (!process.env.DB_URL || process.env.DB_URL === 'mongodb://localhost:27017') {
      global.todos = global.todos.filter(todo => todo._id !== id);
      revalidatePath("/todo");
      return;
    }

    await dbConnect();
    await Todo.findByIdAndDelete(id);
    revalidatePath("/todo");
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
        console.log("Error deleting todo:", error);
    }
  }
}