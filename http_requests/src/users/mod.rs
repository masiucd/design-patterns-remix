pub mod user {
    use serde::{ Serialize, Deserialize };

    #[derive(Debug, Serialize, Deserialize)]
    pub struct User {
        id: i32,
        name: String,
        username: String,
        email: String,
    }

    impl User {
        #[allow(dead_code)]
        pub fn new(id: i32, name: String, username: String, email: String) -> Self {
            User {
                id,
                name,
                username,
                email,
            }
        }
    }

    #[allow(dead_code)]
    pub async fn get_user_as_text(id: u8) -> Result<String, reqwest::Error> {
        let url = make_url(id);
        let users = reqwest::get(url).await?.text().await?;
        Ok(users)
    }

    #[allow(dead_code)]
    pub async fn get_user_as_json(id: u8) -> Result<User, reqwest::Error> {
        let url = make_url(id);
        let user = reqwest::Client::new().get(url).send().await?.json::<User>().await?;
        Ok(user)
    }

    #[allow(dead_code)]
    fn make_url(id: u8) -> String {
        format!("https://jsonplaceholder.typicode.com/users/{}", id)
    }
}