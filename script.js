document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS animations
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    offset: 100,
  });

  // Initialize particles.js
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#6c5ce7",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#6c5ce7",
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  });

  // 3D Tilt Effect for Profile Photo
  const profilePhoto = document.getElementById("profilePhoto");

  if (profilePhoto) {
    profilePhoto.addEventListener("mousemove", (e) => {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 15;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 15;
      profilePhoto.querySelector(
        ".photo-frame"
      ).style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    profilePhoto.addEventListener("mouseenter", () => {
      profilePhoto.querySelector(".photo-frame").style.transition = "none";
    });

    profilePhoto.addEventListener("mouseleave", () => {
      profilePhoto.querySelector(".photo-frame").style.transition =
        "transform 0.5s ease";
      profilePhoto.querySelector(".photo-frame").style.transform =
        "rotateY(0deg) rotateX(0deg)";
    });
  }

  // Modal Functionality
  const personalProjectsBtn = document.getElementById("personalProjectsBtn");
  const otherProjectsBtn = document.getElementById("otherProjectsBtn");
  const personalModal = document.getElementById("personalProjectsModal");
  const otherModal = document.getElementById("otherProjectsModal");
  const closeModals = document.querySelectorAll(".close-modal");

  if (personalProjectsBtn) {
    personalProjectsBtn.addEventListener("click", () => {
      personalModal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  }

  if (otherProjectsBtn) {
    otherProjectsBtn.addEventListener("click", () => {
      otherModal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  }

  closeModals.forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
      document.querySelectorAll(".modal").forEach((modal) => {
        modal.classList.remove("active");
      });
      document.body.style.overflow = "auto";
    });
  });

  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      document.querySelectorAll(".modal").forEach((modal) => {
        modal.classList.remove("active");
      });
      document.body.style.overflow = "auto";
    }
  });

  // Add smooth scrolling to all links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 20,
          behavior: "smooth",
        });
      }
    });
  });

  // Add animation to cards when they come into view
  const animateCards = () => {
    const cards = document.querySelectorAll(".card");
    const windowHeight = window.innerHeight;

    cards.forEach((card) => {
      const cardPosition = card.getBoundingClientRect().top;
      const cardVisible = 150;

      if (cardPosition < windowHeight - cardVisible) {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }
    });
  };

  window.addEventListener("scroll", animateCards);
  animateCards(); // Initialize
});
