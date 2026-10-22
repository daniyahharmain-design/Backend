
import fs from "node:fs";
import path from "node:path";
import { program } from "commander";

program
  .name("todocli")
  .description("CLI to manage your daily todos")
  .version("1.0.0");

// Create the data folder and JSON file if they don't exist
const currentDir = import.meta.dirname;
const dataDir = path.join(currentDir, "data");
const filePath = path.join(dataDir, "todos.json");

fs.mkdirSync(dataDir, { recursive: true });

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, "[]", "utf8");
}

// Read todos from the JSON file
function getTodos() {
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
}

// Save todos to the JSON file
function saveTodos(todos) {
  fs.writeFileSync(
    filePath,
    JSON.stringify(todos, null, 2),
    "utf8"
  );
}

// Print todos
program
  .command("print")
  .description("Print all available todos")
  .action(() => {
    const todos = getTodos();

    if (todos.length === 0) {
      console.log("No todos found.");
      return;
    }

    todos.forEach((todo, index) => {
      console.log(`${index + 1}: ${todo}`);
    });
  });

// Add a todo
program
  .command("add")
  .description("Add a new todo")
  .argument("<newTodo>", "The new todo")
  .action((newTodo) => {
    const todos = getTodos();
    todos.push(newTodo);
    saveTodos(todos);

    console.log("Todo added successfully!");
  });

// Edit a todo by its number
program
  .command("edit")
  .description("Edit an existing todo")
  .argument("<number>", "Todo number to edit")
  .argument("<newTodo>", "New todo text")
  .action((number, newTodo) => {
    const todos = getTodos();
    const index = Number(number) - 1;

    if (
      !Number.isInteger(Number(number)) ||
      index < 0 ||
      index >= todos.length
    ) {
      console.log("Invalid todo number.");
      return;
    }

    todos[index] = newTodo;
    saveTodos(todos);

    console.log("Todo updated successfully!");
  });

// Delete a todo by its number
program
  .command("delete")
  .description("Delete an existing todo")
  .argument("<number>", "Todo number to delete")
  .action((number) => {
    const todos = getTodos();
    const index = Number(number) - 1;

    if (
      !Number.isInteger(Number(number)) ||
      index < 0 ||
      index >= todos.length
    ) {
      console.log("Invalid todo number.");
      return;
    }

    todos.splice(index, 1);
    saveTodos(todos);

    console.log("Todo deleted successfully!");
  });

program.parse(process.argv);
