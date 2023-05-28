pub enum Currency {
    PLN,
    SEK,
    USD,
}

impl Currency {
    pub fn to_string(&self) -> String {
        match self {
            Currency::PLN => "PLN".to_string(),
            Currency::SEK => "SEK".to_string(),
            Currency::USD => "USD".to_string(),
        }
    }
}

pub fn parse_to_float(amount_of_money: String) -> f64 {
    if let Ok(amount_of_money) = amount_of_money.trim().parse() {
        return amount_of_money;
    }
    0.0
}

pub fn parse_to_currency(currency: String) -> Currency {
    match currency.trim() {
        "SEK" => Currency::SEK,
        "PLN" => Currency::PLN,
        "USD" => Currency::USD,
        _ => Currency::SEK,
    }
}

pub fn convert_money_from_to(amount: f64, currency_from: &Currency, currency_to: &Currency) -> f64 {
    match currency_from {
        Currency::SEK => transform_sek(amount, currency_to),
        Currency::PLN => transform_pln(amount, currency_to),
        Currency::USD => transform_usd(amount, currency_to),
    }
}

pub fn transform_sek(amount: f64, currency: &Currency) -> f64 {
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

pub fn transform_pln(amount: f64, currency: &Currency) -> f64 {
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

pub fn transform_usd(amount: f64, currency: &Currency) -> f64 {
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
