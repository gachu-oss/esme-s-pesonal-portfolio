// ---- Testimonials Data ----
// Stored as an object (JS requirement)

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
// Loop through the object and add each one to the page

const testimonialsContainer = document.getElementById("testimonials-container");

for (const key in testimonials) {
  const item = testimonials[key];

  const card = document.createElement("div");
  card.classList.add("testimonial-card");

  card.innerHTML = "<p>\"" + item.text + "\"</p><span>- " + item.author + "</span>";

  testimonialsContainer.appendChild(card);
}
