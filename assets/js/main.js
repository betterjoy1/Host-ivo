document.addEventListener('DOMContentLoaded', function () {
  // Mobile Navigation Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('active');
    });
  }

  // FAQ Accordion Toggle
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(function (button) {
    button.addEventListener('click', function () {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      const answer = button.nextElementSibling;

      // Close all other active answers
      faqQuestions.forEach(function (otherBtn) {
        if (otherBtn !== button) {
          otherBtn.setAttribute('aria-expanded', 'false');
          if (otherBtn.nextElementSibling) {
            otherBtn.nextElementSibling.classList.remove('active');
          }
        }
      });

      button.setAttribute('aria-expanded', !expanded);
      if (answer) {
        answer.classList.toggle('active');
      }
    });
  });
});
