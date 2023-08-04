fn main() {
    let mut count = 0;
    let mut incremnt = || {
        count += 1;
        println!("count is {}", count);
    };
    incremnt();
    incremnt();
    incremnt();
    incremnt();
    println!("{}", count);
}
