enum Currency {
    PLN,
    SEK,
    USD,
}

impl Currency {
    fn to_string(&self) -> String {
        match self {
            Currency::PLN => "PLN".to_string(),
            Currency::SEK => "SEK".to_string(),
            Currency::USD => "USD".to_string(),
        }
    }
}

fn main() {
    // get the users input
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

fn parse_to_float(amount_of_money: String) -> f64 {
    if let Ok(amount_of_money) = amount_of_money.trim().parse() {
        return amount_of_money;
    }
    0.0
}

fn parse_to_currency(currency: String) -> Currency {
    match currency.trim() {
        "SEK" => Currency::SEK,
        "PLN" => Currency::PLN,
        "USD" => Currency::USD,
        _ => Currency::SEK,
    }
}

fn convert_money_from_to(amount: f64, currency_from: &Currency, currency_to: &Currency) -> f64 {
    match currency_from {
        Currency::SEK => transform_sek(amount, currency_to),
        Currency::PLN => transform_pln(amount, currency_to),
        Currency::USD => transform_usd(amount, currency_to),
    }
}

fn transform_sek(amount: f64, currency: &Currency) -> f64 {
    match currency {
        Currency::PLN => {
            return amount * 0.43;
        }
        Currency::USD => {
            return amount * 0.11;
        }
        _ => {
            return amount;
        }
    }
}

fn transform_pln(amount: f64, currency: &Currency) -> f64 {
    match currency {
        Currency::SEK => {
            return amount * 2.33;
        }
        Currency::USD => {
            return amount * 0.26;
        }
        _ => {
            return amount;
        }
    }
}

fn transform_usd(amount: f64, currency: &Currency) -> f64 {
    match currency {
        Currency::SEK => {
            return amount * 8.86;
        }
        Currency::PLN => {
            return amount * 3.86;
        }
        _ => {
            return amount;
        }
    }
}
