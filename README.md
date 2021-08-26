#

<!-- describe your project -->

---

## Repo Setup

- Give each member _write_ access to the repo (if it's a group project)
- Turn on GitHub Pages and put a link to your website in the repo's description
- in the _Branches_ section of your repo's settings make sure:
  - The repository
    [requires a review](https://github.blog/2018-03-23-require-multiple-reviewers/)
    before pull requests can be merged.
  - The `master`/`main` branch must "_Require status checks to pass before
    merging_"
  - The `master`/`main` branch must "_Require require branches to be up to date
    before merging_"

---

## Local Setup

So you're ready to start coding? If you haven't cloned this repository already
you should, and then ...

1. Clone this repository:
   - `$ git clone git@github.com:HackYourFutureBelgium/architecture-starter.git`
2. Navigate to this repository in your local computer
   - `$ cd architecture-starter`
3. Install the project's development dependencies - you will need these for the
   code quality automation:
   - `$ npm install`

---

## Running the Site

This is a static website that only uses HTML, CSS and JavaScript, so you can run
it using any static server - `liveServer`, `http-server`, `study-lenses`. or you
can use ...

- `npm run dev`

Using this script will open your web page with Vite.js. Vite is a development
server that will load your changes to the browser every time you save, and will
give helpful error messages in the browser when there is a mistake in your code.

---

## Developing your Code

This project is a full website so you will need to run it by opening
`index.html` in the browser.

It's recommended that you use VSCode to write your HTML, CSS and JavaScript.
Each time you make a change in VSCode you will need to go to the browser and
refresh to see if it worked. Everything you have learned about the debugger will
come in handy! You can use breakpoints and `debugger` statements to step through
while your website is running.

The only code in this project that you can develop and test separately from the
rest is functions in the `/src/logic` folder, these are _pure functions_ that
will need to test. You can develop these either in VSCode or Study Lenses.

---

## Code Quality Automation

Writing code is hard. To write even just 10 lines there are 100 things you need
to think about, and 1000 mistakes you can make. Developers are clever and lazy
people. They have built tools to help with all of this.

This repository comes with features to help you and your group write good code.
Some features are for checking your code manually before pushing it, and others
are for checking your code automatically when you open a PR to the
`main`/`master` branch.

### Continuous Integration (CI)

> checks on GitHub

When you open a PR to `main`/`master` in your repository, GitHub will run the
workflows in [./.github/workflows](./.github/workflows). You can try the same
scripts locally to make sure they will pass before pushing:

- **`npm run lint:js -- ./client`**: Lints all the .js files in your `/src`
  folder, if there are any warnings or errors the check will fail.
- **`npm run lint:css -- ./client/styles`**: lints all the .css files in your
  `/styles` folder, if there are any warnings or errors the check will fail.
- **`npm run lint:html -- ./`**: lints all the .html files in your project, if
  there are any warnings or errors the check will fail.
- **`npm run test -- ./client`**: runs all the `.spec.js` fils in your `/src`
  folder. If any tests fail, this check will fail.
- **`npm run document`**: re-renders the `DOCS.md` file in the root of your
  repository, making sure that the documentation is always up to date. If the
  documentation script has any trouble the check will fail.

You will not be able to merge your branch until all the checks pass. These
checks will be run again each time you push changes to your branch, so no
worries if you don't pass the checks on your first try.

### Local Checks

> checks on your own computer

You can run the same checks locally to make sure you have no errors before
pushing, this will make everything easier for you and your reviewer. If the
checks pass locally then they should pass when you push.

- **Linting JavaScript**
  - `npm run lint:js -- ./client/src`: lint one file at a time by passing the
    path to that file
- **Linting CSS**
  - `npm run lint:css -- ./client/styles`: lint one file at a time by passing
    the path to that file
- **Linting HTML**
  - `npm run lint:html -- ./`: lint one file at a time by passing the path to
    that file
- **Testing**
  - `npm run test -- ./client`: test one `.spec.js` file at a time
- **Formatting**
  - `npm run format -- ./path/to/file`: you can format any file type with this
    command (.js, .css, .html, .md)
  - if you install the Prettier extension for VSCode and have it format on save,
    then you don't need to use this command
  - there is no extra CI check for formatting, but the linter will check some
    formatting. The rest is up to your code reviewer
- **Documenting**
  - `npm run document`: render the documentation before pushing to make sure
    there are no errors.
