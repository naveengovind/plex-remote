const pairs = {
    "tm": "up",
    "mr": "right",
    "bm": "down",
    "mm": "enter",
    "ml": "left",
    "tr-top": "eq",
    "tr-bottom": "minus",
    "bl-top": "p",
    "br-top": "end",
    "br-bottom": "home",
    "tl-top": "escape",
    "tl-bottom": "h",
}

document.addEventListener("DOMContentLoaded", function(){

    for(const ent of Object.entries(pairs)){
        const [id, key] = ent;

        document.getElementById(id).onclick = function () {
            fetch(key, {method: "POST"});
        }

    }
});
