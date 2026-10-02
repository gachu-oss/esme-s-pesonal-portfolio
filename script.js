// ---- Testimonials Data ----
const testimonials = {
  first: {
    text: "A fast learner who always asks great questions!",
    author: "Jordan Lee, Instructor"
  },
  second: {
    text: "Did a fantastic job on our club website for a first project!",
    author: "Priya Sharma, Club President"
  },
  third: {
    text: "Really impressed by the progress in such a short time.",
    author: "Marcus Osei, Study Group"
  }
};

// ---- Render Testimonials ----
const testimonialsContainer = document.getElementById("testimonials-container");

for (const key in testimonials) {
  const item = testimonials[key];
  const card = document.createElement("div");
  card.classList.add("testimonial-card");
  card.innerHTML = "<p>\"" + item.text + "\"</p><span>- " + item.author + "</span>";
  testimonialsContainer.appendChild(card);
}

// ---- Projects Data ----

const projects = [
  {
    title: "Weather App",
    description: "Shows the current weather using a free API.",
    tech: "HTML, CSS, JavaScript"
  },
  {
    title: "To-Do List",
    description: "Add and remove tasks. Data saved in localStorage.",
    tech: "HTML, CSS, JavaScript"
  }
];
