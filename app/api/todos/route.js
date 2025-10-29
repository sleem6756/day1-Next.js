import { dbConnect } from "@/lib/dbConnect";
import { Todo } from "@/lib/models/todos";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// Global in-memory storage for development
if (!global.todos) {
  global.todos = [];
}

export async function GET() {
    try {
        // For development without MongoDB, use in-memory storage
        if (!process.env.DB_URL || process.env.DB_URL === 'mongodb://localhost:27017') {
            return NextResponse.json({message:"Data GET Successfully",todos: global.todos},{status:200})
        }

        await dbConnect();
        const todos= await Todo.find()
        return NextResponse.json({message:"Data GET Successfully",todos},{status:200})

    } catch (err) {
        return NextResponse.json({message:"Data GET Failed", error: err.message},{status:500})
    }
}
