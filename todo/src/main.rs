use comfy_table::Table;
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

    let mut table = Table::new();

    table.set_header(vec!["id", "task", "completed"]);

    for todo in &todos {
        table.add_row(
            &vec![todo.id.to_string().as_str(), &todo.task, todo.completed.to_string().as_str()]
        );
    }

    println!("{}", table);
}
