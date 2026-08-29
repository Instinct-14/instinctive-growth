// Reveal sections as they enter the screen
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});


// Contact form
function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const data = new FormData(form);

  const name = data.get("name");
  const email = data.get("email");
  const website = data.get("website");
  const message = data.get("message");

  const subject = encodeURIComponent(
    `Growth Audit Inquiry — ${name}`
  );

  const body = encodeURIComponent(
`Hi Nasar,

I'd like to learn more about working with Instinctive Growth.

Name: ${name}
Work email: ${email}
Website: ${website || "Not provided"}

What I'm looking to grow:
${message}
`
  );

  window.location.href =
    `mailto:nasar@instinctivegrowth.com?subject=${subject}&body=${body}`;

  const note = document.getElementById("form-note");

  if (note) {
    note.textContent = "Opening your email client...";
  }

  form.reset();
}


// Mobile menu
const menuButton = document.querySelector(".menu");
const nav = document.querySelector(".nav nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    nav.classList.toggle("mobile-open");
  });
}
