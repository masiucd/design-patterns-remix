async fn get_users_as_text() -> Result<String, reqwest::Error> {
    let users = reqwest::get("https://jsonplaceholder.typicode.com/users").await?.text().await?;
    Ok(users)
}

#[tokio::main]
async fn main() -> Result<(), reqwest::Error> {
    let users = get_users_as_text().await?;
    println!("users = {}", users);
    Ok(())
}