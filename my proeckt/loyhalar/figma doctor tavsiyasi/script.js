
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {


  const tl = gsap.timeline();

  tl.from(".navbar", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
  })
    .from(".hero-text h1", {
      x: -200,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)"
    }, "-=0.5")
    .from(".hero-text p", {
      x: -100,
      opacity: 0,
      duration: 0.8
    }, "-=0.6")
    .from(".btn-primary", {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)"
    }, "-=0.4")
    .from(".hero-img", {
      x: 200,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=1");

  gsap.from(".card-list li", {
    scrollTrigger: {
      trigger: ".services-section",
      start: "top 70%",
    },
    y: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out"
  });


  gsap.from(".image-side", {
    scrollTrigger: {
      trigger: ".healthcare-section",
      start: "top 80%",
    },
    x: -150,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  });

  gsap.from(".content-side", {
    scrollTrigger: {
      trigger: ".healthcare-section",
      start: "top 80%",
    },
    x: 150,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  });


  const cards = document.querySelectorAll('.card-list li');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        scale: 1.05,
        boxShadow: "0px 20px 40px rgba(0,0,0,0.1)",
        duration: 0.3
      });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        scale: 1,
        boxShadow: "0px 10px 20px rgba(0,0,0,0.05)",
        duration: 0.3
      });
    });
  });


  window.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;
    const xPos = (clientX / window.innerWidth - 0.5) * 30;
    const yPos = (clientY / window.innerHeight - 0.5) * 30;

    gsap.to(".hero-img img", {
      x: xPos,
      y: yPos,
      duration: 1,
      ease: "power2.out"
    });
  });
});