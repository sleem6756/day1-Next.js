import mongoose from 'mongoose';
const { Schema } = mongoose;

const todoSchema = new Schema({
  title: String,
  body: String,
  isDone: Boolean,

});

export const Todo = mongoose.models.Todo || mongoose.model('Todo', todoSchema);