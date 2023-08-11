use comfy_table::Table;
use inquire::{ Text, InquireError, Select };

use serde_json;

use crate::todo::Todo;
#[derive(Debug)]
pub enum Option {
    Add,
    View,
    Mark,
    Remove,
    Edit,
    Exit,
}

pub fn get_options() -> Vec<Option> {
    vec![Option::Add, Option::View, Option::Mark, Option::Remove, Option::Edit, Option::Exit]
}

impl std::fmt::Display for Option {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        match self {
            Option::Add => write!(f, "Add a new task"),
            Option::View => write!(f, "View all tasks"),
            Option::Mark => write!(f, "Toggle todo"),
            Option::Remove => write!(f, "Remove a task"),
            Option::Edit => write!(f, "Edit a task"),
            Option::Exit => write!(f, "Exit"),
        }
    }
}

fn read_todos_from_json() -> Vec<Todo> {
    let todos = std::fs::read_to_string("todos.json").unwrap_or_else(|_| String::from("[]"));
    let todos: Vec<Todo> = serde_json::from_str(&todos).unwrap_or_else(|_| vec![]);
    todos
}

pub fn build_table() -> (Vec<Todo>, Table) {
    let todos = read_todos_from_json();
    let mut table = Table::new();
    table.set_header(vec!["id", "task", "completed"]);

    for todo in &todos {
        table.add_row(
            &vec![todo.id.to_string().as_str(), &todo.task, todo.completed.to_string().as_str()]
        );
    }
    (todos, table)
}

pub fn add_todo() {
    let mut todos = read_todos_from_json();
    let title = Text::new("Add the title of the task").prompt();
    match title {
        Ok(title) => {
            // let mut todos = read_todos_from_json();
            let new_task = Todo {
                id: (todos.len() as u8) + 1,
                task: title.clone(),
                completed: false,
            };
            todos.push(new_task);
            write_todos_to_json(todos, "Task added successfully");
        }
        Err(_) => println!("Error"),
    }
}

pub fn edit_todo() {
    let todos = read_todos_from_json();
    let todo: Result<Todo, InquireError> = Select::new(
        "Select what todo to edit",
        todos.clone()
    ).prompt();
    let todo = todo.unwrap_or_else(|t| {
        println!("Error {}", t);
        std::process::exit(1);
    });
    let todos = todos
        .iter()
        .map(|t| (
            if t.id == todo.id {
                Todo {
                    id: t.id,
                    task: Text::new("Enter the new task")
                        .prompt()
                        .unwrap_or_else(|e| {
                            println!("Error {}", e);
                            std::process::exit(1);
                        }),
                    completed: t.completed,
                }
            } else {
                t.clone()
            }
        ))
        .collect::<Vec<Todo>>();
    write_todos_to_json(todos, "Task edited successfully")
}

pub fn mark_todo() {
    let (todo, todos) = prompt_todos("Select what todo to toggle");
    let todos = todos
        .iter()
        .map(|t| {
            if t.id == todo.id {
                Todo {
                    id: t.id,
                    task: t.task.clone(),
                    completed: !t.completed,
                }
            } else {
                t.clone()
            }
        })
        .collect::<Vec<Todo>>();
    write_todos_to_json(todos, "Task toggled successfully");
}

pub fn remove_todo() {
    let (todo, todos) = prompt_todos("Select what todo to remove");
    let todos = todos
        .into_iter()
        .filter(|t| t.id != todo.id)
        .collect::<Vec<Todo>>();

    write_todos_to_json(todos, "Task removed successfully");
}

fn prompt_todos(message: &str) -> (Todo, Vec<Todo>) {
    let todos = read_todos_from_json();
    let todo: Result<Todo, InquireError> = Select::new(message, todos.clone()).prompt();
    let todo = todo.unwrap_or_else(|e| {
        println!("Error {}", e);
        std::process::exit(1);
    });
    return (todo, todos);
}

fn write_todos_to_json(todos: Vec<Todo>, message: &str) {
    let todos = serde_json::to_string(&todos).unwrap();
    std::fs::write("todos.json", todos).unwrap();
    println!("{}", message);
}
