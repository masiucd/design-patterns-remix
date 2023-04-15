use rand::Rng;
use std::cmp::Ordering;
use std::io;

fn main() {
    let random_number = rand::thread_rng().gen_range(0..100);
    println!("Guess the number from 0 to 100!");

    loop {
        let mut guess = String::new();
        io::stdin().read_line(&mut guess).expect("Failed to read line");

        let guess = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => {
                println!("Please type a number!");
                continue;
            }
        };

        println!("You guessed: {}", guess);
        println!("The random number is: {}", random_number);
        match random_number.cmp(&guess) {
            Ordering::Less => {
                println!("Too big! Try again!");
            }
            Ordering::Greater => {
                println!("Too small! Try again!");
            }
            Ordering::Equal => {
                println!(
                    "You win! Congratulations! you guessed the number {} and the secret number is {}",
                    guess,
                    random_number
                );
                break;
            }
        }
    }
}