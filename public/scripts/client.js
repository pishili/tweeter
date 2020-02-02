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

//     var articleElement = $('<article>')
//                           .attr("id", "article-tweet")
//                           .addClass("tweet");
    
//     var headerElement =  $(<header></header>);
//     headerElement.addClass("tweet-header");

//     var h2Element = $(<h2></h2>);
//     // append headerElement to articleElement
//     articleElement.add(headerElement);

//     var imageElement = $(<img></img>);
//     imageElement.attr("id", "tweet_image").text(tweet.user.name);

//     h2Element.add(imageElement);

//     var h4Element = $(<h4></h4>);
//     h4Element.text(tweet.user.handle);

//     headerElement.add(h2Element);
//     headerElement.add(h4Element);

//     var divElement = $(<div></div>);
//     divElement.text(tweet.content.text);

//     var footerElement = $(<footer></footer>);

//     var timestampParagraphElement = $(<p></p>);
//     timestampParagraphElement.addClass("timestamp").text(tweet.user.created_at);

//     var iconsParagraphElement = $(<p></p>);
//     iconsParagraphElement.addClass("icons");

//     var firstIconElement = $(<i></i>);
//     firstIconElement.addClass("fas fa-flag");
//     var secondIconElement = $(<i></i>);
//     secondIconElement.addClass("fas fa-retweet");
//     var thirdIconElement = $(<i></i>);
//     thirdIconElement.addClass("fas fa-heart");


//     footerElement.add(timestampParagraphElement);
//     footerElement.add(iconsParagraphElement);

// });

$(() => {
  // changed the button to be form
    const $form = $('#tweet-post-form');
    $form.on('submit', function () {
        event.preventDefault();
        const form = $('#tweet-post-form');
        const $text = $(this).find('#tweet_text')
        console.log($text.val()); 
        if ($text.val() === '') {
          // alert('The text is Empty! Fill it with Comments');
          Swal.fire({
            title: 'Error!',
            text: 'The text is Empty! Fill it with Comments',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
          return;
        } 
        if ($text.val().length > 140) {
          // alert('The text Length is more than 140 characters');
          Swal.fire({
            title: 'Error!',
            text: 'The text Length is more than 140 characters',
            icon: 'error',
            confirmButtonText: 'Cool',
          
          })
        } else {
          console.log('Button clicked, performing ajax call...');
          $.ajax('/tweets', { method: 'POST', data: form.serialize() });
          Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
            button: "Aww yiss!",
          })
        }
    });
})


const renderTweets = (tweets) => {
    tweets.forEach(tweet => {
        const tweetMarkup = createTweetElement(tweet);
        // const tweetMarkup = createTweetElementWithAutoFun(tweet);
        // const articleContainer = $(".articleContainer");
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

// $(() => {
  
// });