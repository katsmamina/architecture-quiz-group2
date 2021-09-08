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

- This user story is developed on the branch `1-welcome`.  
  This branch is merged into the `master` branch after completion.

#### Interface
*HTML*
- container (div): id = 'container-start', class = 'container-start'
     - quiz logo (img): id = 'img-logo-start', class = 'img-logo-start'
     - welcome header (h1): id = ''
     - rules description (p): id = 'p-rules', class = 'p-rules'
     - Start button (button): id = 'btn-start', class = 'btn-start'

*CSS*
- style of h1
- style of p-rules
- style of button

#### Interaction
*Listeners*
- On clicking the Start button, user is sent to next page

---
## 2. See questions of the quiz (one question at a time)

**As a user I want to see the questions, one at a time, with all answers**

The user clicks on the start button and goes to question number one

- [ ] The user can see one question at a time, together with different answers

This user story is developed on the branch `2-quiz`.  
This branch is merged into the `master` branch after completion.

#### Business logic
- In the json file, access one of the objects with selected id (?)
#### Interface
*HTML*
- Header container (div): id = 'div-quiz-header', class = 'div-quiz-header'
  - quiz logo (img): id = 'img-logo-quiz', class = 'img-logo-quiz'
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
- the text of the question from json file is displayed in 'h1-question' 
- the answers are displayed one-by-one in divs 'answer-one', 'answer-two', 'answer-three', answer-four'

---

## 3. Select an answer (one question at a time)

**As a user I want to select my answer for each question and see the result**

The user can choose an answer by clicking on the correspondent div.
After the answer is selected, the background color of the correct answer's div turns green, and the background color of the incorrect answers' divs turns reddish.

- [ ] user can click on the div of the chosen answer
- [ ] The correct answer div is displayed in greenish
- [ ] The wrong answers divs are displayed in reddish

This user story is developed on the branch `3-select-answer`.  
This branch is merged into the `master` branch after completion.

#### Business logic
- access 
#### Interface
*HTML*

*CSS*
- style 
#### Interaction
*Handlers*

*Listeners*
---

## 4. View the Progress

**As a user I want to see how many questions are completed** 

The number of questions answered is displayed above the questions. 
User can see the total number of questions and the number of answered questions in the format of XX/YY, wherre XX - number of answered questions, YY - total number of questions

- [ ] Increase the score by one after selecting a right answer
- [ ] No increment if the answer is wrong
- [ ] Show the score after each selection

This user story is developed on the branch `4-score`  
This branch is merged to the `master`

#### Business logic
- access 
#### Interface
*HTML*

*CSS*

#### Interaction
*Handlers*

*Listeners*

---

## 5. Result of the quiz

**As a user I want to see the result of the quiz once it is completed**

Once the quiz is completed the results are shown

- [ ] Display the final score
- [ ] Restart the quiz

This user story is developed on the branch `5-result`  
This branch is merged into the `master` branch after completion.

#### Business logic
- access
- 
#### Interface
*HTML*

*CSS*

#### Interaction
*Handlers*

*Listeners*

---



#### Business logic
- access 
#### Interface
*HTML*

*CSS*

#### Interaction
*Handlers*

*Listeners*



#### Business logic
- access 
#### Interface
*HTML*

*CSS*

#### Interaction
*Handlers*

*Listeners*


- [ ] Increase the score by one after selecting a right answer
- [ ] No increment if the answer is wrong
- [ ] Show the score after each selection