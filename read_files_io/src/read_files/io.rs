use std::{ fs, collections::HashMap };

#[allow(dead_code)]
pub fn read_text_file(path: &str) -> String {
    let file = fs::read_to_string(path);
    let file = match file {
        Ok(file) => file,
        Err(error) => format!("Error: {}", error),
    };
    file
}

#[allow(dead_code)]
pub fn replace_placeholders(text: &str, placeholders: &mut HashMap<&str, &str>) -> String {
    text.to_string()
        .split(" ")
        .map(|x| {
            if placeholders.contains_key(x) { placeholders.get(x).unwrap() } else { x }
        })
        .collect::<Vec<&str>>()
        .join(" ")
}

#[allow(dead_code)]
pub fn run_read_file_mini_app() {
    let file = read_text_file("text.txt");
    let mut placeholders = HashMap::new();
    placeholders.insert("<name>", "Marcell");
    placeholders.insert("<year>", "28");
    placeholders.insert("<country>", "Sweden");
    placeholders.insert("<job>.", "Programmer");
    let file = replace_placeholders(&file, &mut placeholders);
    println!("{}", file);
}