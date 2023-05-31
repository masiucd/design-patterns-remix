fn main() {
    let mut user_input = String::from("");
    println!("Enter a word: ");
    std::io::stdin().read_line(&mut user_input).expect("Failed to read the input");
    let vowels_count = count_vowels(&user_input.trim());
    println!(
        "The word you entered is: {} and the amount of vowels it contains is {}",
        user_input,
        vowels_count
    );
}

const VOWELS: [char; 5] = ['a', 'e', 'i', 'o', 'u'];
fn count_vowels(word: &str) -> i32 {
    let mut count = 0;
    for alpha in word.chars() {
        if VOWELS.contains(&alpha) {
            count += 1;
        }
    }
    count
}
