// Sample questions. DONT touch this data
const questions = [
    {
        text: "Which language is primarily used for web app development?",
        options: ["C#", "Python", "JavaScript", "Swift"],
        correct: 2
    },
    {
        text: "Which of the following is a relational database management system?",
        options: ["Oracle", "Scala", "Perl", "Java"],
        correct: 0
    },
    {
        text: "What does HTML stand for?",
        options: ["Hyperlink and Text Markup Language", "High Technology Modern Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
        correct: 2
    },
    {
        text: "What does CSS stand for?",
        options: ["Cascading Stylesheets", "Cascading Styling Styles", "Cascading Sheets for Stylings", "Cascaded Stylesheets"],
        correct: 0
    },
    {
        text: "Which of the following is not an object-oriented programming language?",
        options: ["Java", "C#", "Scala", "C"],
        correct: 3
    },
    {
        text: "Which tool is used to ensure code quality in JavaScript?",
        options: ["JSLint", "TypeScript", "Babel", "Webpack"],
        correct: 0
    },
    {
        text: "What is the primary use of the Git command 'clone'?",
        options: ["To stage changes", "To copy a repository", "To switch to a different branch", "To list all the files in a repository"],
        correct: 1
    },
    {
        text: "What does API stand for in the context of programming?",
        options: ["Apple Pie Interface", "Application Programming Interface", "Advanced Peripheral Integration", "Application Process Integration"],
        correct: 1
    },
    {
        text: "Javascript is a single threaded programming language",
        options: ["True", "False"],
        correct: 0
    },
    {
        text: "API calls in Javascript can be done using the following method",
        options: ["setTimeout()", "setInterval()", "fetch()", "get()"],
        correct: 2
    },
];

// State variables
let currentQuestionIndex = 0;
let score = 0;

// DOM elements
const questionContainer = document.getElementById("question");
const optionsContainer = document.getElementById("answer-list");
const submitButton = document.getElementById("submit");
const nextButton = document.getElementById("next");

// Load the current question
function loadQuestion() {
    // Clear previous options
    optionsContainer.innerHTML = "";

    // Get the current question
    const question = questions[currentQuestionIndex];
    questionContainer.textContent = question.text;

    // Display options
    question.options.forEach((option, index) => {
        const optionElement = document.createElement("li");
        optionElement.innerHTML = `
            <input type="radio" name="option" id="option${index}" value="${index}">
            <label for="option${index}">${option}</label>
        `;
        optionsContainer.appendChild(optionElement);
    });

    // Reset button states
    submitButton.disabled = false;
    nextButton.disabled = true;
}

// Handle submit button click
submitButton.addEventListener("click", () => {
    // Find selected option
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        alert("Please select an option!");
        return;
    }

    const selectedIndex = parseInt(selectedOption.value, 10);
    const correctIndex = questions[currentQuestionIndex].correct;

    // Validate answer
    if (selectedIndex === correctIndex) {
        alert("Correct!");
        score++;
    } else {
        alert(`Incorrect! The correct answer is: ${questions[currentQuestionIndex].options[correctIndex]}`);
    }

    // Disable submit and enable next
    submitButton.disabled = true;
    nextButton.disabled = false;
});

// Handle next button click
nextButton.addEventListener("click", () => {
    // Move to the next question
    currentQuestionIndex++;

    if (currentQuestionIndex >= questions.length) {
        // Quiz is complete
        questionContainer.textContent = "Quiz Complete!";
        optionsContainer.innerHTML = "";
        alert(`Your score: ${score} / ${questions.length}`);
        submitButton.disabled = true;
        nextButton.disabled = true;
    } else {
        // Load the next question
        loadQuestion();
    }
});

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    loadQuestion();
});