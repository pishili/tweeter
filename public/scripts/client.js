/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = ((tweet) => {
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



// using createTweetElement function to create element
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
