const myCalculator = function() {
    const counter = 140 - $("#tweet_text").val().length;
    if (counter >= 0) {
        $("#char_counter").text( 140 - $("#tweet_text").val().length);
    } else {
        console.log('print red');
    }
}


$(document).ready(function() {
    $("#tweet_text").on('keydown', myCalculator);
});

