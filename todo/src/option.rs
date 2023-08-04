#[derive(Debug)]
pub enum Option {
    Add,
    View,
    Mark,
    Remove,
    Edit,
    Exit,
}

pub fn get_options() -> Vec<Option> {
    vec![Option::Add, Option::View, Option::Mark, Option::Remove, Option::Edit, Option::Exit]
}

impl std::fmt::Display for Option {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        match self {
            Option::Add => write!(f, "Add a new task"),
            Option::View => write!(f, "View all tasks"),
            Option::Mark => write!(f, "Toggle todo"),
            Option::Remove => write!(f, "Remove a task"),
            Option::Edit => write!(f, "Edit a task"),
            Option::Exit => write!(f, "Exit"),
        }
    }
}
