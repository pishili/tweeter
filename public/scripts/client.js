/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// manually putting article class
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

// const createTweetElementWithAutoFun = ((tweet) => {
//   const htmlFile = '';
//   $(htmlFile).addClass("<h2>");
//   this.addClass('h2');
  // let articleElement = $('<article>').addClass('tweet');
  // articleElement.add('header').add('h2')
  

  // var headerElements = $('<h1>').addClass('header');

  // var element1 = $(<u></u>);
  // headerElements.add(element1);

// }

$(() => {
  // changed the button to be form
    const $form = $('#tweet-post-form');
    $form.on('submit', function () {
        event.preventDefault();
        const form = $('#tweet-post-form');
        const $text = $(this).find('#tweet_text')
        console.log($text.val()); 
        if ($text.val() === '') {
          alert('The text is Empty! Fill it with Comments');
          return;
        } 
        if ($text.val().length > 140) {
          alert('The text Length is more than 140 characters');
        }
        
        console.log('Button clicked, performing ajax call...');
        $.ajax('/tweets', { method: 'POST', data: form.serialize() });
    });
})



// using createTweetElement function to create element
const renderTweets = (tweets) => {
    tweets.forEach(tweet => {
        const tweetMarkup = createTweetElement(tweet);
        const container = $(".articleContainer");
        $(".articleContainer").prepend(tweetMarkup);
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
