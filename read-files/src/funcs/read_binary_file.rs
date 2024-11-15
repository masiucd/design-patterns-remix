use std::fs::File;
use std::io::Read;

pub fn read_binary_file(path: &str) {
    let mut file = File::open(path).expect("Failed to open file");
    let mut buffer = Vec::new();
    file.read_to_end(&mut buffer);
    println!("{:?}", buffer);
}
