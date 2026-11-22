(function () {
  "use strict";
  const elementos = Array.from(document.querySelectorAll("[data-reveal]"));
  if (!elementos.length) return;

  function enViewport(el) {
    const r = el.getBoundingClientRect();
    return r.top < window.innerHeight && r.bottom > 0;
  }

  if (!("IntersectionObserver" in window)) {
    elementos.forEach((el) => el.classList.add("visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.05, rootMargin: "0px 0px 0px 0px" },
  );

  elementos.forEach((el) => {
    if (enViewport(el)) {
      el.classList.add("visible");
    } else {
      io.observe(el);
    }
  });

  setTimeout(() => {
    elementos.forEach((el) => el.classList.add("visible"));
  }, 400);
})();
