mod users;

use crate::users::user::get_user_as_json;

#[tokio::main]
async fn main() -> Result<(), reqwest::Error> {
    let users = get_user_as_json(2);
    println!("{:?}", users.await?);

    Ok(())
}