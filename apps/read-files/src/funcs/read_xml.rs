use serde_xml_rs::{ self, from_str };

#[derive(Debug, Serialize, Deserialize, PartialEq)]
struct PlateAppearance {
    #[serde(rename = "$value")]
    events: Vec<Event>,
}

#[derive(Debug, Serialize, Deserialize, PartialEq)]
#[serde(rename_all = "kebab-case")]
enum Event {
    Pitch(Pitch),
    Runner(Runner),
}

#[derive(Debug, Serialize, Deserialize, PartialEq)]
struct Pitch {
    speed: u32,
    r#type: PitchType,
    outcome: PitchOutcome,
}

#[derive(Debug, Serialize, Deserialize, PartialEq)]
enum PitchType {
    FourSeam,
    TwoSeam,
    Changeup,
    Cutter,
    Curve,
    Slider,
    Knuckle,
    Pitchout,
}

#[derive(Debug, Serialize, Deserialize, PartialEq)]
enum PitchOutcome {
    Ball,
    Strike,
    Hit,
}

#[derive(Debug, Serialize, Deserialize, PartialEq)]
struct Runner {
    from: Base,
    to: Option<Base>,
    outcome: RunnerOutcome,
}

#[derive(Debug, Serialize, Deserialize, PartialEq)]
enum Base {
    First,
    Second,
    Third,
    Home,
}
#[derive(Debug, Serialize, Deserialize, PartialEq)]
enum RunnerOutcome {
    Steal,
    Caught,
    PickOff,
}
pub fn read_xml_file(file_name: &str) {
    let file = if file_name == "" { "x.xml" } else { file_name };
    println!("Reading XML file: {}", file);
    let xml = fs::read_to_string(file);
    match xml {
        Ok(x) => {
            let plate_appearance: PlateAppearance = from_str(&x).expect("Failed to parse XML");
            for x in plate_appearance.events {
                println!("{:?}", x);
            }
        }
        Err(e) => println!("Error: {}", e),
    }
}
