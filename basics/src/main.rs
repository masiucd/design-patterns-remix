#[derive(Debug)]
struct Person {
    name: String,
    age: usize,
}

enum Something {
    String(String),
    Number(usize),
    Person(Person),
}

fn main() {
    let text_file = std::fs::read_to_string("file.txt");

    if let Ok(file) = text_file {
        let xs = file
            .lines()
            .map(|x| if x.trim() == "four".trim() { "CWKS LEGIA" } else { x })
            .collect::<Vec<&str>>()
            .join(" - ");
        println!("File contents: {:?}", xs);
    } else {
        println!("Error: {}", text_file.unwrap_err());
    }

    let s = Something::Person(Person {
        name: "Jan".to_string(),
        age: 20,
    });
    let s = Something::String(String::from("APA"));
    let s = Something::Number(10);

    match s {
        Something::String(s) => println!("String: {}", s),
        Something::Number(n) => println!("Number: {}", n),
        Something::Person(p) => println!("Person: {:?}", p),
    }
}
