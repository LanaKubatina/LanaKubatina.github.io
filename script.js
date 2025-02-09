document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  navToggle.addEventListener('click', function () {
    navMenu.classList.toggle('active');
  });
// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 65; // Adjust this value for desired spacing
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Smooth scrolling for the "Contact Me" button in the hero section
const contactBtn = document.getElementById('contactBtn');
if (contactBtn) {
  contactBtn.addEventListener('click', function () {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 65; // Adjust this value for desired spacing
      const elementPosition = contactSection.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
}

  // Resume button: Open the resume in a new tab
  const resumeBtn = document.getElementById('resumeBtn');
  if (resumeBtn) {
    resumeBtn.addEventListener('click', function () {
      window.open(
        'https://docs.google.com/document/d/1lS8OmZtrcGG_mYmTUWyuJpfbNBo50zGChKTTw7blN30/edit?usp=sharing',
        '_blank'
      );
    });
  }

  // Email button: Open the default email client
  const emailBtn = document.getElementById('emailBtn');
  if (emailBtn) {
    emailBtn.addEventListener('click', function () {
      window.location.href = 'mailto:lana@example.com';
    });
  }
});
