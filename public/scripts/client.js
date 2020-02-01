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
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]


const createTweetElement = (tweet, moutPoint) => {
    // tweetObj.forEach((tweet) => {
        const $username = $('<h2>').text(tweet.user.name);
        const $userhandle = $('<h4>').text(tweet.user.handle);
        const $tweetContent = $('<p>').text(tweet.content.text);
        const $header = $('<p>')
            .text($username);
        const $footer = $('<p>')
            .text(tweet.created_at)
            .addClass('footer');

        const tweetCreatedAt = $('<p>').text(tweet.content.text);
    // })
}

// console.log(createTweetElement(tweetData));
function outputTweets(data) {
  output.innerHTML = '';
  data.forEach((item, i) => {
    console.log(item);
    let hyper = `<a
            `
  })
}

// 
const renderTweets = (tweets) => { 
  tweets.forEach((tweet) => {
    // tweet text
    const $TweetText = $('');

  })

}

// fetching tweets from the localhost/tweets
const loadTweets = function() {
  // fetching tweets 
  
  const $button = $('#load-more-posts');
  // const $button = $('')
  
  $.ajax('http://localhost:8080/tweets', { method: 'GET' })
  .then(function (data) {
    console.log(data);
    //next step we need to call render tweets with the the new data
    renderTweets(data);

  });
}

// const renderTweets = function(data) {
//   output.innerHTML = '';
//   data.forEach((item, i) => {
//     console.log(item);
//     let form = document.createElement('form');
//     let span = document.createElement('span');
//     const btn = document.createElement('button');
//     btn.textContent = "press me";
//     document.body.appendChild(btn);
//     btn.addEventListener('click', () => {
//       fetchData("https://sw")
//     })
    
//     // span.innerHTML = `${}`
//   })
//   data.forEach(console.log(data));
// }

$(document).ready(() => {
  loadTweets();
  const $button = $('#tweet-button');
  const $form = $('#tweet-post-form');
  $button.on('click', function () {
    event.preventDefault();
    console.log('Button clicked, performing ajax call...');
    $form.on('click', function (event) {
      event.preventDefault();
      console.log( $( this ).serialize() ); 
      $.ajax('/tweets', { method: 'POST', data: $(this).serialize() })
    });
  });
})