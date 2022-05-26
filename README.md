# Learn2Math

Welcome to Learn2Math, an original MERN stack website designed to allow users to view and create study tools
to assist in learning algebra and geometry.

[picture goes here]

[Live Link](https://learn2math.herokuapp.com/#/)

## Table of Contents
* Technologies Used
* Features
* Future Plans

## Technologies Used
* Back End: Node.js, MongoDB, Mongoose, Express.js
  * The data being sent and received was stored as non-relational data on MongoDB's cloud service.
  * Utilizing the Mongoose library, data manipulation can be easily achieved where necessary, whereas, user authentication is
    handled via the use of tokens.
  * Node and Express allowed the server to be set up without the need of a massive boilerplate skeleton
    and thus, simplified much of the API setup.
* Front End: Reactjs, Redux
  * Reactjs with Redux made up the majority of the framework in the front end. React allowed fast rendering of components,
    while the front end data can be easily accessed and manipulated via the Redux global store.
  * Navigation of webpages are simplified through the use of components such as the navbar which exists on all pages of 
    the application
* Others: Quilljs, Webpack, Babel, Javascript
  * Quilljs is a rich text editor, which gives a friendly user-interface for users to write out their lessons and attach images.
  * Webpack and Babel handled compiling ES6 javascript syntax to a backwards compatible version of javascript code.

## Features

### User Authentication
* Users are able to signup, login, and log out of our application.
* The email and password validation are handled through our backend and render errors if there are any.

### Lessons
* Users can create their math lessons using the rich text editor on the create lesson page
* After creating the lesson, users are able to return to that lesson to edit or remove the lesson.
* Other Users can view a created lesson with the edit and delete buttons hidden.
* A create quiz button will be available to the creator of the lesson to add questions to a quiz.
* A take quiz button will be available to other users who wish to take the quiz on the lesson.
![create_lesson](https://user-images.githubusercontent.com/97995278/170572880-9b29b836-a2a0-42f4-b043-f12c7a65cbce.png)



### Quizzes
* Quizzes are automatically created when users create a lesson.
* Quizzes will initially be empty and the creator of the lesson can add questions to the quiz.
* Others users can take a quiz and will be presented a score along with the correct answers to
  each question once they submit the quiz.
![create_question](https://user-images.githubusercontent.com/97995278/170572928-75f7e4fb-f898-443d-bb1f-a54c152b2444.png)
![quiz_code_snippet](https://user-images.githubusercontent.com/97995278/170572939-bd4ba783-201c-44a4-8f49-c463e4e8d4a0.png)


### User Profile
* Users can access their profiles using the left navbar.
* They can also access others profiles by clicking on another's lesson and click their username.
* User's profile page will include their profile picture, their username, and a link to their flashcards.
* It will also include all the lessons the user had created and a list of all quizzes they have taken along with their score.
![user_profile](https://user-images.githubusercontent.com/97995278/170573687-8c38f6bd-c764-4fb5-a218-568adef3e2cf.png)

### Flashcards
* Users are able to create flashcards and view them later on.
* Flashcards will have their definition side hidden until the flashcard is clicked.
* Users can also edit and delete specific flashcards.
* Other users can view an user's flashcard but will not have the option to edit or delete
![flashcards](https://user-images.githubusercontent.com/59910096/170572201-42fbf81a-005e-4b9d-a39e-e19e50b52cf8.gif)
![toggle_flashcard](https://user-images.githubusercontent.com/97995278/170573815-cdd9e915-0c64-496f-9bcc-c1f3d3694ed2.png)



### Search
* The search bar on the main page will allow users to filter lessons by its title.
* The filter is not case sensitive.
![search-gif](https://user-images.githubusercontent.com/59910096/170565977-9f76f24b-2e4e-4f81-844f-5bf404b7d25e.gif)


![image](https://user-images.githubusercontent.com/97995278/170573910-336ecfab-e1ac-4605-ba5e-75f353c46fc4.png)


## Future Plans
* Add a search function to search users along with lessons.
* Have a web socket to live stream a lesson.
* Have a user's index page which lists other users.
* Utilizing AWS to store pictures instead of MongoDB.
* Allow users to upload their own profile pictures.


