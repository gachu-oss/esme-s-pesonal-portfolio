// ---- Testimonials Data ----
// Stored as an object (JS requirement)

const testimonials = {
  first: {
    text: "Alex is a fast learner and always asks great questions. A pleasure to work with!",
    author: "Jordan Lee, Bootcamp Instructor"
  },
  second: {
    text: "Alex built a small website for our club and did a fantastic job for a first project!",
    author: "Priya Sharma, Club President"
  },
  third: {
    text: "Really impressed by the progress Alex has made in such a short time.",
    author: "Marcus Osei, Study Group Friend"
  }
};

// ---- Render Testimonials ----
// Loop through the object and add each one to the page

const testimonialsContainer = document.getElementById("testimonials-container");

for (const key in testimonials) {
  const item = testimonials[key];

  const card = document.createElement("div");
  card.classList.add("testimonial-card");

  card.innerHTML = "<p>\"" + item.text + "\"</p><span>— " + item.author + "</span>";

  testimonialsContainer.appendChild(card);
}

// ---- Projects Data ----

const projects = [
  {
    title: "My Portfolio Website",
    description: "A personal portfolio website to showcase my skills, projects, and contact info. Built as my first real web project.",
    tech: "HTML, CSS, JavaScript"
  },
  {
    title: "Tanga Management System",
    description: "A management system for handling Tanga-related records and operations. Includes data entry, tracking, and display features.",
    tech: "HTML, CSS, JavaScript"
  },
  {
    title: "Digit Options",
    description: "A system for managing digit-based options and selections. Designed to handle numerical inputs and display results clearly.",
    tech: "HTML, CSS, JavaScript"
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
