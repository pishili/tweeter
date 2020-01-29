const myCalculator = function() {
    $("#char_counter").text( 140 - $("#tweet_text").val().length );
}


$(document).ready(function() {
    $("#tweet_text").on('keydown', myCalculator);
});

