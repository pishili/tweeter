/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
    "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
    },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
}

const data = [
    {
        "user": {
            "name": "Newton",
            "avatars": "https://i.imgur.com/73hZDYK.png"
            ,
            "handle": "@SirIsaac"
        },
        "content": {
            "text": "If I have seen further it is by standing on the shoulders of giants"
        },
        "created_at": 1461116232227
    },
    {
        "user": {
            "name": "Descartes",
            "avatars": "https://i.imgur.com/nlhLi3I.png",
            "handle": "@rd"
        },
        "content": {
            "text": "Je pense , donc je suis"
        },
        "created_at": 1461113959088
    }
]


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

// const loadTweets = function () {
//     const $button = $('#load-more-posts');
//     $.ajax('http://localhost:8080/tweets', { method: 'GET' })
//         .then(function (data) {
//             console.log(data);
//         });
// }


    // (() => {
    //     const $button = $('#load-more-posts');
    //     $button.on('click', function () {
    //         event.preventDefault();
    //         console.log('Button clicked, performing ajax call...');
    //         $.ajax('more-posts.html', { method: 'GET' })
    //             .then(function (morePostsHtml) {
    //                 console.log('Success: ', morePostsHtml);
    //                 $button.replaceWith(morePostsHtml);
    //             });
    //     });
    // });

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

console.log('akdad');

