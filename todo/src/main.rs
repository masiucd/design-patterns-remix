use inquire::{ InquireError, Select };
use todo::option::{
    get_options,
    Option,
    read_todos_from_json,
    add_todo,
    build_table,
    edit_todo,
    mark_todo,
};

fn ask_user_for_options() -> Result<Option, InquireError> {
    let ans: Result<Option, InquireError> = Select::new(
        "Select what operation you would like to do",
        get_options()
    ).prompt();
    return ans;
}

fn run() {
    let ans = ask_user_for_options();

    match ans {
        Ok(ans) => {
            match ans {
                Option::Add => {
                    add_todo();
                }
                Option::View => {
                    let (_, table) = build_table();
                    println!("{}", table);
                    run();
                }
                Option::Edit => {
                    edit_todo();
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
