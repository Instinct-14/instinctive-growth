const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));


// Contact form
function handleSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const data = new FormData(form);

  const destination = "nasar@instinctivegrowth.com";
  const subject = encodeURIComponent("New Instinctive Growth inquiry");

  const body = encodeURIComponent(
    `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nWebsite: ${data.get("website")}\n\nGoals:\n${data.get("message")}`
  );

  window.location.href = `mailto:${destination}?subject=${subject}&body=${body}`;
}


// Mobile menu
const menuButton = document.querySelector(".menu");
const mobileNav = document.querySelector(".nav nav");

if (menuButton && mobileNav) {
  menuButton.addEventListener("click", () => {
    mobileNav.classList.toggle("mobile-open");
    menuButton.classList.toggle("active");
  });
}
