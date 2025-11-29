# assignment-week2

A responsive photo gallery

# Image sources:

pexels.com

# Reflections:

I managed to set up the functions for rendering thumbnail images from an array into the thumbnail container,and for rendering a selected image in fullscreen on thumbnail click fairly easily, with no real sticking points. I have definitely improved in confidence with DOM manipulation this week and have definitely improved my approach to project work, as this week I put aside most ideas that were not important aspects of the assignment and focussed on the key areas in an appropriate order, breaking each down into basic steps as I went.

I tried to implement scroll buttons at either end of the thumbnail container, but could not achieve the desired scroll behaviour, so removed these in the interest of focussing on other more important aspects of the page. I was initially unable to implement the key binding function for the arrow keys (a stretch goal I specifically wanted to achieve), but came back to this after getting the rest of the page in place and got it working eventually through a various further research, itteration and testing. The main hurdle with this was understainding that to make the function work the way that made sense to me, I had to capture the current fullscreen image's ID in a variable before that image was removed, so that it could be used to define the index of the next image, based on the direction key used. I also discovered the need to make the arrow keys do nothing if the user tries to key left from the first image in the array, or right form the last, as this caused an error.

I also added an aria-label to my div that acts as a scrollable thumbnail container. I later added guidance othe aria-label on navigating the page, as the Windows built-in screen reader would not read out the H1 element that contains that guidance for some reason. If this was inappropriate use of the ARIA tag please include this in feedback!

Image optimisation reduced image load from approx 30mb to approx 5mb, with lightthouse optinmisation rating improved from around 75% to 98%, even with additional images added later. When checking acesssibility with WAVE, no issues were found (a result of the page being quite minimal), apart from yellow alerts for not having a heading structure. Any feedback on whether this was the right decision would be appreciated.

I failed to keep a note of the artist to credit as I was downloading images from pexels.com, so was nable to credit them individually. I will be careful to do this properly in future.

At the very end, I added an animated text box to display on load, then fade out, using CSS. This was intended to directb users to use either arrow keys or their mouse to navigate. This caused a contrast error when testing with WAVE, though this only triggered once the animation had faded out the text, so I don't think is an issue.

Overall, I had little trouble meeting the basic requirements and matching the user stories, as I have built a good understanding of grid and media queries, although I still need to improve a bit with understanding flexbox behaviours. I am pleased with the functionality and look of my page, and I'm satisfied with the accessability, but for any imporvements I could have made in this area, please let me know.
