/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// alert("Welcome to Tweeter Website");
// jquery -> to popularity

// grab the tweet
// console.log($list)
const $list = $('#main-list');
const input = $('#input').val('Hello World! ')

const createTweetElement = (tweetObj) => {
    // grab the tweets
    // get the contents of the input field
    // add the input field to the 
    // 
    const $tweet = document.getElementsByClassName("tweet");
}


const renderTweets = (arrTweetObjects) => {
    // append each tweet object to tweet-container
    arrTweetObjects.map(item, (item) => {
        createTweetElement(item);
    })  
}