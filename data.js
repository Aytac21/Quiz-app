const quizData = [
  {
    category: "HTML",
    levels: [
      {
        title: "Beginner",
        questions: [
          {
            question: "What does HTML stand for?",
            options: [
              "Hyper Text Markup Language",
              "Highly Text Markup Language",
              "Hyperlink and Text Markup Language",
            ],
            correctAnswer: "Hyper Text Markup Language",
          },

          {
            question: "Which HTML tag is used to create a hyperlink?",
            options: ["<a>", "<link>", "<href>"],
            correctAnswer: "<a>",
          },
          {
            question:
              'What is the purpose of the HTML "alt" attribute in the "img" tag?',
            options: [
              "To provide alternative text for browsers to display if the image cannot be loaded",
              "To define the alignment of the image",
              "To create a hyperlink from the image",
            ],
            correctAnswer:
              "To provide alternative text for browsers to display if the image cannot be loaded",
          },
          {
            question:
              "Which HTML tag is used to define the structure of an HTML document?",
            options: ["<head>", "<body>", "<html>"],
            correctAnswer: "<html>",
          },
          {
            question: "What is the correct HTML for creating a checkbox?",
            options: ["<check>", '<input type="checkbox">', "<checkbox>"],
            correctAnswer: '<input type="checkbox">',
          },
          {
            question: "Which HTML tag is used to define an unordered list?",
            options: ["<ol>", "<ul>", "<li>"],
            correctAnswer: "<ul>",
          },
          {
            question: "What does CSS stand for?",
            options: [
              "Counter Style Sheets",
              "Computer Style Sheets",
              "Cascading Style Sheets",
            ],
            correctAnswer: "Cascading Style Sheets",
          },
        ],
      },
      {
        title: "Intermediate",
        questions: [],
      },
      {
        title: "Advanced",
        questions: [],
      },
    ],
  },
  {
    category: "CSS",
    levels: [
      {
        title: "Beginner",
        questions: [
          {
            question: "What does CSS stand for?",
            options: [
              "Counter Style Sheets",
              "Computer Style Sheets",
              "Cascading Style Sheets",
            ],
            correctAnswer: "Cascading Style Sheets",
          },
          {
            question:
              "Which CSS property is used to change the text color of an element?",
            options: ["color", "text-color", "font-color"],
            correctAnswer: "color",
          },
        ],
      },
      {
        title: "Intermediate",
        questions: [],
      },
      {
        title: "Advanced",
        questions: [],
      },
    ],
  },
  // .........................
  {
    category: "JavaScript",
    levels: [
      {
        title: "Beginner",
        questions: [
          {
            question: "Which JavaScript keyword is used to declare a variable?",
            options: ["var", "variable", "let"],
            correctAnswer: "var",
          },
        ],
      },
      {
        title: "Intermediate",
        questions: [],
      },
      {
        title: "Advanced",
        questions: [],
      },
    ],
  },
];

export default quizData;
