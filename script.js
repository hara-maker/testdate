const quizData = [
  {
    question: "AWSでオブジェクトストレージを提供するサービスはどれ？",
    options: ["Amazon EC2", "Amazon S3", "Amazon RDS", "Amazon CloudFront"],
    answer: "Amazon S3"
  },
  {
    question: "サーバーレスコンピューティングを実現するAWSサービスは？",
    options: ["Amazon ECS", "AWS Lambda", "AWS Elastic Beanstalk", "Amazon EMR"],
    answer: "AWS Lambda"
  },
  {
    question: "AWSのデータベースサービスで、MySQLやPostgreSQLが使えるのは？",
    options: ["Amazon Aurora", "Amazon DynamoDB", "Amazon Redshift", "Amazon SQS"],
    answer: "Amazon Aurora"
  }
];

let currentQuestion = 0;

const questionEl = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
  const data = quizData[currentQuestion];
  questionEl.textContent = data.question;
  optionsContainer.innerHTML = "";
  feedbackEl.textContent = "";

  data.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => handleAnswer(option);
    optionsContainer.appendChild(button);
  });
}

function handleAnswer(selected) {
  const correct = quizData[currentQuestion].answer;
  feedbackEl.textContent = selected === correct ? "✅ 正解！" : `❌ 不正解。正しい答えは「${correct}」です`;
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    questionEl.textContent = "🎉 クイズ終了！お疲れ様でした！";
    optionsContainer.innerHTML = "";
    nextBtn.style.display = "none";
  }
};

loadQuestion();
