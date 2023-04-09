mod read_files;
mod read_json;

fn main() {
    // get input path
    let input_path = std::env::args().nth(1).unwrap();
    // run cargo run <json or text>
    match input_path.trim() {
        "json" => read_json::io::run_read_json_app(),
        "text" => read_files::io::run_read_file_mini_app(),
        _ => println!("Please provide a valid input path (json or text)"),
    }
}