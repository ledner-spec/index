const heart = document.getElementById("heartLetter");
const letter = document.getElementById("letter");
const typing = document.getElementById("typing");
const tapText = document.querySelector(".tap-text");

const paragraphs = [
  "Este sábado 14 de San Valentín quise dejar estas palabras aquí, sin una razón especial y sin necesidad de decir demasiado.",
  "A veces, con solo pensar en ti, el día se siente un poco más liviano, los pensamientos se acomodan solos y el ritmo de las cosas parece ir más despacio. Ojalá hoy esté lleno de momentos sencillos, de calma, de pequeños detalles que se notan sin hacer ruido y de sonrisas que aparezcan de forma natural. Que el tiempo te trate con suavidad, que encuentres tranquilidad en lo cotidiano y que cada instante tenga algo amable que acompañe tu camino. Nada más que eso. Solo un deseo tranquilo para ti. Que estés bien. 💖"
];

let pIndex = 0;
let charIndex = 0;
let currentP = null;
let started = false;

heart.addEventListener("click", () => {
  if (started) return;
  started = true;

  tapText.style.display = "none";
  heart.style.animation = "heartbeat .6s infinite";

  letter.classList.add("open");
  setTimeout(writeText, 600);
});

function writeText() {
  if (!currentP) {
    currentP = document.createElement("p");
    typing.appendChild(currentP);
  }

  if (charIndex < paragraphs[pIndex].length) {
    currentP.textContent += paragraphs[pIndex][charIndex];
    charIndex++;

    // Auto-scroll SOLO si el usuario no está leyendo arriba
    typing.scrollTop = typing.scrollHeight;

    setTimeout(writeText, 45);
  } else {
    pIndex++;
    charIndex = 0;
    currentP = null;

    if (pIndex < paragraphs.length) {
      setTimeout(writeText, 400);
    }
  }
}
