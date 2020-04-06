// Jquery


$("#para1").css({ color: "blue", "font-size": "22px" });

$("p#para1").dblclick(() => console.log("I was clicked"));

$("p").on("click", () => { });

$(document).ready(function () {
    $("input#btn2").on("click", () => {
        $("div#demo").animate({
            left: "1050px",
            top: "380px",

            opacity: "0.9",
            "border-radius": "50%",
            /* height: "250px",
            width: "350px", */
            transform: "rotate(55deg)"
        }, 1200)
            .css({ transform: "rotate(45deg)" });
    });
    /* blink();
    function  blink(){
        $("span")
        .fadeOut(500)
        .fadeIn(500)
        .css("color", "red");
        blink();
    } */

    /* blink();
     function blink(){
      $("#heading1")
      .css({animation: "blink 2s infinite",
    "@keyframes blink":"0%{ background-color: green; }",
    "@keyframes blink":"15%{ background-color: blue; }",
    "@keyframes blink":"30%{ background-color: brown; }",
    "@keyframes blink":"45%{ background-color: gray; }",
    "@keyframes blink":"60%{ background-color: blue; }",
    "@keyframes blink":"75%{ background-color: yellow; }",
    "@keyframes blink":"90%{ background-color: red; }",
    "@keyframes blink":"100%{ background-color: blue; }",
    })}; */

});


$("p").append("<p>Appending some text</p>");



$(document).ready(function () {
    $("#btn2").click(() => {
        $("#btn2").val("Hello");
    });
});


$(document).ready(() => {
    $("#btn2").click(() => {
        $.ajax({
            url: "file:///home/dci/Desktop/JS/JStest/timing%20.html",
            type: "GET",
            dataType: "text",
            success: (data) => {
                console.log(data);
            },
            error: error => {
                console.log("There ia an error");
            }
        });
    });
});


