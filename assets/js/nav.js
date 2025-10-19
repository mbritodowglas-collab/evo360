function navTo(page) {
  window.location.href = page;
}

// destaca ícone ativo no rodapé
const current = location.pathname.split("/").pop();
const links = document.querySelectorAll(".navbar a");
links.forEach(link => {
  if (link.getAttribute("href") === current) link.classList.add("active");
});
