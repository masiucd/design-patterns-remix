use serde::{ Deserialize, Serialize };

#[derive(Serialize, Deserialize, Debug)]
#[serde(rename_all = "camelCase")]
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

pub fn read_json_file(file_name: &str) {
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
