use std::fmt;

use serde_derive::{ Deserialize, Serialize };
use tabled::{ Table, Tabled };

#[derive(Debug)]
#[allow(dead_code)]
enum FoodType {
    Main,
    Side,
    Drink,
}

impl fmt::Display for FoodType {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        match self {
            FoodType::Main => write!(f, "Main"),
            FoodType::Side => write!(f, "Side"),
            FoodType::Drink => write!(f, "Drink"),
        }
    }
}

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
fn parse_json_data() -> JsonData {
    let file = std::fs::read_to_string("data.json").unwrap();
    let data: JsonData = serde_json::from_str(&file).unwrap();
    data
}

fn print_city_table(data: &JsonData) {
    let city_table = data.cities
        .iter()
        .map(|x| City::new(x.name.clone(), x.country.clone(), x.population))
        .collect::<Vec<City>>();
    println!("{}", Table::new(&city_table).to_string());
}

fn print_food_table(data: &JsonData) {
    let food_table = data.foods
        .iter()
        .map(|x| Food::new(x.name.clone(), x.price, x.description.clone(), x.food_type.clone()))
        .collect::<Vec<Food>>();
    println!("{}", Table::new(&food_table).to_string());
}

pub fn run_read_json_app() {
    let data = parse_json_data();
    print_city_table(&data);
    print_food_table(&data);
}