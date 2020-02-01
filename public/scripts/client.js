/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = ((tweet) => {
    // const $username = $('<h2>').text(tweet.user.name);
    // const $userhandle = $('<h4>').text(tweet.user.handle);
    // const $tweetContent = $('<p>').text(tweet.content.text);
    // const $header = $('<p>')
    //     .text($username);
    // const $footer = $('<p>')
    //     .text(tweet.created_at)
    //     .addClass('footer');

    // const tweetCreatedAt = $('<p>').text(tweet.content.text);
    return `

    
    <article class="tweet" id="article-tweet">
    <header class="tweet-header">
      <h2>
      <img id="tweet_image" src="./images/avator_header.png">
          ${tweet.user.name}
      </h2>

        <h4>${tweet.user.handle}</h4>    
    </header>

  <div>
    <p>${tweet.content.text}</p>
  </div>

    <footer>
      <p class="timestamp">${tweet.user.created_at}</p>
      <p class="icons">
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
      </p>
    </footer>
  </article>
    `;
});


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




const renderTweets = (tweets) => {
    tweets.forEach(tweet => {
        const tweetMarkup = createTweetElement(tweet);
        const container = $(".container");
        console.log(container);
        $(".container").append(tweetMarkup);
        // $(".container").append("YOOooooooOOOO");
    });
}



// fetching tweets from the http://localhost:8080/tweets page
const loadTweets = () => {

    $.ajax('http://localhost:8080/tweets', { method: 'GET' })
        .then((data) => {
            console.log(data);
            renderTweets(data);
        });
}


loadTweets();
