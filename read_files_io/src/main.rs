use serde_derive::{ Deserialize, Serialize };
mod read_files;

#[derive(Deserialize, Debug, Serialize)]
enum FoodType {
    Main,
    Side,
    Drink,
}

#[derive(Deserialize, Debug, Serialize)]
struct Food {
    name: String,
    price: f32,
    description: String,
    food_type: FoodType,
}

#[derive(Deserialize, Debug, Serialize)]
struct City {
    name: String,
    country: String,
    population: u32,
}

#[derive(Deserialize, Serialize, Debug)]
struct JsonData {
    foods: Vec<Food>,
    cities: Vec<City>,
}

fn main() {
    // get input path
    // run cargo run <json or text>
    let input_path = std::env::args().nth(1).unwrap();
    if input_path.trim() == "json" {
        //read json file

        let file = std::fs::read_to_string("data.json").unwrap();
        let data: JsonData = serde_json::from_str(&file).unwrap();
    } else if input_path.trim() == "text" {
        //read text file
    } else {
        println!("Please provide a valid input path (json or text)");
    }
}