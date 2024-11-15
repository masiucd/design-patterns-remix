use std::{ fs, io::{ self, Write } };

use serde::{ Deserialize, Serialize };

fn main() {
    let mut file_option = String::new();
    println!("Enter what file type you want to read: ");
    println!("1. Text file");
    println!("2. Binary file");
    println!("3. JSON file");
    println!("4. XML file");
    io::stdout().flush().unwrap();
    io::stdin().read_line(&mut file_option).expect("Failed to read line");

    let mut file_path = String::new();
    println!("Enter the file path: ");
    io::stdout().flush().unwrap();
    io::stdin().read_line(&mut file_path).expect("Failed to read line");

    match file_option.trim() {
        "1" => read_text_file(&file_path.trim()),
        "2" => println!("Binary file"),
        "3" => read_json_file(&file_path.trim()),
        "4" => println!("XML file"),
        _ => println!("Invalid option"),
    }
}

fn read_text_file(file_name: &str) {
    let file = if file_name == "" { "text.txt" } else { file_name };
    println!("Reading text file: {}", file);
    let text = fs::read_to_string(file);
    match text {
        Ok(t) => println!("{}", t),
        Err(e) => println!("Error: {}", e),
    }
}

#[derive(Serialize, Deserialize, Debug)]
struct Student {
    name: String,
    age: u8,
    pets: Vec<Pet>,
    is_student: bool,
}

#[derive(Serialize, Deserialize, Debug)]
struct Pet {
    name: String,
    pet_type: String,
}

fn read_json_file(file_name: &str) {
    let file = if file_name == "" { "j.json" } else { file_name };
    println!("Reading JSON file: {}", file);
    let json = fs::read_to_string(file);
    match json {
        Ok(j) => {
            let parsed: Student = serde_json::from_str(&j).expect("Failed to parse JSON");
            println!("Student name: {}", parsed.name);
            println!("Student age: {}", parsed.age);
            println!("Is student: {}", parsed.is_student);
            for pet in parsed.pets {
                println!("\t Pet name: {}", pet.name);
                println!("\t Pet type: {}", pet.pet_type);
            }
        }
        Err(e) => println!("Error: {}", e),
    }
}
