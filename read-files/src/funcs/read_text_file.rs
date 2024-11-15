use std::fs;

pub fn read_text_file(file_name: &str) {
    let file = if file_name == "" { "text.txt" } else { file_name };
    println!("Reading text file: {}", file);
    let text = fs::read_to_string(file);
    match text {
        Ok(t) => println!("{}", t),
        Err(e) => println!("Error: {}", e),
    }
}
