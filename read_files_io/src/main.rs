use serde_derive::{ Deserialize, Serialize };
use tabled::{ Table, Tabled };

mod read_files;

#[derive(Deserialize, Debug, Serialize, Tabled)]
struct Food {
    name: String,
    price: f32,
    description: String,
    food_type: String, // TODO convert to enum
}

#[derive(Deserialize, Debug, Serialize, Tabled)]
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

impl City {
    fn new(name: String, country: String, population: u32) -> Self {
        Self {
            name,
            country,
            population,
        }
    }
}

impl Food {
    fn new(name: String, price: f32, description: String, food_type: String) -> Self {
        Self {
            name,
            price,
            description,
            food_type,
        }
    }
}

fn main() {
    // get input path
    // run cargo run <json or text>
    let input_path = std::env::args().nth(1).unwrap();
    if input_path.trim() == "json" {
        //read json file

        let file = std::fs::read_to_string("data.json").unwrap();
        let data: JsonData = serde_json::from_str(&file).unwrap();
        let city_table = data.cities
            .iter()
            .map(|x| City::new(x.name.clone(), x.country.clone(), x.population))
            .collect::<Vec<City>>();
        println!("{}", Table::new(&city_table).to_string());

        let food_table = data.foods
            .iter()
            .map(|x| Food::new(x.name.clone(), x.price, x.description.clone(), x.food_type.clone()))
            .collect::<Vec<Food>>();

        println!("{}", Table::new(&food_table).to_string());
    } else if input_path.trim() == "text" {
        //read text file
    } else {
        println!("Please provide a valid input path (json or text)");
    }
}