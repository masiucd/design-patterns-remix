// use crate::animals::dog::Dog;
// pub mod animals;
mod animals;

// project_example_setup is the name of the project, and math is the name of the module.
use project_example_setup::mcd;

fn main() {
    let bobby = animals::dog::Dog {
        name: String::from("Bobby"),
        age: 8,
    };
    println!("Hello, world! My name is {} and I am {} years old.", bobby.name, bobby.age);
    let x = mcd::math::add(1, 2);
    let hello = mcd::strings::to_uppercase("hello");
    println!("{} {}", x, hello)
}