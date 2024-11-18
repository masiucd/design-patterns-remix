use std::fs;

use cli_table::{ format::Justify, print_stdout, Table, WithTitle };
use serde::{ Deserialize, Serialize };

#[derive(Table)]
struct User {
    #[table(title = "ID", justify = "Justify::Right")]
    id: u32,
    #[table(title = "Name", bold = true)]
    name: String,
    #[table(title = "Age", justify = "Justify::Right")]
    age: u32,
}

#[derive(Serialize, Deserialize, Debug)]
struct JsonUser {
    id: u32,
    name: String,
    age: u32,
}

fn main() {
    let string_data = fs
        ::read_to_string("users.json")
        .expect("Something went wrong reading the file");

    let data: Vec<JsonUser> = serde_json
        ::from_str(&string_data)
        .expect("JSON was not well-formatted");

    let users = data
        .into_iter()
        .map(|user| User {
            id: user.id,
            name: user.name,
            age: user.age,
        })
        .collect::<Vec<User>>();

    assert!(print_stdout(users.with_title()).is_ok());
}
