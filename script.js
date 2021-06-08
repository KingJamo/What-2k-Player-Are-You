$(".confirm").click(function() {
    //Store user input in a variable
    let Answer1 = $(".Answer1").val();
    let Answer2 = $(".Answer2").val();

    //Manipulates data using operators (+)
    let message = "<p> You are a " + Answer1 + " and you're " + Answer2 + " at 2k.</p>";

    //Displays the output using .append()
    $(".results").append(message);
});


let number = 85;

$(".confirm").click(function() {
    let Answer1Input = $(".Answer1").val();

    if (Answer1Input === "85") {
        $(".people").hide();

    } else if (".Answer1=== 95 &&.Answer2=== good") {
        $(".people").hide(); $("p").text("you're a sweat");
        
        
        } else if (	".Answer1=== 80 &&.Answer2=== not good") {
            $("p").text("you're a little kid");



    } else if ("99") {
        $(".people").hide();

    }


});