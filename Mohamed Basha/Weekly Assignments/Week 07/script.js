window.onload = function () {
  var navToggle = document.querySelector(".nav-toggle");
  var navList = document.querySelector(".nav-list");
  navToggle.onclick = function () {
    navList.classList.toggle("active");
    navToggle.classList.toggle("open");
  };

  var projects = document.querySelectorAll(".project-card");
  var current = 0;

  function showProject(index) {
    for (var i = 0; i < projects.length; i++) {
      if (i == index) {
        projects[i].style.display = "block";
      } else {
        projects[i].style.display = "none";
      }
    }
  }

  var nextBtn = document.querySelector(".next-btn");
  var prevBtn = document.querySelector(".prev-btn");

  nextBtn.onclick = function () {
    current = current + 1;
    if (current >= projects.length) {
      current = 0;
    }
    showProject(current);
  };

  prevBtn.onclick = function () {
    current = current - 1;
    if (current < 0) {
      current = projects.length - 1;
    }
    showProject(current);
  };

  showProject(current);

  var contactForm = document.querySelector(".contact-form");
  contactForm.onsubmit = function (a) {
    a.preventDefault();
    alert("Thank you for reaching out! I will get back to you soon.");
    contactForm.reset();
  };

  var navLinks = document.querySelectorAll(".nav-link");
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].onclick = function (e) {
      var href = this.getAttribute("href");
      if (href && href[0] == "#") {
        e.preventDefault();
        var section = document.querySelector(href);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
  }
};
