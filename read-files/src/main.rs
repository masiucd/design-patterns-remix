use std::io::{ self, Write };
mod funcs;
// use read_xml::read

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
        "1" => funcs::read_text_file::read_text_file(&file_path.trim()),
        "2" => funcs::read_binary_file::read_binary_file(&file_path.trim()),
        "3" => funcs::read_json::read_json_file(&file_path.trim()),
        "4" => funcs::read_xml::read_xml_file(&file_path.trim()),
        _ => println!("Invalid option"),
    }
}
