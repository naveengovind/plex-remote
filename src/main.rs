use actix_web::{post, web, App, HttpServer, Responder, HttpRequest, Result};
use actix_files as fs;
use enigo::{Enigo, Key, KeyboardControllable};
use std::path::PathBuf;
use actix_files::NamedFile;


#[post("/{cmd}")]
async fn greet(cmd: web::Path<String>) -> impl Responder {
    let mut enigo = Enigo::new();
    let cmd = cmd.to_string();

    let mut res = "ok";

    match cmd.as_str() {
        "plus" => enigo.key_sequence_parse("+"),
        "minus" => enigo.key_sequence_parse("-"),
        "eq" => enigo.key_sequence_parse("="),
        "up" => enigo.key_click(Key::UpArrow),
        "down" => enigo.key_click(Key::DownArrow),
        "right" => enigo.key_click(Key::RightArrow),
        "enter" => enigo.key_click(Key::Return),
        "end" => enigo.key_click(Key::End),
        "p" => enigo.key_sequence_parse("p"),
        "h" => enigo.key_sequence_parse("h"),
        "home" => enigo.key_click(Key::Home),
        "left" => enigo.key_click(Key::LeftArrow),
        "escape" => enigo.key_click(Key::Escape),
        _ => {res = "error"}
    }
    format!("{res}")
}

async fn index(_req: HttpRequest) -> Result<NamedFile> {
    let path: PathBuf = "./front/index.html".parse().unwrap();
    Ok(NamedFile::open(path)?)
}


#[actix_web::main] // or #[tokio::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(||
        App::new()
            .route("/app", web::get().to(index))
            .service(fs::Files::new("/static", "./front").show_files_listing())
            .service(greet, )
    )
        .bind(("0.0.0.0", 4563))?
        .run()
        .await
}