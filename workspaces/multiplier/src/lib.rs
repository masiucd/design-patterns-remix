pub fn double(a: i32) -> i32 {
    a * 2
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_double() {
        assert_eq!(double(2), 4);
    }
}
