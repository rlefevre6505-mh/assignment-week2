# assignment-week2

A responsive image gallery

# Image sources:

-pexels.com

# Please also provide an assignment reflection in your project README.md file.

Required
🎯 What requirements did you achieve?
🎯 Were there any requirements or goals that you were unable to achieve?
🎯 If so, what was it that you found difficult about these tasks?
Optional
🏹 Feel free to add any other reflections you would like to share about your submission, for example:

Requesting feedback about a specific part of your submission.
What useful external sources helped you complete the assignment (e.g Youtube tutorials)?
What errors or bugs did you encounter while completing your assignment? How did you solve them?
What went really well and what could have gone better?

# Reflections:

I managed to set up the functions for rendering thumbnail images from an array into the thumbnail container and for rendering a selected image in fullscreen on thumbnail click fairly easily, with no real sticking points. I have definitely improved in confidence with DOM manipulation this week and have definitely improved my approach to project work, as this week I put aside most ideas that were not important aspects of the assignment and focussed on the key areas in an appropriate order, breaking each down into basic steps as I went.

I tried to implement scroll buttons at either end of the thumbnail container, but could not achieve the desired scroll behaviour, so removed these in the interest of focussing on other more important aspects of the page. I also attempted to implement a keydown eventlistener for image scrolling using arrow keys, but was unable to make this work, possibly due to the way I had implemented rendering of the fullscreen images.

As i was unable to implement the key binding function for the arrow keys, I opted to ad an ARIA label to the thumbnail container div, which tells the user what it is, and also guides that arrow keys can be used to scroll the thumbnials, using eneter to select and image for fullscreen viewing. This may not be an appropriate ue of the aria-description tag, but I could not find another suitable ARIA option for providing guidance on how to navigate the thumbnail scroller using keys only. Any guidance on this would be appreciated!

I would also like some feedback on whether there was something obviously wrong with the my code for the keydown event listener function I had started working on, so have left that code commented out for now at the bottom of the JS file. I wanted to output the id

#

Image optimisation reduced image load from approx 30mb to approx 5mb, with lightthouse optinmisation rating remained around 75% once additional images were added. When checking acesssibility with WAVE, no issues were found (a result of the page being quite minimal), apart from yellow alerts for not having a heading structure. I did look at adding a h1 element that could be hidden behind the rest of the page, but did not think this would have actually achieved anything to improve accessibility. Any feedback on whether this was the right decision wouod be appreciated.

I failed to keep a note of the artist to credit as I was downloading images from pexels.com, so was nable to credit them individually. I will be careful to do this properly in future.

Overall, I had little trouble meeting the basic requirements and matching the user stories, as I have built a good understanding of grid and media queries, although I still need to improve with flexbox. However, I was not satisfied with the functionality of the page when using keys only to select images from the thumbnial container. Fopr a stretch goal I opted only to implement ARIA in the end, as we had been guided to avoid using srcset and I had been unable to implement a functiuon for selecting next or previous images just wiht arrow keys.
