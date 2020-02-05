/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
//added


//controls the animation to show or hide the tweet form
const toggleTweetForm = function () {

    const $tweetForm = $("#tweet-post-form");
    const arrowIcon = $("#arrowicon");

    if ($tweetForm.is(":hidden")) {
        $tweetForm.slideDown();
        arrowIcon.text("⇧");
    } else {
        $tweetForm.slideUp();
        arrowIcon.text("⇩");
    }
};


$(() => {

    //modifies pulldown icon to allow user to toggle form
    $("#arrowicon").click(toggleTweetForm);

});


const createTweetElement = ((tweet) => {

    return `

    <article class="tweet" id="article-tweet">
    <header class="tweet-header">
      <img class="tweet-avator" src="${tweet.user.avatars}">
      <span class='tweet-user-name'>${tweet.user.name}</span>
      <span class='tweet-handle'> ${tweet.user.handle}</span>
    </header>

  <div>
    <p>${tweet.content.text}</p>
  </div>

    <footer>
      <p class="timestamp">moment(${tweet.created_at}).fromNow()</p>
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
    const $form = $('#tweet-post-form');
    $form.on('submit', function () {
        event.preventDefault();
        const form = $('#tweet-post-form');
        const $text = $(this).find('#tweet_text')
        console.log($text.val());
        if ($text.val() === '') {
            Swal.fire({
                title: 'Error!',
                text: 'The text is Empty! Fill it with Comments',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
            return;
        }
        if ($text.val().length > 140) {
            Swal.fire({
                title: 'Error!',
                text: 'The text Length is more than 140 characters',
                icon: 'error',
                confirmButtonText: 'Cool',

            })
        } else {
            console.log('Button clicked, performing ajax call...');
            $.ajax('/tweets', { method: 'POST', data: form.serialize() })
                .then(() => new Promise((resolve) => setTimeout(resolve, 1000)))
                .then(() => {
                    loadTweets()
                })
                .then(() => {
                    Swal.fire({
                        title: "Good job!",
                        ext: "You clicked the button!",
                        icon: "success",
                        button: "Aww yiss!",
                    });
                });
        }
    });
});


const renderTweets = (tweets) => {
    tweets.forEach(tweet => {
        const tweetMarkup = createTweetElement(tweet);
        console.log("called");
        $(".articleContainer").prepend(tweetMarkup);
    });
}


// fetching tweets from the http://localhost:8080/tweets page
const loadTweets = () => {

    return $.ajax('http://localhost:8080/tweets', { method: 'GET' })
        .then((data) => {
            console.log(data);
            renderTweets(data);
        });
}

$(() => {
    var x = document.getElementsByClassName("slider");
    if (x.style.display === "done") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
})

loadTweets();
