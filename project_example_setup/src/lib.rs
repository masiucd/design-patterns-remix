pub mod mcd {
    pub mod math {
        pub fn add(a: i32, b: i32) -> i32 {
            a + b
        }
        pub fn double(a: i32) -> i32 {
            a * 2
        }

        #[cfg(test)]
        mod tests {
            use super::*;
            #[test]
            fn test_add() {
                assert_eq!(add(1, 2), 3);
            }
            #[test]
            fn test_double() {
                assert_eq!(double(2), 4);
            }
        }
    }

    pub mod strings {
        pub fn to_uppercase(s: &str) -> String {
            s.to_uppercase()
        }
    }
}