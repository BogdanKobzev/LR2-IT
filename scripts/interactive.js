document.getElementById("quiz-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const answers = {
    q1: "b",
    q2: "c",
    q3: "b",
    q4: "c",
    q5: "a"
  };

  let score = 0;
  let total = Object.keys(answers).length;

  for (let q in answers) {
    const userAnswer = document.querySelector([name=${q}]).value;
    if (userAnswer === answers[q]) score++;
  }

  const result = document.getElementById("result");
  result.innerHTML = ✅ Ви дали ${score} правильн(их) відповід(ей) з ${total}.<br> +
                    (score === total ? "🎉 Вітаємо! Ви засвоїли тему!" :
                    "📘 Перевірте помилки та спробуйте ще раз.");
});
