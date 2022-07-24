document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("tm").onclick = function () {
        fetch("/up", {method: "POST"});
    }
    document.getElementById("mr").onclick = function () {
        fetch("/right", {method: "POST"});
    }
    document.getElementById("ml").onclick = function () {
        fetch("/left", {method: "POST"});
    }
    document.getElementById("bm").onclick = function () {
        fetch("/down", {method: "POST"});
    }
    document.getElementById("mm").onclick = function () {
        fetch("/enter", {method: "POST"});
    }
    document.getElementById("tl-top").onclick = function () {
        fetch("/escape", {method: "POST"});
    }
    document.getElementById("tl-bottom").onclick = function () {
        fetch("/h", {method: "POST"});
    }
    document.getElementById("tr-top").onclick = function () {
        fetch("/eq", {method: "POST"});
    }
    document.getElementById("tr-bottom").onclick = function () {
        fetch("/minus", {method: "POST"});
    }
    document.getElementById("bl-top").onclick = function () {
        fetch("/p", {method: "POST"});
    }
    document.getElementById("br-top").onclick = function () {
        fetch("/end", {method: "POST"});
    }
    document.getElementById("br-bottom").onclick = function () {
        fetch("/home", {method: "POST"});
    }

});
