const header = document.querySelector(".site-header");

const updateHeader = () => {
  if (!header) return;
  header.style.borderBottom =
    window.scrollY > 20 ? "1px solid rgba(196, 226, 255, 0.16)" : "1px solid transparent";
};

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();
