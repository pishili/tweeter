/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = (tweetObj, moutPoint) => {
    tweetObj.forEach((tweet) => {
        const $username = $('<h2>').text(tweet.user.name);
        const $userhandle = $('<h4>').text(tweet.user.handle);
        const $tweetContent = $('<p>').text(tweet.content.text);
        const $header = $('<p>')
            .text($username);
        const $footer = $('<p>')
            .text(tweet.created_at)
            .addClass('footer');

        const tweetCreatedAt = $('<p>').text(tweet.content.text);
    })
}

// console.log(createTweetElement(tweetData));


// const renderTweets = (arrTweetObjects) => {

//     arrTweetObjects.forEach(tweetObj => {
//         const tweetMarkup = createTweetElement(tweetObj);
//         const container = $(".container");
//         console.log(container);
//         $( ".container" ).append(tweetMarkup);
//         // $( ".container" ).append("YOOooooooOOOO");
//     });
// }

// promise syntax for Ajax .done and .fail instead of .success and
// they are returning jQuery Promises. 
// getJSON();
// Either passing the callback
// Post.userID. 
// $.getJSON('')


// const submitForm = () => {


// }

// const renderTweets = (data) => {
//     data === Array;
//     data.forEach(() => {
//         // 
//     });
// };


    $(() => {
    console.log('test');
    const $button = $('#tweet-button');
    $button.on('click', function () {
        event.preventDefault();
        const form = $('#tweet-post-form');
        console.log('Button clicked, performing ajax call...');
        console.log(form.serialize());
        $.ajax('/tweets', { method: 'POST', data: form.serialize() });
    });
})

// fetching tweets from the http://localhost:8080/tweets page
const loadTweets = () => {
    const $button = $('#load-more-posts');
    $.ajax('http://localhost:8080/tweets', { method: 'GET' })
        .then(function (data) {
            // let dataJSON = JSON.parse(data);
            console.log(data);
        });
}

loadTweets();



