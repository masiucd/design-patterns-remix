use serde::{ Serialize, Deserialize };

use serde_json;

#[derive(Serialize, Deserialize, Debug)]
struct Todo {
    id: u8,
    task: String,
    completed: bool,
}

fn main() {
    let todos = std::fs::read_to_string("todos.json").unwrap();
    let todos: Vec<Todo> = serde_json::from_str(&todos).unwrap();

    for todo in &todos {
        if todo.id == 1 {
            println!("Task: {}", todo.task);
        }
    }
}
