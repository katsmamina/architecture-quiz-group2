# JavaScript Quiz

You can test your JavaScript skills with this quiz. The test contains 10
questions.

---
## Data

> describe the data used in your project.

We use JSON to store the data and the state of the application; data types are
arrays and objects. Data is stored in an object,
arrays.

```js
{
  "id": integer,
  "question": string,
  "answers": [
    {
    "text": ,
    "correct": boolean,
    "selected": boolean
    } 

    {
    "text": ,
    "correct": boolean,
    "selected": boolean
    } 
  ]    
}
```

- Questions & answers
- Links

---

## Wireframe

[Figma file](https://www.figma.com/file/eYIFLR9HAUiRrNIwgbHyoZ/QuizJs?node-id=0%3A1)

---

## 0.Setup

- [x] Create a [repo](https://github.com/katsmamina/architecture-quiz-group2)
      using the starter template
- [x] Invite members
- [x] Create the github page for the repo
- [x] Clone or fork the repository
- [x] Study and modify the backlog
- [x] Devise a development strategy
- [ ] Design a wireframe to set guidelines for UI/UX design
- [ ] await response from ???
- [ ] Design a user story dependencies diagram

This user story is developed on branch `planning`

---

## 1. Initialize Application

**As a user I want to see a welcome message and a button to start the quiz**

By accessing the web page, user sees a welcome message, rules of the quiz, and the start button.

- [ ] Create the index.html and the initial styles.css
- [ ] Add the content to the starting page

- This user story is developed on the branch `1-start`.  
  This branch is merged into the `master` branch after completion.

#### Interface
*HTML*
- container (div): id = 'container-start', class = 'container-start'
     - quiz logo (img): id = 'logo', class = 'logo'
     - welcome header (h1): id = ''
     - rules description (p): id = 'p-rules', class = 'p-rules'
     - Start button (button): id = 'btn-start', class = 'btn-start'

*CSS*
- style of h1
- style of p-rules
- style of the button

#### Interaction
*Listeners*
- On clicking the Start button, user is sent to questions

---
## 2. See questions of the quiz (one question at a time)

**As a user I want to see the questions, one at a time, with all answers**

The user clicks on the start button and goes to question number one

- [ ] The user can see one question at a time, together with different answers

This user story is developed on the branch `2-quiz`.  
This branch is merged into the `master` branch after completion.

#### Business logic
  <!-- need to check ! -->
- In the json file, access one of the objects with selected id, starting from 1
- Use accessQuestion function

#### Interface
*HTML*
- Header container (div): id = 'quiz-header', class = 'quiz-header'
  - logo container  (div): id = 'logo', class = 'logo'
    - logo (img): class = 'logoJSQ'
- Question (h1): id = 'h1-question', class = 'h1-question'
- Questions container (div): id = 'div-questions-container', class = 'div-questions-container'
  - answer 1 (div): id = 'answer-one', class = 'answer-one'
  - answer 2 (div): id = 'answer-two', class = 'answer-two'
  - answer 3 (div): id = 'answer-three', class = 'answer-three'
  - answer 4 (div): id = 'answer-four', class = 'answer-four'

*CSS*
- Questions are displayed 2x2 
#### Interaction

*Handlers*
- 'hide.js' – hide the name of the quiz, the the description and the start button
- 'display-h1.js' – display in the 'h1-question' the text of the question from json file
- 'display-answers.js' – display the answers of that question one-by-one in divs 'answer-one', 'answer-two', 'answer-three', 'answer-four'

---

## 3. Select an answer (one question at a time)

**As a user I want to select my answer for each question and see the result**

The user can choose an answer by clicking on the correspondent div.
After the answer is selected, the background color of the correct answer's div turns green, and the background color of the incorrect answers' divs turns reddish.

- [ ] User can click on the div of the chosen answer
- [ ] The correct answer div is displayed in greenish
- [ ] The wrong answers divs are displayed in reddish

This user story is developed on the branch `3-select-answer`.  
This branch is merged into the `master` branch after completion.

#### Business logic 
- In the object of the question, find the answer where "correct" equals to true – 'find-true.js'
- Find the answers where 'correct' equals to false – 'find-false.js'
#### Interface

*CSS*
- add new classes:
  - 'correct':  background color – greenish
  - 'incorrect': background-color - reddish
#### Interaction
*Handlers*
- if 'correct' equals to true and 'selected' equals to true, add class 'correct', else => add class 'incorrect'

*Listeners*
- 'choose-listener.js', add event listener to the div, on click

---
## 4. View the Progress

**As a user I want to see how many questions are completed** 

The number of questions answered is displayed above the questions
User can see the total number of questions and the number of answered questions in the format of XX/YY, where XX - number of answered questions, YY - total number of questions

- [ ] Increase the number by one after answering a question
- [ ] Show the progress above each question

This user story is developed on the branch `4-progress`  
This branch is merged to the `master`

#### Business logic
- use 'add' function to increment one number to the XX
- use 'save' to save the result
- define json-answers array length to define the YY number
#### Interface
*HTML*
- progress (div) inside the header: id = 'progress', class = 'progress'
  - numbers (p): id = 'p-progress', class = 'p-progress'
  
*CSS*
- style for the progress div 
- style for numbers (paragraph)
#### Interaction
*Handlers*
- show the first number 
- show the second number 
  
*Listeners*
- the event is triggered by clicking on one of the 'answer' divs

---
## 5. Next question

**As a user I want to proceed to the next question**

When I click the 'next' button, I proceed to the next question of the quiz

- [ ] Next question and the variants of the answer are shown

This user story is developed on the branch `5-next`  
This branch is merged into the `master` branch after completion.

#### Business logic
- increment the id of the question by using 'add.js' of business-logic
- access the question and answers of the new id
#### Interface
*HTML*
- button 'next': id = 'btn-next', class = 'btn-next'
  
*CSS*
- style of the button

#### Interaction
*Handlers*
- reset the current question;
- display in the 'h1-question' the text of the new question from json file 
- display the answers of the new question one-by-one in divs 'answer-one', 'answer-two', 'answer-three', 'answer-four'
  
*Listeners*
- add listeners to the 'next' button with 'click'

---
## 6. Result of the quiz

**As a user I want to see the result of the quiz once it is completed**

Once the quiz is completed the results are shown

- [ ] Display the final score and the number of questions in the format 'XX/YY', where XX is the number of correct answers, and YY is the full number of questions

This user story is developed on the branch `6-result`  
This branch is merged into the `master` branch after completion.

#### Business logic
- access the number of correct questions  <!-- how? -->
- access the array length of the json file to define the full number of questions

#### Interface
*HTML*
- added with the handlers
  
*CSS*

#### Interaction
*Handlers*
- hide the question and the answers from the previous questions
- hide the progress div
- add paragraph showing the results

---
## 7. Restart the quiz

**As a user I want to be able to restart the quiz once it is completed**

- [ ] Restart the quiz

This user story is developed on the branch `7-restart`  
This branch is merged into the `master` branch after completion.

#### Business logic
- reset the score
- reset the progress
- access the question with id = 1 from 'data.json' 
#### Interface
*HTML*
- 'Restart' button (button): id = 'btn-restart', class = 'btn-restart';

*CSS*
- style of the button 
#### Interaction
*Handlers*
- display the first question with answers
- display zero in the progress
- display zero in results
  
*Listeners*
add listener (click) to the 'restart' button

---
## 8. View the result while completing the quiz (optional)

- [ ] Increase the score by one after selecting a right answer
- [ ] No increment if the answer is wrong
- [ ] Show the score after each selection, above the questions

#### Business logic
- use add.js to increment the first number if the answer is correct
- use save.js to save the result of the first number
- to define the second number, access json-answers array length
#### Interface
*HTML*
- div: id = 'liveScore', class = 'liveScore';

*CSS*
- style the text in the div

#### Interaction
*Handlers*
- display the number of correct answers