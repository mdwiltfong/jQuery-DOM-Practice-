// When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”

$('document').ready(function (){
    console.log(`Let's get ready to party with jQuery`)
})

/*Give all images inside of an article tag the 
class of image-center (this class is defined inside of the style tag in the head). */

$('article img').addClass('image-center')

//Remove the last paragraph in the article

$('article p:last').remove();

//Set the font size of the title to be a random pixel size from 0 to 100.
$('#title').css('font-size',`${Math.floor(Math.random()*100)}`)

//Add an item to the list; it can say whatever you want.

$('ol').append('<li>The puppy is also in a cup! WOW</li>')