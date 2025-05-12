window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  const body = document.body;
  const icon = document.getElementById("themeIcon");

  if (savedTheme === "dark") {
    body.classList.add("dark");
    icon.classList.replace("fa-sun", "fa-moon");
  }
};

document.getElementById("themeBtn").addEventListener("click", () => {
  const body = document.body;
  const icon = document.getElementById("themeIcon");

  body.classList.toggle("dark");

  // Save preference
  const theme = body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);

  // Switch icon
  if (body.classList.contains("dark")) {
    icon.classList.replace("fa-sun", "fa-moon");
  } else {
    icon.classList.replace("fa-moon", "fa-sun");
  }

  // Animate icon
  icon.classList.add("spin");
  setTimeout(() => icon.classList.remove("spin"), 1000);
});

document.getElementById("themeBtn").addEventListener("click", function(e) {
  const circle = document.createElement("span");
  circle.className = "ripple";
  this.appendChild(circle);

  circle.style.left = `${e.offsetX}px`;
  circle.style.top = `${e.offsetY}px`;

  setTimeout(() => circle.remove(), 600);
});

function toggleTheme() {
  // ... existing code ...
  // Trigger pulse animation
  themeToggle.classList.add('animate-pulse');
  setTimeout(() => {
    themeToggle.classList.remove('animate-pulse');
  }, 1000);
}


function toggleTheme() {
  const body = document.body;
  const newTheme = body.classList.contains('dark-theme') ? 'light' : 'dark';
  body.classList.toggle('dark-theme');
  localStorage.setItem('theme', newTheme);
  
  // Trigger pulse animation on the theme toggle button
  const themeToggle = document.querySelector('.theme-toggle');
  themeToggle.classList.add('animate-pulse');
  setTimeout(() => {
    themeToggle.classList.remove('animate-pulse');
  }, 1000); // Matches animation duration
}