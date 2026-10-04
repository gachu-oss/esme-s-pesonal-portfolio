// ---- Testimonials Data ----
const testimonials = {
  first: {
    text: "A fast learner who always asks great questions!",
    author: "lyrical Chuga, Instructor"
  },
  second: {
    text: "Did a fantastic job on our club website for a first project!",
    author: "Mad Munga, Club President"
  },
  third: {
    text: "Really impressed by the progress in such a short time.",
    author: "Lil Maina, Study Group"
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
    title: "Tanga Website",
    description: "A corresponding  website to showcase what tanga glass and  aluminium actually does.",
    tech: "HTML, CSS, JavaScript"
  },
  {
    title: "Tanga Management System",
    description: "A management system for handling Tanga-related records and operations. Includes data entry, tracking and stock managment, and an interactive ui .",
    tech: "HTML, CSS, JavaScript type script"
  },
  {
    title: "Digit Options",
    description: "A system for managing digit-based options and selections. Designed to handle numerical inputs and display results clearly.",
    tech: "HTML, CSS, JavaScript,typescript"
  }
];

// ---- Render Projects ----
const projectsContainer = document.getElementById("projects-container");

for (let i = 0; i < projects.length; i++) {
  const project = projects[i];
  const card = document.createElement("div");
  card.classList.add("project-card");
  card.innerHTML =
    "<h3>" + project.title + "</h3>" +
    "<p>" + project.description + "</p>" +
    "<p class='tech'>Tech: " + project.tech + "</p>";
  projectsContainer.appendChild(card);
}
