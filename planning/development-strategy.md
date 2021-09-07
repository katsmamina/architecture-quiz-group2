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
- [ ] await response from 
- [ ] Design a user story dependencies diagram

This user story is developed on branch `planning`

---

## 1. Initialize Application

**As a user I want to see a welcome message and a button to start the quiz**

By accessing the web page, I see a welcome message and a button to start the
quiz

- [ ] Create the index.html and the initial styles.css
- [ ] Add the start button
- [ ] 

- This user story is developed on the branch `1-welcome`.  
  This branch is merged into the `master` branch after completion.

---

## 2. Begin the Quiz (one question at a time)

**As a user I want to see the questions, one at a time, with all answers**

The user clicks on the start button and goes to question number one

- [ ] The user can see one question at a time, together with the different answers

This user story is developed on the branch `2-start-quiz`.  
This branch is merged into the `master` branch after completion.

---

## 3. Select an answer (one question at a time)

**As a user I want to select my answer for each question**

The user can choose an answer by clicking on the div.
After  an answer is selected, the background color of the correct answer's div turns green, and the background color of the incorrect answers' divs turns reddish.

- [ ] 
- [ ] 
- [ ] The correct answer div is displayed in greenish
- [ ] The wrong answers divs are displayed in reddish

This user story is developed on the branch `3-select-answer`.  
This branch is merged into the `master` branch after completion.

#### Business logic
- access 
#### Interface

#### Interaction

---

## 4. View the Score

**As a user I want to see my score** The score is updated in real time at every
answer

- [ ] Increase the score by one after selecting a right answer
- [ ] No increment if the answer is wrong
- [ ] Show the score after each selection

This user story is developed on the branch `4-score`  
This branch is merged to the `master`

---

## 5. Result of the quiz

**As a user I want to see the result of the quiz once it is completed**

Once the quiz is completed the results are shown

- [ ] Display the final score
- [ ] Restart the quiz

This user story is developed on the branch `5-result`  
This branch is merged into the `master` branch after completion.

---
