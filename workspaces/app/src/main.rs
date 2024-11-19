use adder::add;
use multiplier::double;

fn main() {
    let sum = add(5, 3);
    let product = double(10);

    println!("Sum: {}", sum);
    println!("Product: {}", product);
}
