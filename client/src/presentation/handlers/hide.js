export const hideWelcomeMessage = (e) => {
    // hide the name of the quiz, the description and the start button
    e.preventDefault();
    document.getElementById('welcome-message').style.display = "none";
}