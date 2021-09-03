# JavaScript Quiz

You can test your JavaScript skills with this quiz. The test contains 10
questions.

---

## Data

> describe the data used in your project.

We use JSON to store the data and the state of the application; data types are
arrays and objects. Data is stored in an array of objects containing objects and
arrays.

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
- [ ] Design a user story dependencies diagram

This user story is developed on branch `master`

---

## 1. Initialize Application

**As a user I want to see a welcome message and a button to start the quiz**

By accessing the web page, I see a welcome message and a button to start the
quiz

- [ ] Create the index.html and the initial styles.css
- [ ] Add the start button

- This user story is developed on the branch `1-welcome`.  
  This branch is merged into the `master` branch after completion.

---

## 2. Begin the Quiz (one question at a time)

**As a user I want to see the questions**

The user clicks on the start button and goes to question number one

- [ ] The user can see one question at a time, together with the different
      answers

This user story is developed on the branch `2-start-quiz`.  
This branch is merged into the `master` branch after completion.

---

## 3. Select an answer (one question at a time)

**As a user I want to select my answer for each question**

The user sees a list of possible answers from which to choose one; If the
selected answer is correct, the text of the selected answer will be in green,
red otherwise. Maybe we could use a timer that limits the time to select an
answer.

- [ ] Use radio button if there is only one correct answer.
- [ ] Use chekboxes if there is more than one correct answer (optional)
- [ ] The correct answer is displayed in green
- [ ] The wrong answer is displayed in red
- [ ] Implementing a progress bar (optional)

This user story is developed on the branch `3-select-answer`.  
This branch is merged into the `master` branch after completion.

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
