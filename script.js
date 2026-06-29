const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 }
);

reveals.forEach(element => observer.observe(element));

const compliments = [
  "Joy is dumb, but like... premium dumb.",
  "Joy has main character energy with NPC decision-making.",
  "Joy is proof that chaos can be adorable.",
  "Joy may be a walking L, but at least the walk is iconic.",
  "Joy is the friend group’s emotional support problem."
];

const complimentButton = document.getElementById("complimentButton");
const complimentText = document.getElementById("compliment");

complimentButton.addEventListener("click", () => {
  const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
  complimentText.textContent = randomCompliment;
  createConfetti(36);
});

document.getElementById("chaosButton").addEventListener("click", () => {
  document.body.animate(
    [
      { transform: "translateX(0)" },
      { transform: "translateX(-8px)" },
      { transform: "translateX(8px)" },
      { transform: "translateX(-5px)" },
      { transform: "translateX(5px)" },
      { transform: "translateX(0)" }
    ],
    { duration: 420, easing: "ease-in-out" }
  );

  createConfetti(55);
});

function createConfetti(amount) {
  const colors = ["#a78bfa", "#22d3ee", "#f472b6", "#facc15", "#34d399"];

  for (let i = 0; i < amount; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = Math.random() * 0.3 + "s";
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 1800);
  }
}
