use comfy_table::Table;
use inquire::{ Text, InquireError, Select };
use serde::{ Serialize, Deserialize };

use serde_json;

#[derive(Serialize, Deserialize, Debug)]
struct Todo {
    id: u8,
    task: String,
    completed: bool,
}

fn read_todos_from_json() -> Vec<Todo> {
    let todos = std::fs::read_to_string("todos.json").unwrap();
    let mut todos: Vec<Todo> = serde_json::from_str(&todos).unwrap();
    todos
}

fn build_table() -> (Vec<Todo>, Table) {
    let todos = read_todos_from_json();
    let mut table = Table::new();
    table.set_header(vec!["id", "task", "completed"]);

    for todo in &todos {
        table.add_row(
            &vec![todo.id.to_string().as_str(), &todo.task, todo.completed.to_string().as_str()]
        );
    }

    // println!("{}", table);
    (todos, table)
}

fn main() {
    let options: Vec<&str> = vec![
        "Add a nwe task",
        "View all tasks",
        "Mark a task as completed",
        "Remove a task",
        "Edit a task",
        "Exit"
    ];
    let ans: Result<&str, InquireError> = Select::new(
        "Select what operation you would like to do",
        options
    ).prompt();

    match ans {
        Ok(ans) => {
            println!("You selected: {}", ans);
        }
        Err(_) => println!("Error"),
    }

    let todos = std::fs::read_to_string("todos.json").unwrap();
    let mut todos: Vec<Todo> = serde_json::from_str(&todos).unwrap();

    let mut table = Table::new();

    table.set_header(vec!["id", "task", "completed"]);

    for todo in &todos {
        table.add_row(
            &vec![todo.id.to_string().as_str(), &todo.task, todo.completed.to_string().as_str()]
        );
    }

    println!("{}", table);

    let title = Text::new("Add the title of the task").prompt();
    match title {
        Ok(title) => {
            let new_task = Todo {
                id: (todos.len() as u8) + 1,
                task: title,
                completed: false,
            };
            todos.push(new_task);
            let todos = serde_json::to_string(&todos).unwrap();
            std::fs::write("todos.json", todos).unwrap();
        }
        Err(_) => println!("Error"),
    }

    let todos = std::fs::read_to_string("todos.json").unwrap();
    let todos: Vec<Todo> = serde_json::from_str(&todos).unwrap();

    let mut table = Table::new();

    table.set_header(vec!["id", "task", "completed"]);
    for todo in &todos {
        table.add_row(
            &vec![todo.id.to_string().as_str(), &todo.task, todo.completed.to_string().as_str()]
        );
    }
    println!("{}", table);
}
