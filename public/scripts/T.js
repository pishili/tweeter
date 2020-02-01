const $button = $('#tweet-button');
const $form = $('#tweet-post-form');

$button.on('click', function() {
    event.preventDefault();
    $form.on('click', function(event) {
        event.preventDefault();
        console.log( $(this).serialize() );
        $.ajax('/tweets', { method: 'POST', data: })
    })
})