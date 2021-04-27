// console.log("JS rendered successfully");
/* * 

1.Adding out the event listener for the whole window for the scroll event
2.Getting out the images through required DOM selector
3.Looping through the images and declaring some mathemetical stuffs related to image's halfway height
and entire window's scroll position
4.Checks for validating the scroll position at the half way of the image and the bottom most
height of the image
5.Adding the class when it half on the way and removing the class when the scroll position reaches the bottom 
height of the image

* */

// Debouncing

function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };

const images = document.querySelectorAll('.slide-in');
const slideInAndOut = (e) => {
	// console.count(e)
	images.forEach(image => {
		const slideIn = (window.scrollY + window.innerHeight) - (image.height / 3);
		const slideOut = image.offsetTop + image.height;
		slideIn > image.offsetTop && window.scrollY < slideOut ? image.classList.add('active') : image.classList.remove('active');
	})
}
window.addEventListener('scroll',debounce(slideInAndOut,500));
