fn main() {
    let quiz_file = std::fs::read_to_string("quiz.json");

    println!("{:?}", quiz_file);
}
