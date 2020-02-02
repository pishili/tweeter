
const myCalculator = () => {
    const counter = 140 - $("#tweet_text").val().length;
    if (counter >= 0 && counter <= 140) {
        $("#char_counter").text(counter);
        $("#char_counter").css('color', 'black');
    } else if (counter < 0) {
        $("#char_counter").text(counter);
        $("#char_counter").css('color', 'red');
    }

}

$(document).ready(function() {
    $("#tweet_text").on('keyup', myCalculator);
});

