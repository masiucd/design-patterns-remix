use serde::{ Deserialize, Serialize };
use std::io;

#[derive(Deserialize, Debug, Serialize)]
struct Question {
    id: u8,
    question: String,
}

#[derive(Deserialize, Debug, Serialize)]
struct Answer {
    id: u8,
    answer: String,
}

#[derive(Deserialize, Debug, Serialize)]
struct Quiz {
    questions: Vec<Question>,
    answers: Vec<Answer>,
}

#[derive(Debug)]
struct UserAnswer {
    id: u8,
    answer: String,
}

fn collect_answers(quiz: &Quiz) -> Result<Vec<UserAnswer>, io::Error> {
    let mut user_answers: Vec<UserAnswer> = Vec::new();
    for q in quiz.questions.iter() {
        let mut user_answer = String::new();
        println!("{}", q.question);
        println!("Enter your answer for question {}: ", q.id);
        io::stdin().read_line(&mut user_answer)?;
        user_answers.push(UserAnswer {
            id: q.id,
            answer: user_answer.trim().to_string(),
        });
    }
    Ok(user_answers)
}

fn main() -> Result<(), io::Error> {
    // let mut user_answers: Vec<UserAnswer> = Vec::new();

    if let Ok(file) = std::fs::read_to_string("quiz.json") {
        let quiz: Quiz = serde_json::from_str(&file)?;
        // for q in quiz.questions.iter() {
        //     let mut user_answer = String::new();
        //     println!("{}", q.question);
        //     println!("Enter your answer for question {}: ", q.id);
        //     io::stdin().read_line(&mut user_answer)?;
        //     user_answers.push(UserAnswer {
        //         id: q.id,
        //         answer: user_answer.trim().to_string(),
        //     });
        // }

        let user_answers = collect_answers(&quiz)?;

        let mut score = 0;
        for a in user_answers.iter() {
            let Answer { id: _, answer } = quiz.answers
                .iter()
                .find(|&x| x.id == a.id)
                .unwrap();
            if answer.to_lowercase() == a.answer.to_lowercase() {
                println!("Correct!");
                score += 1;
            } else {
                println!("Incorrect!");
            }
        }
        println!("Your score is: {} out of {}", score, quiz.questions.len());
    }

    Ok(())
}
