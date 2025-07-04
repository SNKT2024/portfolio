// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  const href = anchor.getAttribute("href");
  if (href.length > 1 && document.querySelector(href)) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  }
});

// Mobile menu toggle functionality
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const closeMobileMenuButton = document.getElementById("close-mobile-menu");

function showMobileMenu() {
  mobileMenu.classList.remove("hidden");
  document.body.style.overflow = "hidden"; // Prevent scrolling when menu is open
}

function hideMobileMenu() {
  mobileMenu.classList.add("hidden");
  document.body.style.overflow = ""; // Restore scrolling
}

mobileMenuButton.addEventListener("click", showMobileMenu);
closeMobileMenuButton.addEventListener("click", hideMobileMenu);

// Close mobile menu when a link is clicked inside it
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", hideMobileMenu);
});

// Simple animation for hero section elements
document.addEventListener("DOMContentLoaded", () => {
  const heroElements = document.querySelectorAll(".animate-fade-in-up");
  heroElements.forEach((el, index) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    setTimeout(() => {
      el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100 * index + (parseInt(el.dataset.delay) || 0));
  });
});

// Fallback for image loading errors
document.querySelectorAll("img").forEach((img) => {
  img.onerror = function () {
    this.onerror = null; // Prevent infinite loop
    this.src = "https://placehold.co/300x200/cccccc/333333?text=Image+Error"; // Generic placeholder
  };
});

// Project Data (for modal)
const projectsData = [
  {
    id: "project1",
    title: "Store Rating App",
    thumbnail: "https://i.postimg.cc/FRbJyRtW/rating-app.png",
    fullImage: "https://i.postimg.cc/FRbJyRtW/rating-app.png",
    description:
      "A full-featured web app allowing users to rate and review stores. It supports role-based authentication with JWT, providing tailored dashboards for admins, store owners, and users. Built with React on the frontend, Node.js and Express on the backend, and MySQL as the database.",
    github_url: "https://github.com/SNKT2024/rating_app",
    live_url: null,
  },
  {
    id: "project2",
    title: "Course Portal",
    thumbnail: "https://i.postimg.cc/cLmx9FLS/course-portal.png",
    fullImage: "https://i.postimg.cc/cLmx9FLS/course-portal.png",
    description:
      "An online learning platform that allows users to browse, enroll, and interact with courses organized into sections and lessons. Implements secure user authentication and role-based access using JWT. Developed with React for the frontend, Node.js and Express for the backend, and MongoDB for flexible data storage. The app supports course creation, editing, and dynamic content rendering, offering a smooth learning experience.",
    github_url: "https://github.com/SNKT2024/course-portal",
    live_url: null, // No live demo for this example
  },
  {
    id: "project3",
    title: "StudyHub AI",
    thumbnail: "https://i.postimg.cc/CxH5yFJ9/study-hub.png",
    fullImage: "https://i.postimg.cc/CxH5yFJ9/study-hub.png",
    description:
      "A smart study assistant leveraging AI to help students with note summarization, doubt-solving, and customized learning roadmaps. Developed using React and Next.js with MongoDB for data management and Clerk Auth for secure authentication. The app applies prompt engineering to optimize AI interactions, creating a personalized learning experience.",
    github_url: "https://github.com/SNKT2024/study_hub_ai",
    live_url: "https://study-hub-ai.vercel.app/",
  },
  {
    id: "project4",
    title: "AI-Chat-Support",
    thumbnail: "https://i.postimg.cc/d05014bB/ai-chat-bot.png",
    fullImage: "https://i.postimg.cc/d05014bB/ai-chat-bot.png",
    description:
      "An AI-driven chatbot designed to provide real-time customer support with personalized and context-aware responses. Developed using React and Next.js, integrated with Gemini AI for advanced conversational capabilities. Utilizes prompt engineering to tailor replies based on user input.",
    github_url: "https://github.com/SNKT2024/ai-chat-support",
    live_url: "https://ai-chat-support-six.vercel.app/",
  },
  {
    id: "project5",
    title: "MERN Blog Application",
    thumbnail: "https://placehold.co/300x200/a78bfa/ffffff?text=Blog+App",
    fullImage: "https://placehold.co/600x400/a78bfa/ffffff?text=Blog+App+Large",
    description:
      "A feature-rich blog platform with a rich text editor, user comments, tag management, and administrative controls, built with the MERN stack. Designed for a smooth content creation and consumption experience.",
    github_url: "https://github.com/yourusername/mern-blog-app",
    live_url: "https://mern-blog-app-demo.netlify.app/",
  },
  {
    id: "project6",
    title: "Recipe Sharing App",
    thumbnail: "https://placehold.co/300x200/8b5cf6/ffffff?text=Recipe+App",
    fullImage:
      "https://placehold.co/600x400/8b5cf6/ffffff?text=Recipe+App+Large",
    description:
      "A community-driven recipe sharing application, allowing users to upload, search, and rate recipes. Built with React for the frontend and Node.js/Express for the backend, it features user profiles, recipe categories, and a robust search functionality.",
    github_url: "https://github.com/yourusername/recipe-sharing-app",
    live_url: "https://recipe-sharing-app-demo.netlify.app/",
  },
];

// Project Modal Elements
const projectModalOverlay = document.getElementById("project-modal-overlay");
const projectModalTitle = document.getElementById("project-modal-title");
const projectModalImage = document.getElementById("project-modal-image");
const projectModalDescription = document.getElementById(
  "project-modal-description"
);
const projectModalGithubBtn = document.getElementById("project-modal-github");
const projectModalLiveBtn = document.getElementById("project-modal-live");
const projectModalCloseBtn = document.getElementById("project-modal-close");
const projectCards = document.querySelectorAll(".project-card");

// Function to show the project modal
function showProjectModal() {
  projectModalOverlay.classList.add("show");
  document.body.style.overflow = "hidden"; // Prevent background scrolling
}

// Function to hide the project modal
function hideProjectModal() {
  projectModalOverlay.classList.remove("show");
  document.body.style.overflow = ""; // Restore background scrolling
}

// Event listener for closing the project modal
projectModalCloseBtn.addEventListener("click", hideProjectModal);
projectModalOverlay.addEventListener("click", (e) => {
  if (e.target === projectModalOverlay) {
    hideProjectModal();
  }
});

// Add event listeners to all project cards
projectCards.forEach((card) => {
  card.addEventListener("click", () => {
    const projectId = card.dataset.projectId;
    const project = projectsData.find((p) => p.id === projectId);

    if (project) {
      projectModalTitle.textContent = project.title;
      projectModalImage.src = project.fullImage;
      projectModalDescription.textContent = project.description;

      // Conditionally show/hide and set links for GitHub button
      if (project.github_url) {
        projectModalGithubBtn.href = project.github_url;
        projectModalGithubBtn.classList.remove("hidden");
      } else {
        projectModalGithubBtn.classList.add("hidden");
      }

      // Conditionally show/hide and set links for Live Demo button
      if (project.live_url) {
        projectModalLiveBtn.href = project.live_url;
        projectModalLiveBtn.classList.remove("hidden");
      } else {
        projectModalLiveBtn.classList.add("hidden");
      }

      showProjectModal();
    }
  });
});
