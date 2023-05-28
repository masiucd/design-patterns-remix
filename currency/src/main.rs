// import all the modules from the lib folder
use currency::*;

fn main() {
    let mut amount_of_money = String::new();
    println!("Enter the amount of money you want to convert: ");
    std::io::stdin().read_line(&mut amount_of_money).unwrap();
    println!("Enter the currency you want to convert from either SEK PLN or USD: ");
    let mut currency_from = String::new();
    std::io::stdin().read_line(&mut currency_from).unwrap();
    println!("Enter the currency you want to convert to either SEK PLN or USD: ");
    let mut currency_to = String::new();
    std::io::stdin().read_line(&mut currency_to).unwrap();

    let amount_of_money: f64 = parse_to_float(amount_of_money);
    let currency_from: Currency = parse_to_currency(currency_from);
    let currency_to: Currency = parse_to_currency(currency_to);

    let converted = convert_money_from_to(amount_of_money, &currency_from, &currency_to);

    println!(
        "{} {} is {} {}",
        amount_of_money,
        currency_from.to_string(),
        converted,
        currency_to.to_string()
    );
}
