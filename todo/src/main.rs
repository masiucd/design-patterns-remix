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
    let todos = std::fs::read_to_string("todos.json").unwrap_or_else(|_| String::from("[]"));
    let todos: Vec<Todo> = serde_json::from_str(&todos).unwrap_or_else(|_| vec![]);
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
    (todos, table)
}

#[derive(Debug)]
enum Option {
    Add,
    View,
    Mark,
    Remove,
    Edit,
    Exit,
}

impl std::fmt::Display for Option {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        match self {
            Option::Add => write!(f, "Add a new task"),
            Option::View => write!(f, "View all tasks"),
            Option::Mark => write!(f, "Mark a task as completed"),
            Option::Remove => write!(f, "Remove a task"),
            Option::Edit => write!(f, "Edit a task"),
            Option::Exit => write!(f, "Exit"),
        }
    }
}

fn add_todo() {
    let title = Text::new("Add the title of the task").prompt();
    match title {
        Ok(title) => {
            let mut todos = read_todos_from_json();
            let new_task = Todo {
                id: (todos.len() as u8) + 1,
                task: title.clone(),
                completed: false,
            };
            todos.push(new_task);
            let todos = serde_json::to_string(&todos).unwrap();
            std::fs::write("todos.json", todos).unwrap();
            println!("Task added successfully with title {}", title);
        }
        Err(_) => println!("Error"),
    }
}

fn main() {
    let options: Vec<Option> = vec![
        Option::Add,
        Option::View,
        Option::Mark,
        Option::Remove,
        Option::Edit,
        Option::Exit
    ];

    let ans: Result<Option, InquireError> = Select::new(
        "Select what operation you would like to do",
        options
    ).prompt();

    match ans {
        Ok(ans) => {
            println!("You selected: {}", ans);
            match ans {
                Option::Add => {
                    add_todo();
                }
                Option::View => {
                    let (_, table) = build_table();
                    println!("{}", table);
                }
                Option::Edit => {
                    let todo_id = Text::new("Select the ID of the todo to edit").prompt();
                    match todo_id {
                        Ok(todo_id) => {
                            let id: u8 = todo_id.parse().expect("Id is not a valid integer");
                            println!("You selected: {}", id);
                            let todos = read_todos_from_json();
                            let todo_to_edit = todos.iter().find(|t| t.id == id);
                            let todo_to_edit = if todo_to_edit.is_some() {
                                todo_to_edit.unwrap()
                            } else {
                                println!("Todo not found");
                                return;
                            };
                            println!("You selected: {:?}", todo_to_edit);
                        }
                        Err(_) => println!("Error"),
                    }
                    // find the todo with the id so we can edit
                    // if found, edit the todo
                    //              get mor info from the user if user want to edit the task or/and mark as completed.
                    // if not found, print message to the user
                }
                _ => {
                    println!("Coming soon!");
                }
            }
        }
        Err(_) => println!("Error"),
    }

    // let todos = std::fs::read_to_string("todos.json").unwrap();
    // let mut todos: Vec<Todo> = serde_json::from_str(&todos).unwrap();

    // let mut table = Table::new();

    // table.set_header(vec!["id", "task", "completed"]);

    // for todo in &todos {
    //     table.add_row(
    //         &vec![todo.id.to_string().as_str(), &todo.task, todo.completed.to_string().as_str()]
    //     );
    // }

    // println!("{}", table);

    // let todos = std::fs::read_to_string("todos.json").unwrap();
    // let todos: Vec<Todo> = serde_json::from_str(&todos).unwrap();

    // let mut table = Table::new();

    // table.set_header(vec!["id", "task", "completed"]);
    // for todo in &todos {
    //     table.add_row(
    //         &vec![todo.id.to_string().as_str(), &todo.task, todo.completed.to_string().as_str()]
    //     );
    // }
    // println!("{}", table);
}
