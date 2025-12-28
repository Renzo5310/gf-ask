const yesBtn = document.getElementById("yesBtn");
const noBtn  = document.getElementById("noBtn");
const result = document.getElementById("result");

yesBtn.addEventListener("click", () => {
  result.hidden = false;
  yesBtn.disabled = true;
  noBtn.disabled = true;

  for (let i = 0; i < 30; i++) {
    const s = document.createElement("span");
    s.textContent = Math.random() > 0.5 ? "💖" : "✨";
    s.style.position = "fixed";
    s.style.left = (Math.random() * 100) + "vw";
    s.style.top = "-5vh";
    s.style.fontSize = (14 + Math.random()*18) + "px";
    s.style.transition = "transform 1.2s ease, opacity 1.2s ease";
    document.body.appendChild(s);

    requestAnimationFrame(() => {
      s.style.transform = `translateY(${110 + Math.random()*30}vh) rotate(${Math.random()*360}deg)`;
      s.style.opacity = "0";
    });

    setTimeout(() => s.remove(), 1400);
  }
});

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", moveNoButton);

function moveNoButton(){
  const padding = 12;
  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const x = Math.max(padding, Math.floor(Math.random() * maxX));
  const y = Math.max(padding, Math.floor(Math.random() * maxY));

  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top  = y + "px";
}
