fn main() {
    let mut input = String::new();
    println!("Enter the temperature: ");
    std::io::stdin().read_line(&mut input).expect("Failed to read line");

    let mut unit = String::new();
    println!("Enter the unit (C/F): ");
    std::io::stdin().read_line(&mut unit).expect("Failed to read line");

    let input: f64 = input.trim().parse().expect("Please enter a number");
    match unit.trim() {
        "C" => {
            println!("Temperature in Fahrenheit: {}", celsius_to_fahrenheit(input));
        }
        "F" => {
            println!("Temperature in Celsius: {}", fahrenheit_to_celsius(input));
        }
        _ => {
            println!("Invalid unit");
        }
    }
}

fn celsius_to_fahrenheit(celsius: f64) -> f64 {
    (celsius * 9.0) / 5.0 + 32.0
}

fn fahrenheit_to_celsius(fahrenheit: f64) -> f64 {
    ((fahrenheit - 32.0) * 5.0) / 9.0
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_celsius_to_fahrenheit() {
        assert_eq!(celsius_to_fahrenheit(0.0), 32.0);
        assert_eq!(celsius_to_fahrenheit(100.0), 212.0);
        assert_eq!(celsius_to_fahrenheit(37.0), 98.6);
    }

    #[test]
    fn test_fahrenheit_to_celsius() {
        assert_eq!(fahrenheit_to_celsius(32.0), 0.0);
        assert_eq!(fahrenheit_to_celsius(212.0), 100.0);
        assert_eq!(fahrenheit_to_celsius(98.6), 37.0);
    }
}
