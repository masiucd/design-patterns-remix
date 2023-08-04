use comfy_table::Table;
use todo::todo::Todo;
use todo::option::{ get_options, Option };
use inquire::{ Text, InquireError, Select };

use serde_json;

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

fn add_todo(mut todos: Vec<Todo>) {
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
            let todos = serde_json::to_string(&todos).unwrap();
            std::fs::write("todos.json", todos).unwrap();
            println!("Task added successfully with title {}", title);
        }
        Err(_) => println!("Error"),
    }
}

fn edit_todo(todos: Vec<Todo>) {
    let todo_id = Text::new("Select the ID of the todo to edit").prompt();
    match todo_id {
        Ok(todo_id) => {
            let id: u8 = todo_id.parse().expect("Id is not a valid integer");
            println!("You selected: {}", id);
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
}

fn mark_todo() {
    let todos = read_todos_from_json();
    let todo: Result<Todo, InquireError> = Select::new(
        "Select what todo to toggle",
        todos.clone()
    ).prompt();
    let todo = todo.unwrap_or_else(|e| {
        println!("Error {}", e);
        std::process::exit(1);
    });
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
    let todos = serde_json::to_string(&todos).unwrap();
    std::fs::write("todos.json", todos).unwrap();
    println!("Task has changed to: {}", todo.completed);
}

fn ask_user_for_options() -> Result<Option, InquireError> {
    let ans: Result<Option, InquireError> = Select::new(
        "Select what operation you would like to do",
        get_options()
    ).prompt();
    return ans;
}

fn run() {
    let ans = ask_user_for_options();
    let todos = read_todos_from_json();
    match ans {
        Ok(ans) => {
            match ans {
                Option::Add => {
                    add_todo(todos);
                }
                Option::View => {
                    let (_, table) = build_table();
                    println!("{}", table);
                    run();
                }
                Option::Edit => {
                    edit_todo(todos);
                    run();
                }
                Option::Mark => {
                    mark_todo();
                    run();
                }
                Option::Remove => {
                    println!("Coming soon!");
                }
                Option::Exit => {
                    // exit the program
                    println!("Bye!");
                    std::process::exit(0);
                }
            }
        }
        Err(_) => println!("Error"),
    }
}

fn main() {
    run();
}
