use cli_table::{ format::{ Border, Justify }, Cell, Style, Table, CellStruct };

fn get_headers() -> Vec<CellStruct> {
    vec!["First Name".cell(), "Last Name".cell(), "Role".cell(), "Age".cell()]
}

fn get_body() -> Vec<Vec<CellStruct>> {
    vec![
        vec![
            "Marcell".cell(),
            "Ciszek Druzynski".cell(),
            "Software developer".cell(),
            (8).cell().justify(Justify::Right)
        ]
    ]
}

fn main() {
    let table = get_body()
        .table()
        .title(get_headers())
        .bold(true)
        .border(Border::builder().build());

    let table_display = table.display().unwrap();

    println!("{}", table_display);
}