use std::{ fs, io::{ self, Write } };

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
        "3" => println!("JSON file"),
        "4" => println!("XML file"),
        _ => println!("Invalid option"),
    }
}

fn read_text_file(file_name: &str) {
    println!("Reading text file: {}", file_name);
    let text = fs::read_to_string(file_name);
    match text {
        Ok(t) => println!("{}", t),
        Err(e) => println!("Error: {}", e),
    }
}
