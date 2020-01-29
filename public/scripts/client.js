/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// alert("Welcome to Tweeter Website");


const createTweetElement = (tweetObj) => {
    // using jquery to construct new elements using $
    const $tweet = $("<article>").addClass("tweet");

    const article = document.getElementsByTagName("article");
    console.log(article);

}


const renderTweets = (arrTweetObjects) => {
    // append each tweet object to tweet-container
    

}