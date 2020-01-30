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



const createTweetElement = (tweetObj) => {
    // create element
    return `
        <article class="tweet" id="article-tweet">
        <header class="tweet-header">
            <h2>
            <img id="tweet_image" src="./images/avator_header.png">
                ${tweetObj.user.name}
            </h2>

            <h4>${tweetObj.user.handle}</h4>    
        </header>

        <div>
        <p>${tweetObj.content.text}</p>
        </div>

        <footer>
            <p class="timestamp">${tweetObj.created_at}</p>
            <p class="icons">
            <i class="fas fa-flag"></i>
            <i class="fas fa-retweet"></i>
            <i class="fas fa-heart"></i>
            </p>
        </footer>
        </article>`
}

console.log(createTweetElement(tweetData));


const renderTweets = (arrTweetObjects) => {

    arrTweetObjects.forEach(tweetObj => {
        const tweetMarkup = createTweetElement(tweetObj);
        const container = $(".container");
        console.log(container);
        $( ".container" ).append(tweetMarkup);
        $( ".container" ).append("YOOooooooOOOO");
    });
}


console.log(renderTweets(data));