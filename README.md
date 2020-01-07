# FriendFinder
An Express app to help you find people with similar interests

## Technologies used:
Visual Studio Code, Node Package Manager, Path package, Express package, local server port, jQuery, Bootstrap, Heroku.

## Summary:
The Friend Finder app is the go-to app to find your new friend! Answer a survey of ten questions and the backend logic will find a new friend for you. The application is meant to showcase my learning of Express.js, routing, and setting up/using a local server. The app is also an experimentation in discovering what can be accomplished with API data and how objects and array data (particularly with the use of "for loops") can be used to accomplish logistical goals. Enjoy taking the quiz, and say 'hi' to your new friend!

## What I Learned:

1. How to create a nested for loop for two different arrays. During my research on this I learned how you can extract all elements out of a multi-dimensional array.

2. I created my own logic for determining who would be the user's closest match using  else/else if statements.

3. Learned new Javascript methods such as 'Math.abs()' and eval(().

4. Used my first modal ever via Bootstrap and was able to get it to append object data from the "Friends" array stored in the friends.js file.

5. Further knowledge of using console.log() to check if functions are working correctly/fixing bugs along the development path.

6. Setting up HTML and API routes via GET methods and using the path package for routing.

7. How to deploy an app onto Production via Heroku!

## Steps:
1. I first analyzed the demo of the working application provided to us and went to Bootstrap and grabbed the component assets needed for the application. 

2. Filled in text UI and wrote questions and answer selection choices from 1-5. 

3. Found license-free images for our "friends".

4. Spent around 15-20 hours researching Express through YouTube videos, and watched videos/researched how to implement a solution for retrieving both user scores and scores from the API list so that a comparison could be made. In addition, I looked into the 'math.abs' so that the user scores API scores would be absolute value integers.

5. I created my own logic via conditional statements to compare absolute value scores with one another so that a friend could be best determined. 

## Sources: 
My tutor Ryan, my TAs Cesar and Roger, Youtube: (https://www.youtube.com/watch?v=L72fhGm1tfE), (https://www.youtube.com/watch?v=6m6QWuhLGZc), (https://www.youtube.com/watch?v=5nL7X1UMWsc&t=267s), sites: (https://www.quora.com/How-do-I-sum-the-numbers-in-my-array-in-JavaScript), (https://www.geeksforgeeks.org/javascript-eval-function/), (https://www.w3schools.com/jsref/jsref_abs.asp), (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs), (https://stackoverflow.com/questions/8013792/how-to-create-a-new-img-tag-with-jquery-with-the-src-and-id-from-a-javascript-o), Bootstrap documentation, class activities solutions.

## Screenshots and Gifs

## Homepage of Friend Finder
![Screenshot of index page](https://github.com/demonaco/FriendFinder/blob/master/assets/images/Screen%20Shot%202020-01-06%20at%209.59.12%20PM.png?raw=true)

## Survey results:
![Gif of finding your new friend!](https://github.com/demonaco/FriendFinder/blob/master/assets/images/survey.gif)

## HTML Routing
![Code snippet of HTML routing](https://github.com/demonaco/FriendFinder/blob/master/assets/images/Screen%20Shot%202020-01-06%20at%2010.16.44%20PM.png?raw=true)

## Logic snippet for determining friend result
![Code snippet](https://github.com/demonaco/FriendFinder/blob/master/assets/images/Screen%20Shot%202020-01-06%20at%2010.08.36%20PM.png?raw=true)

## Setting up express, our dependencies, and our local server
![Code snippet](https://github.com/demonaco/FriendFinder/blob/master/assets/images/Screen%20Shot%202020-01-06%20at%2010.22.41%20PM.png?raw=true)
