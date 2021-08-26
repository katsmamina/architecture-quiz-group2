---
name: code review PR
about: A template PR for contributing to this project
---

<!--
  make this PR easy to find:

  - assign yourself
  - link it to an issue
  - milestones
  - request a review
-->

## Checklists

- [ ] All CI checks pass
- [ ] The branch works when you pull it and run it locally

<!--
  here are some more specific checklists for different types of code

  you can delete the checklists that don't apply to your PR
-->

### HTML

- [ ] the code is well-formatted
- [ ] there are no inline styles (example: `style='color: red;'`)
- [ ] there are no `<style>` tags with CSS, all styles are hrefs
- [ ] there is no inline JavaScript (example: `onclick='doSomething()'`)
- [ ] there are no `<script>` tags with JS, all JS is in an separate file
- [ ] `id`s are used for JavaScript only, not for CSS
- [ ] semantic tags are used
- [ ] ARIA labels are used where necessary
- [ ] spelling and grammar is correct in all site content

### CSS

- [ ] the code is well-formatted
- [ ] the code does not use any `#` id's
- [ ] styles are responsive

#### JSON

- [ ] the JSON is valid, no syntax mistakes
- [ ] the schema matches the data

### JavaScript

- [ ] code is clean and easy to read
- [ ] helpful variable names are used
- [ ] all comments are clear and help to understand the code
- [ ] there is no unused code in comments
- [ ] all file names are helpful and match their exports

#### /utils

- [ ] the function has a complete and correct JSDoc comment
- [ ] the function name matches the file name
- [ ] other functions from `/utils` may be imported and called
- [ ] the function _does not_ read or write to the DOM
- [ ] the function _does not_ log to the console
- [ ] each logic function has a `.spec.js` file
  - [ ] tests are simple with no extra code
  - [ ] tests are well-named
  - [ ] tests cover common use cases (bonus for edge cases)
  - [ ] tests check for side-effects (if necessary)

#### /business-logic

- [ ] can import from _data-access_, _utils_ or _business-logic_
- [ ] does not interact with the user (no DOM, no prompt/alert/confirm)
- [ ] has a unit test `.spec.js` file using `beforeEach`

#### /presentation/init

- [ ] there is an `index.js` that is included by the `index.html` file
- [ ] `../listener` functions are imported and called
- [ ] there is no code that needs to run _after_ the page is initialized
- [ ] any other files have helpful names

#### /presentation/listeners

- [ ] the DOM can be queried to find elements
- [ ] the DOM _is not_ be modified
- [ ] handlers are imported and used as callbacks to event listeners
- [ ] only _utils_ and _handlers_ may be imported
- [ ] the file name makes sense for the listener

#### /presentation/handlers

- [ ] handlers have a JSDoc comment
- [ ] the function name matches the file name
- [ ] handlers are used as a callback to `.addEventListener` somewhere in the
      program
- [ ] functions from `/utils`, `/components`, `/business-logic` or `/handlers`
      may be imported
- [ ] functions from `/handlers` may be imported and attached to the DOM with
      event listeners
- [ ] data from `/data.js` may be imported and used
- [ ] handlers may read and write to the DOM
- [ ] handlers _do not_ return values that you will need later in the program

#### /presentation/components

- [ ] A DOM element is returned
- [ ] handlers can be imported and used as callbacks to event listeners
- [ ] _utils_, _components_ and _custom events_ can be imported
- [ ] each component has a `.test.html` file
- [ ] bonus points for a unit test `.spec.js` file

#### /presentation/custom-events

- [ ] a custom event is returned
- [ ] there is a unit test `.spec.js` file
- [ ] "bubbles" is set to true
- [ ] extra data is set in the "details" property
- [ ] _custom-events_ and _utils_ may be imported
